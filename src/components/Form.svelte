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

<form on:submit|preventDefault={addIngredient}>
  <input type="text" name="ingredient" placeholder="Enter an ingredient here..." bind:value={ingredient} autocomplete="off" />
  <button type="submit">Add ingredient</button>
</form>

<style>
  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: space-evenly;
    margin: 30px auto;
    max-width: 500px;
  }

  button {
    background-color: green;
    border: 2px solid green;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-weight: 600;
    padding: 8px 12px;
  }
</style>
