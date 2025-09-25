<script>
  import { currentLanguage, languages } from '$lib/stores/i18n.js';
  
  let isOpen = false;
  
  $: currentLang = languages[$currentLanguage];
</script>

<div class="language-toggle">
  <button 
    class="language-button"
    on:click={() => isOpen = !isOpen}
    aria-label="Change language"
  >
    <span class="flag">{currentLang.flag}</span>
    <span class="lang-code">{currentLang.code.toUpperCase()}</span>
    <span class="dropdown-arrow" class:open={isOpen}>▼</span>
  </button>
  
  {#if isOpen}
    <div class="language-dropdown">
      {#each Object.entries(languages) as [langKey, langData]}
        <button
          class="language-option"
          class:active={$currentLanguage === langKey}
          on:click={() => {
            currentLanguage.set(langKey);
            isOpen = false;
          }}
        >
          <span class="option-flag">{langData.flag}</span>
          <span class="option-name">{langData.name}</span>
          <span class="option-code">{langData.code.toUpperCase()}</span>
        </button>
      {/each}
    </div>
  {/if}
</div>

<!-- Click outside to close -->
{#if isOpen}
  <div class="overlay" on:click={() => isOpen = false}></div>
{/if}

<style>
  .language-toggle {
    position: relative;
    z-index: 100;
  }
  
  .language-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--color-bgSecondary);
    border: 1px solid var(--color-border);
    padding: 0.5rem 0.75rem;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: var(--color-textPrimary);
    font-size: 0.9rem;
    min-width: 80px;
  }
  
  .language-button:hover {
    background: var(--color-secondary);
    color: white;
    border-color: var(--color-secondary);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px var(--color-shadow);
  }
  
  .flag {
    font-size: 1rem;
  }
  
  .lang-code {
    font-weight: 600;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
  }
  
  .dropdown-arrow {
    font-size: 0.7rem;
    transition: transform 0.3s ease;
    color: var(--color-textMuted);
  }
  
  .dropdown-arrow.open {
    transform: rotate(180deg);
  }
  
  .language-dropdown {
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 0;
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: 12px;
    box-shadow: 0 8px 24px var(--color-shadow);
    overflow: hidden;
    min-width: 160px;
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
  
  .language-option {
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
  
  .language-option:hover {
    background: var(--color-bgSecondary);
  }
  
  .language-option.active {
    background: var(--color-secondary);
    color: white;
  }
  
  .language-option.active .option-code {
    color: rgba(255, 255, 255, 0.8);
  }
  
  .option-flag {
    font-size: 1.1rem;
    width: 1.5rem;
  }
  
  .option-name {
    font-weight: 500;
    flex: 1;
  }
  
  .option-code {
    font-size: 0.75rem;
    color: var(--color-textMuted);
    font-weight: 600;
    letter-spacing: 0.5px;
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
    .language-button {
      min-width: 70px;
      padding: 0.4rem 0.6rem;
    }
    
    .language-dropdown {
      right: -0.5rem;
      min-width: 140px;
    }
  }
</style>

