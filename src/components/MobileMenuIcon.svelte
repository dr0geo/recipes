<script>
  import { displayMenu } from '../store';

  const toggleMenu = () => {
    $displayMenu = !$displayMenu; 
  };
</script>

<div 
  class="flex justify-center items-center bg-green-200 h-16 w-16 rounded-full fixed bottom-4 right-4 shadow cursor-pointer lg:hidden"
  on:click={toggleMenu}>
  <img class="h-8 w-10" src="/images/icons/menu.svg" alt="" loading="lazy" />
</div>
