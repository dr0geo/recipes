<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  import { ingredientsList, ingredientsDatabase } from '../store';
  
  // Input:
  let ingredient = '';

  // Database ingredients that match with input:
  let matchingIngredients = [];

  let errorMessage = null;

  onMount(() => {
    // Retrieve stored ingredients when component mounts:
    const storedIngredients = sessionStorage.getItem('ingredients');
    if (storedIngredients) {
      $ingredientsList = JSON.parse(storedIngredients);
    }
  });

  const handleInput = () => {
    // Cancel potential error message:
    errorMessage = null;

    // Find items that starts with input value:
    const desiredIngredients = $ingredientsDatabase.filter(item => item.name.startsWith(ingredient));

    // Conditionnaly display choices list:
    if (desiredIngredients && ingredient !== '') {
      matchingIngredients = desiredIngredients;
    } else {
      matchingIngredients = [];
    }
  };

  const addIngredient = e => {
    
    // Find the clicked item to add it to the ingredients list:
    const selectedIngredient = $ingredientsDatabase.find(item => item.id === parseInt(e.target.value));

    // Check if not already in the list:
    if (!$ingredientsList.includes(selectedIngredient.name)) {

      $ingredientsList = [...$ingredientsList, selectedIngredient.name];

      // Reset fields:
      ingredient = '';
      matchingIngredients = [];

      // Save ingredients list in session storage:
      sessionStorage.setItem('ingredients', JSON.stringify($ingredientsList));

    } else {
      ingredient = '';
      matchingIngredients = [];
      errorMessage = 'This ingredient is already in the list';
    }
  };
</script>

<form class="my-4" on:submit|preventDefault={addIngredient}>
  <div class="relative max-w-xs mx-auto">
    <input 
    class="block mx-auto border-2 w-full focus:border-green-900 rounded-full py-1 px-2 transition duration-300 ease-in-out text-green-900" 
    type="text" 
    name="ingredient" 
    placeholder="Enter an ingredient here..." 
    bind:value={ingredient}
    on:input={handleInput}
    autocomplete="off" />
    
    {#if matchingIngredients.length}
      <ul transition:fly={{ y: -15, duration: 200 }} class="flex-col bg-white w-full mx-auto my-2 absolute">
        {#each matchingIngredients as ingredient (ingredient.id)}
          <li
            class="border-t py-2 px-2 capitalize cursor-pointer hover:bg-blue-50 transition duration-300 ease-in-out"
            value={ingredient.id} 
            on:click={addIngredient}>{ingredient.name}</li>
        {/each}
      </ul>
    {/if}
  </div>
</form>

{#if errorMessage}
  <p transition:fly={{ y: -15, duration: 200 }} class="text-red-800 font-medium px-4 mb-4 text-center">{errorMessage}</p>
{/if}
