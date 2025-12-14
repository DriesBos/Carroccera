let _refreshTimer: ReturnType<typeof setTimeout> | null = null;

export default function useScrollRefresh() {
  // Get ScrollTrigger inside the composable (SSR-safe)
  // useGsap handles SSR internally and returns no-op on server
  const { ScrollTrigger } = useGsap();

  function requestRefresh(ms = 120) {
    // Skip on server-side
    if (typeof window === 'undefined') return;
    if (!ScrollTrigger || typeof ScrollTrigger.refresh !== 'function') return;
    
    if (_refreshTimer) clearTimeout(_refreshTimer);
    _refreshTimer = setTimeout(() => {
      try {
        ScrollTrigger.refresh();
      } catch (e) {
        // ignore
      }
    }, ms);
  }

  function refreshNow() {
    // Skip on server-side
    if (typeof window === 'undefined') return;
    if (!ScrollTrigger || typeof ScrollTrigger.refresh !== 'function') return;
    
    try {
      ScrollTrigger.refresh();
    } catch (e) {
      // ignore
    }
  }

  return { requestRefresh, refreshNow };
}
