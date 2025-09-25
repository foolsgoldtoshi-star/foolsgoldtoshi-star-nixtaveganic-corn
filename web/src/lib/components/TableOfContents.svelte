<script>
  import { onMount } from 'svelte';
  
  export let pageContent = '';
  
  let tocEntries = [];
  let isOpen = false;
  
  // Extract TOC from page content (functional approach)
  function generateTOC() {
    if (!pageContent || typeof document === 'undefined') return;
    
    const headings = document.querySelectorAll('h1, h2, h3, h4');
    tocEntries = Array.from(headings).map((heading, index) => {
      const level = parseInt(heading.tagName[1]);
      const text = heading.textContent;
      const id = `heading-${index}`;
      
      // Add anchor ID for smooth scrolling
      heading.id = id;
      
      return {
        level,
        text,
        id,
        element: heading
      };
    });
  }
  
  // Smooth scroll to section (ecosystem navigation)
  function scrollToHeading(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      isOpen = false; // Close TOC on mobile after navigation
    }
  }
  
  onMount(() => {
    // Generate TOC after content is rendered
    setTimeout(generateTOC, 100);
    
    // Regenerate if content changes
    const observer = new MutationObserver(generateTOC);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  });
</script>

{#if tocEntries.length > 1}
  <div class="toc-container">
    <button 
      class="toc-toggle"
      on:click={() => isOpen = !isOpen}
      aria-label="Toggle table of contents"
    >
      <span class="toc-icon">📋</span>
      <span class="toc-label">Ecosystem Guide</span>
      <span class="toggle-arrow" class:open={isOpen}>▼</span>
    </button>
    
    {#if isOpen}
      <div class="toc-content">
        <div class="toc-header">
          <h4>🌱 Page Contents</h4>
        </div>
        
        <ul class="toc-list">
          {#each tocEntries as entry}
            <li class="toc-entry level-{entry.level}">
              <button 
                class="toc-link"
                on:click={() => scrollToHeading(entry.id)}
              >
                <span class="entry-bullet">
                  {entry.level === 1 ? '🌽' : entry.level === 2 ? '🌿' : '🍃'}
                </span>
                <span class="entry-text">{entry.text}</span>
              </button>
            </li>
          {/each}
        </ul>
        
        <div class="toc-footer">
          <small>🎊 Functional navigation for living knowledge</small>
        </div>
      </div>
    {/if}
  </div>
{/if}

<style>
  .toc-container {
    position: sticky;
    top: 2rem;
    z-index: 10;
    margin: 1rem 0;
  }
  
  .toc-toggle {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.75rem 1rem;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: var(--fg);
    font-size: 0.9rem;
  }
  
  .toc-toggle:hover {
    border-color: var(--sage);
    background: var(--bg);
  }
  
  .toc-icon {
    font-size: 1rem;
  }
  
  .toc-label {
    flex: 1;
    text-align: left;
    font-weight: 500;
  }
  
  .toggle-arrow {
    font-size: 0.7rem;
    transition: transform 0.3s ease;
    color: var(--muted);
  }
  
  .toggle-arrow.open {
    transform: rotate(180deg);
  }
  
  .toc-content {
    margin-top: 0.5rem;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
    animation: slideDown 0.3s ease;
  }
  
  .toc-header {
    padding: 0.75rem 1rem;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
  }
  
  .toc-header h4 {
    margin: 0;
    font-size: 0.9rem;
    color: var(--sage);
  }
  
  .toc-list {
    list-style: none;
    margin: 0;
    padding: 0.5rem 0;
    max-height: 300px;
    overflow-y: auto;
  }
  
  .toc-entry {
    margin: 0;
  }
  
  .toc-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.5rem 1rem;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    transition: background-color 0.2s ease;
    color: var(--fg);
  }
  
  .toc-link:hover {
    background: var(--bg);
  }
  
  .entry-bullet {
    font-size: 0.8rem;
    width: 1rem;
    text-align: center;
  }
  
  .entry-text {
    font-size: 0.85rem;
    line-height: 1.3;
  }
  
  /* Indentation for heading levels */
  .level-1 .toc-link { padding-left: 1rem; }
  .level-2 .toc-link { padding-left: 1.5rem; }
  .level-3 .toc-link { padding-left: 2rem; }
  .level-4 .toc-link { padding-left: 2.5rem; }
  
  .toc-footer {
    padding: 0.5rem 1rem;
    text-align: center;
    background: var(--bg);
    color: var(--muted);
    border-top: 1px solid var(--border);
  }
  
  /* Desktop: show as sidebar */
  @media (min-width: 1200px) {
    .toc-container {
      position: fixed;
      right: 2rem;
      top: 6rem;
      width: 280px;
      max-height: calc(100vh - 8rem);
      overflow-y: auto;
    }
    
    .toc-content {
      max-height: none;
    }
    
    .toc-list {
      max-height: calc(100vh - 12rem);
    }
  }
</style>
