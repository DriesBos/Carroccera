import { onMounted, onUnmounted } from 'vue';

/**
 * Composable to handle Escape key press with automatic cleanup
 * @param callback - Function to call when Escape is pressed
 */
export function useEscapeKey(callback: () => void) {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      callback();
    }
  };

  onMounted(() => {
    document.addEventListener('keydown', handleEscape);
  });

  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape);
  });
}

