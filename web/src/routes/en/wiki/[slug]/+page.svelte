<script>
  import * as pages from '$lib/generated';
  import sitemap from '/content/sitemap.json';
  export let params;
  let Comp; $: Comp=pages[params.slug]?.default;
</script>

{#if Comp}
  <svelte:component this={Comp} {sitemap}/>
  <p style="margin-top:2rem;"><a href="/en/">← Back to sitemap</a></p>
{:else}
  <h1>Not found</h1><p><a href="/en/">Back to sitemap</a></p>
{/if}
