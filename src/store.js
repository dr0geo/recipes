import { writable } from 'svelte/store';

// Menu related:
export const selectedMenu = writable(1);
export const displayMenu = writable(true);

// Ingredients related:
export const ingredientsList = writable([]);
