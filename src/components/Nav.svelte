<script>
  import { selectedMenu } from '../store';

  export let type;
</script>

<nav class="{type === 'desktop' ? 'hidden lg:block' : 'hidden'}">
  <ul class="flex justify-end pt-4 text-gray-100">
    <li 
      class="{$selectedMenu === 1 ? 'text-yellow-700' : 'text-gray-100'} font-medium cursor-pointer"
      on:click={() => $selectedMenu = 1}>Home</li>
    <li 
      class="{$selectedMenu === 2 ? 'text-yellow-700' : 'text-gray-100'} ml-6 font-medium cursor-pointer"
      on:click={() => $selectedMenu = 2}>My recipes</li>
    <li 
      class="{$selectedMenu === 3 ? 'text-yellow-700' : 'text-gray-100'} ml-6 font-medium cursor-pointer"
      on:click={() => $selectedMenu = 3}>About</li>
  </ul>
</nav>
