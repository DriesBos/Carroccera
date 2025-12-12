import { ref } from 'vue';

// useGsap is an auto-imported composable in this project
const { ScrollTrigger } = useGsap();

let _refreshTimer: ReturnType<typeof setTimeout> | null = null;

export default function useScrollRefresh() {
  function requestRefresh(ms = 120) {
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
    if (!ScrollTrigger || typeof ScrollTrigger.refresh !== 'function') return;
    try {
      ScrollTrigger.refresh();
    } catch (e) {
      // ignore
    }
  }

  return { requestRefresh, refreshNow };
}
