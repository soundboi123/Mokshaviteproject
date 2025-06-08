import { handleFlip } from "./imageSwitcher";

// Select all card containers (including Kosmik)
const cardContainers = document.querySelectorAll('.image-container-events.image-card, .image-container-events-kosmik.image-card');


const cleanupFunctions = cardContainers.forEach(card => {
  handleFlip(card, 100);
});


export function cleanup() {
  cleanupFunctions.forEach(cleanup => cleanup());
}