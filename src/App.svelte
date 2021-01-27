<script>
	import MobileMenuIcon from './components/MobileMenuIcon.svelte';
	import Header from './components/Header.svelte';
	import Form from './components/Form.svelte';
	import FormResults from './components/FormResults.svelte';
	import Results from './components/Results.svelte';
</script>

<MobileMenuIcon />
<Header />

<main>
	<Form />
	<FormResults />
	<Results />
</main>


<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
