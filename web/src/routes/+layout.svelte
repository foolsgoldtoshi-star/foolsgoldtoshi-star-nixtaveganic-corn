<script>
	import Nav from '$lib/generated/Nav.svelte';
	import Footer from '$lib/generated/Footer.svelte';
	import sitemap from '/content/sitemap.json';
	import { page } from '$app/stores';
	
	$: currentPage = $page.params.slug || 'home';
</script>

<svelte:head>
	<title>🌽 NixtaVeganic Corn - Ecological Farm Documentation</title>
	<meta name="description" content="Git-first ecological farm project plan for no-till veganic field corn with on-site nixtamalization" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" href="/favicon.ico" />
</svelte:head>

<div class="app">
	<Nav {sitemap} {currentPage} />
	
	<main class="main-content">
		<slot />
	</main>
	
	<Footer {sitemap} />
</div>

<style>
	:global(html, body) {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
		line-height: 1.6;
		color: #333;
		background: #fafafa;
	}
	
	:global(*) {
		box-sizing: border-box;
	}
	
	.app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
	
	.main-content {
		flex: 1;
		width: 100%;
	}
	
	:global(a) {
		color: #2c5e2e;
		text-decoration: none;
		transition: color 0.3s ease;
	}
	
	:global(a:hover) {
		color: #f4a261;
		text-decoration: underline;
	}
	
	:global(code) {
		background: #f1f3f4;
		padding: 0.2rem 0.4rem;
		border-radius: 3px;
		font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
		font-size: 0.9em;
	}
	
	:global(pre) {
		background: #f8f9fa;
		border: 1px solid #e9ecef;
		border-radius: 5px;
		padding: 1rem;
		overflow-x: auto;
		line-height: 1.4;
	}
	
	:global(pre code) {
		background: none;
		padding: 0;
		font-size: 0.85em;
	}
	
	:global(blockquote) {
		border-left: 4px solid #2c5e2e;
		margin: 1rem 0;
		padding-left: 1rem;
		color: #666;
		font-style: italic;
	}
	
	:global(table) {
		width: 100%;
		border-collapse: collapse;
		margin: 1rem 0;
	}
	
	:global(th, td) {
		border: 1px solid #ddd;
		padding: 0.75rem;
		text-align: left;
	}
	
	:global(th) {
		background: #f8f9fa;
		font-weight: 600;
	}
	
	:global(img) {
		max-width: 100%;
		height: auto;
		border-radius: 5px;
		box-shadow: 0 2px 8px rgba(0,0,0,0.1);
	}
</style>
