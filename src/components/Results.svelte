<script>
  const fetchInitialData = async () => {
    const res = await fetch('https://duofood.eu.pythonanywhere.com/recipe/?format=json');
    return await res.json();
  };

  const promise = fetchInitialData();
</script>

<section>
  <h2 class="bg-green-100 py-2 uppercase text-center font-medium">The best recipes of the moment</h2>
  {#await promise}
    <p class="text-center py-4">Recipes are loading...</p>
  {:then recipes} 
    <ul class="grid mx-auto grid-cols-1 gap-y-6 gap-x-4 my-4 px-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {#each recipes.results as result}
        <li class="bg-gray-50 rounded-md overflow-hidden shadow-md">
          <img class="block object-cover h-64 w-full" src={result.picture} alt={result.name} loading="lazy" />
          <h3 class="capitalize py-2 pl-2">{result.name}</h3>
        </li>
      {/each}
    </ul>
  {/await}
</section>
