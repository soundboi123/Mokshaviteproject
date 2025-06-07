// flipHandler.js
export function handleFlip(cardElement, delay = 1000) {
  let timeoutId = null;

  const addFlip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId); // Clear pending flip-back
    }
    cardElement.classList.add('flipped'); // Flip immediately on hover
  };

  const removeFlip = () => {
    timeoutId = setTimeout(() => {
      cardElement.classList.remove('flipped'); // Flip back after delay
    }, delay);
  };

  // Attach event listeners to the container
  cardElement.addEventListener('mouseenter', addFlip);
  cardElement.addEventListener('mouseleave', removeFlip);

  // Return cleanup function
  return () => {
    cardElement.removeEventListener('mouseenter', addFlip);
    cardElement.removeEventListener('mouseleave', removeFlip);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };
}