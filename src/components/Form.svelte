<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  import { ingredientsList } from '../store';
  
  let ingredient = '';
  let errorMessage = null;

  onMount(() => {
    const storedIngredients = sessionStorage.getItem('ingredients');
    if (storedIngredients) {
      $ingredientsList = JSON.parse(storedIngredients);
    }
  });

  const addIngredient = () => {
    if (!$ingredientsList.includes(ingredient.toLowerCase())) {
      $ingredientsList = [...$ingredientsList, ingredient.toLowerCase()];
      ingredient = '';
      sessionStorage.setItem('ingredients', JSON.stringify($ingredientsList));
    } else {
      errorMessage = 'This ingredient is already in the list...'
    }
  };
</script>

<form class="flex justify-center my-4" on:submit|preventDefault={addIngredient}>
  <input 
    class="border-2 focus:border-green-900 rounded-full py-1 px-2 mr-4 transition 300 ease-in-out text-green-900" 
    type="text" 
    name="ingredient" 
    placeholder="Enter an ingredient here..." 
    bind:value={ingredient}
    on:input={() => errorMessage = null}
    autocomplete="off" />
  <button 
    class="bg-yellow-300 rounded-full border-2 border-transparent p-2 text-green-900 hover:bg-green-200 hover:text-gray-800 transition 300 ease-in-out" 
    type="submit">Add ingredient</button>
</form>
{#if errorMessage}
  <p transition:fly={{ y: -15, duration: 200 }} class="text-red-800 font-medium px-4 mb-4">{errorMessage}</p>
{/if}
