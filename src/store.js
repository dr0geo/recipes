import { writable } from 'svelte/store';

// Menu related:
export const selectedMenu = writable(1);
export const displayMenu = writable(true);

// User ingredients:
export const ingredientsList = writable([]);
// Database ingredients:
export const ingredientsDatabase = writable([]);
