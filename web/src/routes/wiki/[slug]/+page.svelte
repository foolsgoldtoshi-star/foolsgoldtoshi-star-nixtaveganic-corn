<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import sitemap from '/content/sitemap.json';
	
	export let data;
	
	let pageContent = null;
	let loading = true;
	let error = null;
	
	$: slug = $page.params.slug;
	$: currentPageInfo = sitemap.find(p => p.id === slug);
	
	// Dynamic import of generated components
	onMount(async () => {
		loading = true;
		error = null;
		
		try {
			// Try to load the generated Svelte component
			const componentModule = await import(`../../../lib/generated/${slug}.svelte`);
			pageContent = componentModule.default;
		} catch (e) {
			console.error('Failed to load page component:', e);
			error = `Page "${slug}" not found`;
		} finally {
			loading = false;
		}
	});
	
	// Navigation helpers
	$: currentIndex = sitemap.findIndex(p => p.id === slug);
	$: previousPage = currentIndex > 0 ? sitemap[currentIndex - 1] : null;
	$: nextPage = currentIndex < sitemap.length - 1 ? sitemap[currentIndex + 1] : null;
</script>

<svelte:head>
	<title>🌽 {currentPageInfo?.title || slug} - NixtaVeganic Corn</title>
	<meta name="description" content="{currentPageInfo?.title || 'Documentation page'} - Ecological farm documentation" />
</svelte:head>

<div class="wiki-container">
	{#if loading}
		<div class="loading">
			<div class="spinner"></div>
			<p>Loading documentation...</p>
		</div>
	{:else if error}
		<div class="error">
			<h1>📄 Page Not Found</h1>
			<p>{error}</p>
			<p>
				<a href="/">← Back to Home</a> | 
				<a href="/wiki/00_overview">Start with Overview</a>
			</p>
		</div>
	{:else if pageContent}
		<article class="wiki-content">
			<div class="page-header">
				<div class="breadcrumb">
					<a href="/">🏠 Home</a>
					<span class="separator">›</span>
					<span class="current">{currentPageInfo?.title || slug}</span>
				</div>
				
				{#if currentPageInfo}
					<div class="page-meta">
						<span class="page-id">{currentPageInfo.id}</span>
					</div>
				{/if}
			</div>
			
			<div class="content-wrapper">
				<svelte:component this={pageContent} {sitemap} pageData={currentPageInfo} />
			</div>
			
			<nav class="page-navigation">
				<div class="nav-links">
					{#if previousPage}
						<a href="/wiki/{previousPage.id}" class="nav-link prev">
							<span class="nav-direction">← Previous</span>
							<span class="nav-title">{previousPage.title}</span>
						</a>
					{:else}
						<div class="nav-placeholder"></div>
					{/if}
					
					{#if nextPage}
						<a href="/wiki/{nextPage.id}" class="nav-link next">
							<span class="nav-direction">Next →</span>
							<span class="nav-title">{nextPage.title}</span>
						</a>
					{:else}
						<div class="nav-placeholder"></div>
					{/if}
				</div>
				
				<div class="back-to-top">
					<a href="/">🏠 Back to Home</a>
				</div>
			</nav>
		</article>
	{/if}
</div>

<style>
	.wiki-container {
		min-height: 60vh;
	}

	.loading {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 4rem 2rem;
		text-align: center;
	}

	.spinner {
		width: 40px;
		height: 40px;
		border: 4px solid #f3f3f3;
		border-top: 4px solid #f4a261;
		border-radius: 50%;
		animation: spin 1s linear infinite;
		margin-bottom: 1rem;
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}

	.error {
		text-align: center;
		padding: 4rem 2rem;
		color: #666;
	}

	.error h1 {
		color: #e74c3c;
		margin-bottom: 1rem;
	}

	.wiki-content {
		max-width: 900px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.page-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid #e9ecef;
	}

	.breadcrumb {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
	}

	.breadcrumb a {
		color: #2c5e2e;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	.separator {
		color: #ccc;
	}

	.current {
		font-weight: 600;
		color: #f4a261;
	}

	.page-meta {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.page-id {
		background: #f8f9fa;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		font-family: monospace;
		font-size: 0.8rem;
		color: #666;
	}

	.content-wrapper {
		margin-bottom: 3rem;
		line-height: 1.7;
	}

	.page-navigation {
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 2px solid #e9ecef;
	}

	.nav-links {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.nav-link {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		background: white;
		border: 1px solid #e9ecef;
		border-radius: 8px;
		text-decoration: none;
		color: inherit;
		transition: all 0.3s ease;
	}

	.nav-link:hover {
		border-color: #f4a261;
		box-shadow: 0 2px 8px rgba(244, 162, 97, 0.2);
	}

	.nav-link.next {
		text-align: right;
	}

	.nav-direction {
		font-size: 0.8rem;
		color: #666;
		margin-bottom: 0.25rem;
	}

	.nav-title {
		font-weight: 600;
		color: #2c5e2e;
	}

	.nav-placeholder {
		/* Empty space for alignment when no prev/next page */
	}

	.back-to-top {
		text-align: center;
		padding: 1rem 0;
	}

	.back-to-top a {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1.5rem;
		background: #2c5e2e;
		color: white;
		border-radius: 25px;
		text-decoration: none;
		transition: background-color 0.3s ease;
	}

	.back-to-top a:hover {
		background: #1a3a1c;
	}

	@media (max-width: 768px) {
		.wiki-content {
			padding: 0 1rem;
		}

		.page-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
		}

		.nav-links {
			grid-template-columns: 1fr;
		}

		.nav-link.next {
			text-align: left;
		}
	}
</style>

