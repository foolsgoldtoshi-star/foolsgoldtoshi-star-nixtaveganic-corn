<script>
  export let headings = [];
  
  let activeHeading = null;
  
  // Scroll spy functionality
  function updateActiveHeading() {
    if (typeof window === 'undefined') return;
    
    const headingElements = headings.map(h => 
      document.getElementById(h.anchor)
    ).filter(Boolean);
    
    if (headingElements.length === 0) return;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    
    let current = null;
    
    for (let i = headingElements.length - 1; i >= 0; i--) {
      const element = headingElements[i];
      const rect = element.getBoundingClientRect();
      
      if (rect.top <= 100) {
        current = headings[i];
        break;
      }
    }
    
    activeHeading = current;
  }
  
  // Set up scroll listener
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', updateActiveHeading);
    updateActiveHeading(); // Initial check
  }
  
  function scrollToHeading(heading) {
    if (typeof window === 'undefined') return;
    
    const element = document.getElementById(heading.anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
</script>

{#if headings.length > 0}
  <div class="mini-toc">
    <h4 class="toc-title">On this page</h4>
    <nav class="toc-nav">
      {#each headings as heading}
        <a 
          href="#{heading.anchor}"
          class="toc-link"
          class:active={activeHeading?.anchor === heading.anchor}
          on:click|preventDefault={() => scrollToHeading(heading)}
        >
            <span class="toc-level" class:level-h1={heading.level === 'h1'} class:level-h2={heading.level === 'h2'} class:level-h3={heading.level === 'h3'}>
              {heading.level === 'h1' ? '#' : heading.level === 'h2' ? '##' : '###'}
            </span>
          <span class="toc-text">{heading.text}</span>
        </a>
      {/each}
    </nav>
  </div>
{/if}

<style>
  .mini-toc {
    position: sticky;
    top: 2rem;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 1rem;
    margin: 1rem 0;
    max-height: 80vh;
    overflow-y: auto;
  }
  
  .toc-title {
    margin: 0 0 0.75rem 0;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .toc-nav {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .toc-link {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 4px;
    text-decoration: none;
    color: var(--muted);
    transition: all 0.2s ease;
    font-size: 0.85rem;
    line-height: 1.4;
  }
  
  .toc-link:hover {
    background: var(--sage);
    color: var(--fg);
  }
  
  .toc-link.active {
    background: var(--jade);
    color: white;
  }
  
  .toc-level {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.75rem;
    opacity: 0.6;
    min-width: 1.5rem;
    text-align: center;
  }
  
  .toc-text {
    flex: 1;
  }
  
  .level-h1 {
    font-weight: 600;
  }
  
  .level-h2 {
    font-weight: 500;
  }
  
  .level-h3 {
    font-weight: 400;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .mini-toc {
      position: static;
      margin: 1rem 0;
    }
  }
</style>
