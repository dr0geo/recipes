<script>
	import { onMount } from 'svelte';

	import { ingredientsDatabase } from './store';

	import Tailwind from './Tailwind.svelte';
	import MobileMenuIcon from './components/MobileMenuIcon.svelte';
	import Header from './components/Header.svelte';
	import Form from './components/Form.svelte';
	import FormResults from './components/FormResults.svelte';
	import Results from './components/Results.svelte';

	onMount(() => {
		fetch('https://duofood.eu.pythonanywhere.com/ingredients/?format=json')
			.then(res => res.json())
			.then(jsonRes => $ingredientsDatabase = jsonRes.results)
			.catch(err => console.log(err));
	});
</script>

<Tailwind />

<MobileMenuIcon />
<Header />

<main>
	<Form />
	<FormResults />
	<Results />
</main>
