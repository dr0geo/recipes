import { writable } from 'svelte/store';

export const selectedMenu = writable(1);
export const displayMenu = writable(true);

export const ingredientsList = writable([]);
