<script>
	import Nav from './Nav.svelte';
</script>

<header class="flex justify-between items-center px-6 py-4 bg-green-900 sm:justify-around lg:pb-0">
	<a href="/"><img class="w-16 lg:pb-4" src="/images/logo.svg" alt="" /></a>
	<div class="text-right">
		<h1 class="font-semibold text-xl text-yellow-300 uppercase">What's in your fridge?</h1>
		<Nav />
	</div>
</header>
