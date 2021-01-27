<script>
  import { selectedMenu } from '../store';
</script>

<nav class="hidden lg:block">
  <ul class="flex-column lg:flex lg:justify-end pt-4">
    <li 
      class="{$selectedMenu === 1 ? 'text-yellow-300 border-yellow-300' : 'text-gray-100 border-green-900'} ml-6 pb-3 border-b-4 font-medium cursor-pointer transition duration-300 ease-in-out"
      on:click={() => $selectedMenu = 1}>Home</li>
    <li 
      class="{$selectedMenu === 2 ? 'text-yellow-300 border-yellow-300' : 'text-gray-100 border-green-900'} ml-6 pb-3 border-b-4 font-medium cursor-pointer transition duration-300 ease-in-out"
      on:click={() => $selectedMenu = 2}>My recipes</li>
    <li 
      class="{$selectedMenu === 3 ? 'text-yellow-300 border-b-4 border-yellow-300' : 'text-gray-100 border-green-900'} ml-6 pb-3 border-b-4 font-medium cursor-pointer transition duration-300 ease-in-out"
      on:click={() => $selectedMenu = 3}>About</li>
  </ul>
</nav>
