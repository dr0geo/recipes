<script>
  import { ingredientsList } from '../store';
  import { flip } from 'svelte/animate';

  const removeIngredient = ingredientToRemove => {
    $ingredientsList = $ingredientsList.filter(ingredient => ingredient !== ingredientToRemove);
    sessionStorage.setItem('ingredients', JSON.stringify($ingredientsList));
  };

  const handleSubmit = () => {
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify($ingredientsList)
    })
  };
</script>

<section>
  <h2 class="bg-green-100 py-2 uppercase text-center font-medium">Your selected ingredients</h2>
  {#if $ingredientsList.length}
    <ul class="flex justify-center flex-wrap pt-3 border-b border-gray-100">
      {#each $ingredientsList as ingredient (ingredient)}
        <li animate:flip={{ duration: 200 }} class="bg-blue-100 bg-opacity-50 capitalize mx-3 mb-3 px-3 py-2 rounded-full">{ingredient} <span on:click={() => removeIngredient(ingredient)} class="cursor-pointer pl-2">X</span></li>
      {/each}
    </ul>
    <button
      class="border-2 uppercase font-medium border-transparent text-green-900 bg-yellow-300 block rounded-full p-2 my-3 mx-auto hover:bg-green-200 hover:text-gray-800 transition 300 ease-in-out"
      on:click={handleSubmit}>See recipes</button>
  {:else}
    <p class="text-center py-2 mb-5">You haven't selected any ingredient yet.</p>
  {/if}
</section>
