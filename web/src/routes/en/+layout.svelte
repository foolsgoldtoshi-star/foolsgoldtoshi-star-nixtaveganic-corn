<script>
  import Nav from '$lib/components/Nav.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import { getInitialTheme, applyTheme } from '$lib/theme.js';
  let theme = 'light';
  if (typeof document !== 'undefined') { theme=getInitialTheme(); applyTheme(theme); }
</script>

<Nav>
  <div slot="right" style="display:flex;gap:.75rem;align-items:center;">
    <span class="lang-badge">English</span>
    <ThemeToggle bind:current={theme}/>
  </div>
</Nav>
<div class="container"><slot/></div>
