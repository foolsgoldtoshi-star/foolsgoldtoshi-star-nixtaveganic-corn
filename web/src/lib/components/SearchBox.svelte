<script>
  import { onMount } from 'svelte';
  import searchIndex from '$lib/generated/search-index.js';
  
  let searchTerm = '';
  let searchResults = [];
  let isOpen = false;
  let searchInput;
  
  // Functional search implementation for living ecosystem
  function performSearch(term) {
    if (!term || term.length < 2) {
      searchResults = [];
      return;
    }
    
    const query = term.toLowerCase();
    searchResults = searchIndex
      .filter(page => 
        page.title.toLowerCase().includes(query) ||
        page.content.toLowerCase().includes(query) ||
        page.keywords.some(keyword => keyword.includes(query))
      )
      .slice(0, 8); // Limit results for performance
  }
  
  $: {
    performSearch(searchTerm);
    isOpen = searchTerm.length > 0 && searchResults.length > 0;
  }
  
  // Keyboard navigation for ecosystem exploration
  function handleKeydown(event) {
    // Press / to focus search
    if (event.key === '/' && !isOpen) {
      event.preventDefault();
      searchInput?.focus();
      isOpen = true;
    }
    
    // Escape to close
    if (event.key === 'Escape') {
      searchTerm = '';
      isOpen = false;
      searchInput?.blur();
    }
  }
  
  onMount(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  });
</script>

<div class="search-container">
  <div class="search-box">
    <input
      bind:this={searchInput}
      bind:value={searchTerm}
      type="text"
      placeholder="🔍 Search functional farm knowledge... (Press / to focus)"
      class="search-input"
      aria-label="Search documentation"
    />
    
    {#if isOpen}
      <div class="search-results">
        <div class="results-header">
          <span class="results-count">🌱 {searchResults.length} ecosystem matches</span>
        </div>
        
        {#each searchResults as result}
          <a href="/en/wiki/{result.id}/" class="search-result">
            <h4 class="result-title">{result.title}</h4>
            <p class="result-snippet">
              {result.content.slice(0, 120)}...
            </p>
            <div class="result-keywords">
              {#each result.keywords.slice(0, 3) as keyword}
                <span class="keyword-tag">{keyword}</span>
              {/each}
            </div>
          </a>
        {/each}
        
        <div class="search-footer">
          <small>🎊 Functional search powered by ClojureScript DSL</small>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  .search-container {
    position: relative;
    max-width: 500px;
    margin: 0 auto;
  }
  
  .search-box {
    position: relative;
  }
  
  .search-input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid var(--border);
    border-radius: 25px;
    font-size: 1rem;
    background: var(--card);
    color: var(--fg);
    transition: all 0.3s ease;
  }
  
  .search-input:focus {
    outline: none;
    border-color: var(--sage);
    box-shadow: 0 0 0 3px rgba(183, 200, 181, 0.2);
  }
  
  .search-results {
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    right: 0;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    max-height: 400px;
    overflow-y: auto;
    z-index: 1000;
    animation: slideDown 0.3s ease;
  }
  
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .results-header {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid var(--border);
    background: var(--bg);
    border-radius: 12px 12px 0 0;
  }
  
  .results-count {
    font-size: 0.85rem;
    color: var(--muted);
    font-weight: 500;
  }
  
  .search-result {
    display: block;
    padding: 1rem;
    border-bottom: 1px solid var(--border);
    text-decoration: none;
    color: inherit;
    transition: background-color 0.2s ease;
  }
  
  .search-result:hover {
    background: var(--bg);
  }
  
  .search-result:last-child {
    border-bottom: none;
    border-radius: 0 0 12px 12px;
  }
  
  .result-title {
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
    font-weight: 600;
    color: var(--sage);
  }
  
  .result-snippet {
    margin: 0 0 0.5rem 0;
    font-size: 0.9rem;
    color: var(--muted);
    line-height: 1.4;
  }
  
  .result-keywords {
    display: flex;
    gap: 0.25rem;
    flex-wrap: wrap;
  }
  
  .keyword-tag {
    font-size: 0.75rem;
    padding: 0.125rem 0.375rem;
    background: var(--sage);
    color: white;
    border-radius: 12px;
    font-weight: 500;
  }
  
  .search-footer {
    padding: 0.5rem 1rem;
    text-align: center;
    background: var(--bg);
    border-radius: 0 0 12px 12px;
    color: var(--muted);
  }
  
  /* Mobile responsive */
  @media (max-width: 768px) {
    .search-container {
      max-width: 100%;
    }
    
    .search-results {
      max-height: 300px;
    }
    
    .search-result {
      padding: 0.75rem;
    }
  }
</style>
