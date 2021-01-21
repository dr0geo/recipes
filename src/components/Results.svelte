<script>
  const fetchInitialData = async () => {
    const res = await fetch('https://duofood.eu.pythonanywhere.com/recipe/?format=json', {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
    return await res.json();
  };

  const promise = fetchInitialData();
</script>

<section>
  <h2>The best recipes of the moment!</h2>
  {#await promise}
    <p>Recipes are loading...</p>
  {:then recipes} 
    <div class="container">
      {#each recipes.results as result}
        <div class="card">
          <img src={result.picture} alt={result.name} loading="lazy" />
          <h3>{result.name}</h3>
        </div>
      {/each}
    </div>
  {/await}
</section>

<style>
  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 20px auto;
    text-align: center;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: auto;
    max-width: 900px;
  }

  .card {
    max-width: 300px;
  }

  img {
    display: block;
    width: 100%;
  }

  h3 {
    color: orangered;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
  }

  p {
    text-align: center;
  }
</style>