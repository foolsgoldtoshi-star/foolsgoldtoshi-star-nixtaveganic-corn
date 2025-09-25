<script>
	import { currentLanguage } from '$lib/stores/i18n.js';
	import { onMount } from 'svelte';
	
	export let data;
	
	// Set language from URL parameter
	onMount(() => {
		if (data?.lang) {
			currentLanguage.set(data.lang);
		}
	});
</script>

<!-- Pass through to main layout -->
<slot />

