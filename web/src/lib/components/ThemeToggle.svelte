<script>
  import { applyTheme, saveTheme, getInitialTheme } from '$lib/theme.js';
  export let current = 'light';
  function toggle() {
    const next = current === 'dark' ? 'light' : 'dark';
    current = next; applyTheme(next); saveTheme(next);
  }
</script>
<button class="theme-toggle" on:click={toggle} aria-label="Toggle theme">
  <span>{current === 'dark' ? 'Dark' : 'Light'}</span><span>•</span><span>Warm</span>
</button>

<style>
  .theme-toggle {
    position: relative;
    z-index: 100;
  }
  
  .theme-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--color-bgSecondary);
    border: 1px solid var(--color-border);
    padding: 0.5rem 1rem;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: var(--color-textPrimary);
    font-size: 0.9rem;
    min-width: 140px;
  }
  
  .theme-button:hover {
    background: var(--color-primary);
    color: white;
    border-color: var(--color-primary);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px var(--color-shadow);
  }
  
  .theme-icon {
    font-size: 1.1rem;
  }
  
  .theme-name {
    font-weight: 500;
    flex: 1;
    text-align: left;
  }
  
  .dropdown-arrow {
    font-size: 0.8rem;
    transition: transform 0.3s ease;
    color: var(--color-textMuted);
  }
  
  .dropdown-arrow.open {
    transform: rotate(180deg);
  }
  
  .theme-dropdown {
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 0;
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: 12px;
    box-shadow: 0 8px 24px var(--color-shadow);
    overflow: hidden;
    min-width: 200px;
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
  
  .theme-option {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    background: transparent;
    cursor: pointer;
    transition: background-color 0.2s ease;
    color: var(--color-textPrimary);
    text-align: left;
  }
  
  .theme-option:hover {
    background: var(--color-bgSecondary);
  }
  
  .theme-option.active {
    background: var(--color-primary);
    color: white;
  }
  
  .theme-option.active .option-desc {
    color: rgba(255, 255, 255, 0.8);
  }
  
  .option-icon {
    font-size: 1.2rem;
    width: 1.5rem;
  }
  
  .option-name {
    font-weight: 500;
    font-size: 0.95rem;
  }
  
  .option-desc {
    font-size: 0.8rem;
    color: var(--color-textMuted);
    margin-left: auto;
  }
  
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background: transparent;
  }
  
  /* Mobile responsive */
  @media (max-width: 768px) {
    .theme-button {
      min-width: 120px;
      padding: 0.4rem 0.8rem;
    }
    
    .theme-dropdown {
      right: -1rem;
      min-width: 180px;
    }
  }
</style>
