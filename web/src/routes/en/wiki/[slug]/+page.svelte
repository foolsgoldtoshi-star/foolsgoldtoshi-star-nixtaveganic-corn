<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import sitemap from '$lib/generated/sitemap.js';
  import MiniTOC from '$lib/components/MiniTOC.svelte';
  
  export let data;
  
  let pageContent = null;
  let loading = true;
  let error = null;
  let headings = [];
  let contentContainer;
  
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
      
      // Set up MutationObserver to watch for heading changes
      if (typeof window !== 'undefined') {
        const observer = new MutationObserver(() => {
          extractHeadings();
        });
        
        // Wait for content to render, then observe
        setTimeout(() => {
          if (contentContainer) {
            observer.observe(contentContainer, {
              childList: true,
              subtree: true,
              attributes: true
            });
            extractHeadings();
          }
        }, 100);
      }
    } catch (e) {
      console.error('Failed to load page component:', e);
      error = `Page "${slug}" not found`;
    } finally {
      loading = false;
    }
  });
  
  // Extract headings from rendered content
  function extractHeadings() {
    if (typeof window === 'undefined' || !contentContainer) return;
    
    const headingElements = contentContainer.querySelectorAll('h1, h2, h3');
    headings = Array.from(headingElements).map((el, index) => {
      // Ensure element has an ID
      if (!el.id) {
        el.id = `heading-${index}`;
      }
      
      return {
        level: el.tagName.toLowerCase(),
        text: el.textContent.trim(),
        anchor: el.id
      };
    });
  }
  
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
    <div class="wiki-layout">
      <!-- Main content area -->
      <div class="content-area">
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
          
          <div class="content-wrapper" bind:this={contentContainer}>
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
      </div>
      
      <!-- MiniTOC sidebar -->
      <aside class="toc-sidebar">
        <MiniTOC {headings} />
      </aside>
    </div>
  {/if}
</div>

<style>
  .wiki-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem;
  }
  
  .wiki-layout {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 2rem;
    align-items: start;
  }
  
  .content-area {
    min-width: 0; /* Prevent grid blowout */
  }
  
  .wiki-content {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .page-header {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border);
  }
  
  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    color: var(--muted);
  }
  
  .breadcrumb a {
    color: var(--sage);
    text-decoration: none;
  }
  
  .breadcrumb a:hover {
    text-decoration: underline;
  }
  
  .separator {
    color: var(--muted);
  }
  
  .current {
    font-weight: 600;
    color: var(--fg);
  }
  
  .page-meta {
    font-size: 0.8rem;
    color: var(--muted);
  }
  
  .page-id {
    background: var(--bg);
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  }
  
  .content-wrapper {
    line-height: 1.6;
  }
  
  .content-wrapper h1,
  .content-wrapper h2,
  .content-wrapper h3,
  .content-wrapper h4,
  .content-wrapper h5,
  .content-wrapper h6 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: var(--sage);
    scroll-margin-top: 2rem;
  }
  
  .content-wrapper h1 {
    font-size: 2rem;
    border-bottom: 2px solid var(--border);
    padding-bottom: 0.5rem;
  }
  
  .content-wrapper h2 {
    font-size: 1.5rem;
    border-bottom: 1px solid var(--border);
    padding-bottom: 0.25rem;
  }
  
  .content-wrapper h3 {
    font-size: 1.25rem;
  }
  
  .content-wrapper p {
    margin-bottom: 1rem;
  }
  
  .content-wrapper pre {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 1rem;
    overflow-x: auto;
    margin: 1rem 0;
  }
  
  .content-wrapper code {
    background: var(--bg);
    padding: 0.125rem 0.25rem;
    border-radius: 4px;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.9rem;
  }
  
  .content-wrapper pre code {
    background: transparent;
    padding: 0;
  }
  
  .page-navigation {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border);
  }
  
  .nav-links {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .nav-link {
    display: block;
    padding: 1rem;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;
  }
  
  .nav-link:hover {
    background: var(--sage);
    color: white;
    transform: translateY(-2px);
  }
  
  .nav-direction {
    display: block;
    font-size: 0.8rem;
    color: var(--muted);
    margin-bottom: 0.25rem;
  }
  
  .nav-title {
    display: block;
    font-weight: 600;
    color: var(--fg);
  }
  
  .nav-placeholder {
    /* Empty placeholder for grid alignment */
  }
  
  .back-to-top {
    text-align: center;
  }
  
  .back-to-top a {
    color: var(--sage);
    text-decoration: none;
    font-weight: 500;
  }
  
  .back-to-top a:hover {
    text-decoration: underline;
  }
  
  .toc-sidebar {
    position: sticky;
    top: 2rem;
  }
  
  .loading {
    text-align: center;
    padding: 4rem 2rem;
  }
  
  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid var(--border);
    border-top: 4px solid var(--sage);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 1rem;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .error {
    text-align: center;
    padding: 4rem 2rem;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 12px;
  }
  
  .error h1 {
    color: var(--accent);
    margin-bottom: 1rem;
  }
  
  .error p {
    margin-bottom: 1rem;
    color: var(--muted);
  }
  
  .error a {
    color: var(--sage);
    text-decoration: none;
    margin: 0 0.5rem;
  }
  
  .error a:hover {
    text-decoration: underline;
  }
  
  /* Responsive design */
  @media (max-width: 1024px) {
    .wiki-layout {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    
    .toc-sidebar {
      position: static;
      order: -1;
    }
  }
  
  @media (max-width: 768px) {
    .wiki-container {
      padding: 0.5rem;
    }
    
    .wiki-content {
      padding: 1rem;
    }
    
    .nav-links {
      grid-template-columns: 1fr;
    }
    
    .content-wrapper h1 {
      font-size: 1.5rem;
    }
    
    .content-wrapper h2 {
      font-size: 1.25rem;
    }
  }
</style>