<script>
  import { ingredientsList } from '../store';

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
  <h2>Your selected ingredients</h2>
  {#if $ingredientsList.length}
    <ul>
      {#each $ingredientsList as ingredient}
        <li>{ingredient} <span on:click={() => removeIngredient(ingredient)} class="close">X</span></li>
      {/each}
    </ul>
    <button on:click={handleSubmit}>See recipes</button>
  {:else}
    <p>You haven't selected any ingredient yet.</p>
  {/if}
</section>

<style>
  section {
    align-items: center;
    background-color: #d1d1d1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 30px 0;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 20px;
  }

  ul {
    display: flex;
  }

  li {
    background-color: lightblue;
    list-style-type: none;
    padding: 1px 5px;
    text-transform: capitalize;
  }

  li + li {
    margin-left: 10px;
  }

  .close {
    cursor: pointer;
  }

  button {
    background-color: green;
    border: 2px solid green;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-weight: 600;
    margin: 20px auto;
    padding: 8px 12px;
  }
</style>
