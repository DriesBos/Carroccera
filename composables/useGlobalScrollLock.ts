import { ref, computed, watch } from 'vue';
import { useScrollLock } from '@vueuse/core';

// Global state for scroll lock requests
const lockRequests = ref(new Set<string>());

// Single scroll lock instance for the entire app
let scrollLock: ReturnType<typeof useScrollLock> | null = null;

export function useGlobalScrollLock() {
  // Initialize scroll lock on first use (client-side only)
  if (!scrollLock && typeof document !== 'undefined') {
    scrollLock = useScrollLock(document.body);
  }

  // Check if scroll should be locked (any request active)
  const isLocked = computed(() => lockRequests.value.size > 0);

  // Watch and sync with VueUse scroll lock
  watch(isLocked, (locked) => {
    if (scrollLock) {
      scrollLock.value = locked;
    }
  }, { immediate: true });

  // Request a scroll lock with a unique key
  function lock(key: string) {
    lockRequests.value.add(key);
    // Trigger reactivity
    lockRequests.value = new Set(lockRequests.value);
  }

  // Release a scroll lock by key
  function unlock(key: string) {
    lockRequests.value.delete(key);
    // Trigger reactivity
    lockRequests.value = new Set(lockRequests.value);
  }

  // Set lock state directly (for watchers)
  function setLock(key: string, locked: boolean) {
    if (locked) {
      lock(key);
    } else {
      unlock(key);
    }
  }

  return {
    isLocked,
    lock,
    unlock,
    setLock,
  };
}

