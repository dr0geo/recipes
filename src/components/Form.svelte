<script>
  import { onMount } from 'svelte';
  import { ingredientsList } from '../store';
  
  let ingredient = '';

  onMount(() => {
    const storedIngredients = sessionStorage.getItem('ingredients');
    if (storedIngredients) {
      $ingredientsList = JSON.parse(storedIngredients);
    }
  });

  const addIngredient = () => {
    $ingredientsList = [...$ingredientsList, ingredient];
    ingredient = '';
    sessionStorage.setItem('ingredients', JSON.stringify($ingredientsList));
  };
</script>

<form class="flex justify-center my-4" on:submit|preventDefault={addIngredient}>
  <input 
    class="border-2 focus:border-green-900 rounded-full py-1 px-2 mr-4 transition 300 ease-in-out text-green-900" 
    type="text" 
    name="ingredient" 
    placeholder="Enter an ingredient here..." bind:value={ingredient} 
    autocomplete="off" />
  <button 
    class="bg-yellow-300 rounded-full border-2 border-transparent p-2 text-green-900 hover:bg-green-200 hover:text-gray-800 transition 300 ease-in-out" 
    type="submit">Add ingredient</button>
</form>
