<script>
	import '../app.css';
	import Nav from '$lib/generated/Nav.svelte';
	import Footer from '$lib/generated/Footer.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import LanguageToggle from '$lib/components/LanguageToggle.svelte';
	import { theme } from '$lib/stores/theme.js';
	import { currentLanguage, t } from '$lib/stores/i18n.js';
	import sitemap from '/sitemap.json';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	
	$: currentPage = $page.params.slug || 'home';
	$: lang = $currentLanguage;
	
	// Apply theme to document on mount and theme changes
	onMount(() => {
		// Apply initial theme
		theme.subscribe(currentTheme => {
			if (typeof document !== 'undefined') {
				document.body.className = `theme-${currentTheme}`;
			}
		});
	});
</script>

<svelte:head>
	<title>🌽 {t('farm.title')} - {t('nav.documentation')}</title>
	<meta name="description" content="{t('farm.description')}" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content={$theme === 'light' ? '#4a7c59' : '#7fb069'} />
	<link rel="icon" href="/favicon.ico" />
	<html lang={lang} />
</svelte:head>

<div class="app">
	<!-- Top navigation bar with controls -->
	<header class="top-bar">
		<div class="top-bar-content">
			<div class="language-indicator">
				<span class="current-language">
					🌍 {t('ui.language')}: {$currentLanguage.toUpperCase()}
				</span>
			</div>
			
			<div class="controls">
				<LanguageToggle />
				<ThemeToggle />
			</div>
		</div>
	</header>
	
	<Nav {sitemap} {currentPage} />
	
	<main class="main-content">
		<slot />
	</main>
	
	<Footer {sitemap} />
</div>

<style>
	.app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		background: var(--color-bg);
		color: var(--color-textPrimary);
		transition: all 0.3s ease;
	}
	
	.top-bar {
		background: var(--color-bgSecondary);
		border-bottom: 1px solid var(--color-border);
		padding: var(--space-sm) 0;
		backdrop-filter: blur(10px);
		position: sticky;
		top: 0;
		z-index: 50;
	}
	
	.top-bar-content {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 var(--space-lg);
	}
	
	.language-indicator {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
	}
	
	.current-language {
		font-size: 0.85rem;
		color: var(--color-textMuted);
		font-weight: 500;
		letter-spacing: 0.5px;
	}
	
	.controls {
		display: flex;
		align-items: center;
		gap: var(--space-md);
	}
	
	.main-content {
		flex: 1;
		width: 100%;
		background: var(--color-bg);
		transition: background-color 0.3s ease;
	}
	
	/* Global overrides using CSS custom properties */
	:global(body) {
		background: var(--color-bg);
		color: var(--color-textPrimary);
		transition: all 0.3s ease;
	}
	
	/* Responsive design */
	@media (max-width: 768px) {
		.top-bar-content {
			padding: 0 var(--space-md);
		}
		
		.language-indicator {
			display: none; /* Hide on mobile to save space */
		}
		
		.controls {
			gap: var(--space-sm);
		}
	}
	
	@media (max-width: 480px) {
		.top-bar-content {
			padding: 0 var(--space-sm);
		}
		
		.controls {
			flex-direction: column;
			gap: var(--space-xs);
		}
	}
</style>

