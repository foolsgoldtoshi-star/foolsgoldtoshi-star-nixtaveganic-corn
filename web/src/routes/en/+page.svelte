<script>
  import sitemap from '$lib/generated/sitemap.js';
  import SearchBox from '$lib/components/SearchBox.svelte';
</script>

<div class="ecosystem-home">
  <header class="hero-section">
    <h1>🌽 NixtaVeganic Corn Wiki</h1>
    <p class="hero-description">
      Welcome to our **living ecosystem** of functional farm knowledge. 
      Ecological, no-till veganic corn at ~3,000 ft elevation with on-site 
      water management, patchwork fields, and traditional nixtamalization.
    </p>
  </header>

  <section class="search-section">
    <h2>🔍 Explore the Ecosystem</h2>
    <SearchBox />
    <p class="search-hint">
      🌱 Search through our functional farm knowledge using keywords, 
      topics, or specific agricultural concepts.
    </p>
  </section>

  <section class="knowledge-grid">
    <h2>📚 Knowledge Ecosystem</h2>
    <div class="page-grid">
      {#each sitemap as page}
        <a href={`/en/wiki/${page.id}/`} class="knowledge-card">
          <div class="card-icon">
            {page.id.includes('overview') ? '🌽' : 
             page.id.includes('climate') ? '🌤️' :
             page.id.includes('agronomy') ? '🌱' :
             page.id.includes('nix') ? '❄️' : '📄'}
          </div>
          <h3 class="card-title">{page.title || page.id}</h3>
          <p class="card-id">{page.id}</p>
        </a>
      {/each}
    </div>
  </section>

  <footer class="ecosystem-footer">
    <p>🎊 **Living ecosystem powered by functional programming** 🖤🤎💙</p>
    <small>ClojureScript DSL → Search Index → Interactive Navigation</small>
  </footer>
</div>

<style>
  .ecosystem-home {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .hero-section {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .hero-section h1 {
    font-size: 2.5rem;
    color: var(--sage);
    margin-bottom: 1rem;
  }
  
  .hero-description {
    font-size: 1.1rem;
    color: var(--muted);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
  
  .search-section {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .search-section h2 {
    color: var(--jade);
    margin-bottom: 1.5rem;
  }
  
  .search-hint {
    margin-top: 1rem;
    color: var(--muted);
    font-size: 0.9rem;
  }
  
  .knowledge-grid h2 {
    text-align: center;
    color: var(--sage);
    margin-bottom: 2rem;
  }
  
  .page-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .knowledge-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 12px;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
    text-align: center;
  }
  
  .knowledge-card:hover {
    border-color: var(--sage);
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(183, 200, 181, 0.2);
  }
  
  .card-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .card-title {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--fg);
  }
  
  .card-id {
    margin: 0;
    font-size: 0.8rem;
    color: var(--muted);
    font-family: monospace;
  }
  
  .ecosystem-footer {
    text-align: center;
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border);
  }
  
  .ecosystem-footer p {
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  /* Mobile responsive */
  @media (max-width: 768px) {
    .ecosystem-home {
      padding: 1rem;
    }
    
    .hero-section h1 {
      font-size: 2rem;
    }
    
    .page-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    
    .knowledge-card {
      padding: 1rem;
    }
  }
</style>
