<script>
  import navigation from '$lib/generated/navigation.js';
  
  export let currentPageId = '';
  
  $: currentNav = navigation.find(nav => nav.id === currentPageId);
  $: previousPage = currentNav?.prev;
  $: nextPage = currentNav?.next;
</script>

{#if currentNav}
  <nav class="page-navigation" aria-label="Page navigation">
    <div class="nav-container">
      {#if previousPage}
        <a href="/en/wiki/{previousPage.id}/" class="nav-link prev">
          <div class="nav-icon">🍂</div>
          <div class="nav-content">
            <span class="nav-direction">← Previous</span>
            <span class="nav-title">{previousPage.title}</span>
          </div>
        </a>
      {:else}
        <div class="nav-placeholder"></div>
      {/if}
      
      <div class="nav-center">
        <a href="/en/" class="home-link">
          <span class="home-icon">🌽</span>
          <span>Ecosystem Home</span>
        </a>
      </div>
      
      {#if nextPage}
        <a href="/en/wiki/{nextPage.id}/" class="nav-link next">
          <div class="nav-content">
            <span class="nav-direction">Next →</span>
            <span class="nav-title">{nextPage.title}</span>
          </div>
          <div class="nav-icon">🌱</div>
        </a>
      {:else}
        <div class="nav-placeholder"></div>
      {/if}
    </div>
  </nav>
{/if}

<style>
  .page-navigation {
    margin: 2rem 0;
    padding: 1.5rem;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .nav-container {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 1rem;
    align-items: center;
  }
  
  .nav-link {
    display: flex;
    align-items: center;
    padding: 1rem;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
    min-height: 80px;
  }
  
  .nav-link:hover {
    border-color: var(--sage);
    box-shadow: 0 2px 8px rgba(183, 200, 181, 0.2);
    transform: translateY(-2px);
  }
  
  .nav-link.prev {
    justify-self: start;
  }
  
  .nav-link.next {
    justify-self: end;
    flex-direction: row-reverse;
  }
  
  .nav-icon {
    font-size: 1.5rem;
    margin: 0 0.75rem;
    opacity: 0.7;
  }
  
  .nav-content {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .nav-direction {
    font-size: 0.8rem;
    color: var(--muted);
    font-weight: 500;
  }
  
  .nav-title {
    font-weight: 600;
    color: var(--fg);
    font-size: 0.95rem;
  }
  
  .nav-center {
    justify-self: center;
  }
  
  .home-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    background: var(--sage);
    color: white;
    border-radius: 20px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  
  .home-link:hover {
    background: var(--jade);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(42, 127, 111, 0.3);
  }
  
  .home-icon {
    font-size: 1.1rem;
  }
  
  .nav-placeholder {
    /* Empty space for alignment */
  }
  
  /* Mobile responsive - stack vertically */
  @media (max-width: 768px) {
    .nav-container {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto;
      gap: 0.75rem;
      text-align: center;
    }
    
    .nav-link {
      justify-self: stretch;
      min-height: 60px;
    }
    
    .nav-link.next {
      flex-direction: row;
    }
    
    .nav-center {
      justify-self: stretch;
      order: -1; /* Home link at top on mobile */
    }
    
    .home-link {
      justify-content: center;
    }
  }
</style>
