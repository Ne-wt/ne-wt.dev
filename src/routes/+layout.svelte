<script>
  import { page } from '$app/stores';
  import "../app.css";

  import { fly } from 'svelte/transition';
</script>

{#key $page.url.pathname }
  <div transition:fly={{ x: -200, duration: 2000}}>
    <slot />
  </div>
{/key}