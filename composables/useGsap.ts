import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { isRef, onScopeDispose, getCurrentScope } from 'vue'
import type { Ref } from 'vue'

interface UseGsapOptions {
  /**
   * Scope for selector text - all selectors will be scoped to this element
   */
  scope?: Ref<HTMLElement | null> | HTMLElement | null
}

interface UseGsapReturn {
  /**
   * GSAP instance - use this for all animations
   */
  gsap: typeof gsap
  /**
   * ScrollTrigger class for creating standalone ScrollTriggers
   */
  ScrollTrigger: typeof ScrollTrigger
  /**
   * Wraps a function to make it "context-safe" - any GSAP animations
   * created inside will be automatically cleaned up
   */
  contextSafe: <T extends (...args: any[]) => any>(fn: T) => T
}

/**
 * Composable for using GSAP with automatic cleanup in Vue/Nuxt components.
 *
 * All GSAP animations and ScrollTriggers created within the component will be
 * automatically reverted and killed when the component unmounts.
 *
 * @example
 * ```vue
 * <script setup>
 * const { gsap, ScrollTrigger, contextSafe } = useGsap()
 *
 * onMounted(() => {
 *   // These animations will be automatically cleaned up
 *   gsap.to('.box', { x: 100 })
 *   gsap.to('.circle', {
 *     y: 50,
 *     scrollTrigger: { trigger: '.circle', scrub: true }
 *   })
 * })
 *
 * // For event handlers, wrap in contextSafe
 * const handleClick = contextSafe(() => {
 *   gsap.to('.box', { rotation: 360 })
 * })
 * </script>
 * ```
 */
export function useGsap(options: UseGsapOptions = {}): UseGsapReturn {
  // Only run on client-side
  if (!import.meta.client) {
    // Return no-op functions for SSR
    return {
      gsap,
      ScrollTrigger,
      contextSafe: <T extends (...args: any[]) => any>(fn: T) => fn,
    }
  }

  // Get the scope element
  const getScope = (): Element | undefined => {
    if (!options.scope) return undefined
    if (isRef(options.scope)) {
      return options.scope.value ?? undefined
    }
    return options.scope ?? undefined
  }

  // Create context immediately (will be populated during onMounted)
  const ctx = gsap.context(() => {}, getScope())

  // Clean up on unmount - revert all animations and kill ScrollTriggers
  // Only register the disposal if there is an active effect scope. Calling
  // `onScopeDispose` without an active scope triggers a Vue warning.
  if (getCurrentScope()) {
    onScopeDispose(() => {
      ctx.revert()
    })
  }

  /**
   * Wraps a function to make any GSAP animations created inside
   * automatically tracked for cleanup
   */
  const contextSafe = <T extends (...args: any[]) => any>(fn: T): T => {
    return ((...args: any[]) => {
      let result: any
      ctx.add(() => {
        result = fn(...args)
      })
      return result
    }) as T
  }

  // Create a wrapped gsap object that auto-adds to context
  const wrappedGsap = new Proxy(gsap, {
    get(target, prop) {
      const value = target[prop as keyof typeof gsap]

      // Wrap animation methods to auto-add to context
      if (typeof value === 'function' && ['to', 'from', 'fromTo', 'set', 'timeline'].includes(prop as string)) {
        return (...args: any[]) => {
          let result: any
          ctx.add(() => {
            result = (value as Function).apply(target, args)
          })
          return result
        }
      }

      return value
    },
  }) as typeof gsap

  return {
    gsap: wrappedGsap,
    ScrollTrigger,
    contextSafe,
  }
}

/**
 * Composable for scroll-to functionality using GSAP ScrollToPlugin
 *
 * @example
 * ```vue
 * <script setup>
 * const { scrollTo } = useScrollTo()
 *
 * function handleClick() {
 *   scrollTo('.target-section', { duration: 1.5, offsetY: 100 })
 * }
 * </script>
 * ```
 */
export function useScrollTo() {
  const { gsap, contextSafe } = useGsap()

  interface ScrollToOptions {
    duration?: number
    ease?: string
    offsetY?: number
    offsetX?: number
    onComplete?: () => void
  }

  const scrollTo = contextSafe(
    (target: string | number | Element, options: ScrollToOptions = {}): gsap.core.Tween => {
      const { duration = 2, ease = 'power4.out', offsetY = 0, offsetX = 0, onComplete } = options

      return gsap.to(window, {
        duration,
        ease,
        scrollTo: {
          y: target,
          x: target,
          offsetY,
          offsetX,
        },
        onComplete,
      })
    }
  )

  const scrollToTop = contextSafe((options: Omit<ScrollToOptions, 'offsetY' | 'offsetX'> = {}) => {
    const { duration = 2, ease = 'power4.out', onComplete } = options
    return gsap.to(window, { duration, scrollTo: 0, ease, onComplete })
  })

  return {
    scrollTo,
    scrollToTop,
  }
}
