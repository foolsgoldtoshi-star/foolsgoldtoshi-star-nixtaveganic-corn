<script>
  if (typeof window !== 'undefined') {
    const base = import.meta.env.BASE_PATH || '/foolsgoldtoshi-star-nixtaveganic-corn';
    const target = (base === '' ? '' : base) + '/en/';
    if (location.pathname !== target) location.replace(target);
  }
</script>
<p>Redirecting to <a href="/en/">/en/</a>…</p>

<style>
	.home-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.hero {
		text-align: center;
		padding: 4rem 0;
		background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
		margin: 0 -2rem 3rem;
		border-radius: 0 0 20px 20px;
	}

	.hero-content h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
		color: #2c5e2e;
		text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
	}

	.subtitle {
		font-size: 1.5rem;
		color: #f4a261;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.description {
		font-size: 1.1rem;
		color: #666;
		max-width: 600px;
		margin: 0 auto;
		line-height: 1.6;
	}

	.quick-info {
		margin-bottom: 3rem;
	}

	.info-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
	}

	.info-card {
		background: white;
		padding: 1.5rem;
		border-radius: 10px;
		box-shadow: 0 2px 10px rgba(0,0,0,0.1);
		text-align: center;
		border-top: 4px solid #f4a261;
	}

	.info-card h3 {
		color: #2c5e2e;
		margin-bottom: 0.5rem;
		font-size: 1.2rem;
	}

	.documentation {
		margin-bottom: 3rem;
	}

	.documentation h2 {
		color: #2c5e2e;
		margin-bottom: 1.5rem;
		text-align: center;
	}

	.search-container {
		margin-bottom: 2rem;
		text-align: center;
	}

	.search-input {
		width: 100%;
		max-width: 400px;
		padding: 0.75rem 1rem;
		border: 2px solid #e9ecef;
		border-radius: 25px;
		font-size: 1rem;
		transition: border-color 0.3s ease;
	}

	.search-input:focus {
		outline: none;
		border-color: #f4a261;
	}

	.doc-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1rem;
	}

	.doc-card {
		background: white;
		padding: 1.5rem;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0,0,0,0.1);
		text-decoration: none;
		color: inherit;
		transition: all 0.3s ease;
		border-left: 4px solid transparent;
	}

	.doc-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 15px rgba(0,0,0,0.15);
		border-left-color: #f4a261;
	}

	.doc-card h3 {
		color: #2c5e2e;
		margin-bottom: 0.5rem;
		font-size: 1.1rem;
	}

	.doc-id {
		color: #666;
		font-size: 0.9rem;
		font-family: monospace;
	}

	.no-results {
		text-align: center;
		color: #666;
		font-style: italic;
		padding: 2rem;
	}

	.getting-started {
		margin-bottom: 3rem;
	}

	.getting-started h2 {
		color: #2c5e2e;
		margin-bottom: 2rem;
		text-align: center;
	}

	.steps {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.step {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		background: white;
		padding: 1.5rem;
		border-radius: 10px;
		box-shadow: 0 2px 8px rgba(0,0,0,0.1);
	}

	.step-number {
		background: #f4a261;
		color: white;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		flex-shrink: 0;
	}

	.step-content h3 {
		color: #2c5e2e;
		margin-bottom: 0.5rem;
	}

	@media (max-width: 768px) {
		.hero-content h1 {
			font-size: 2rem;
		}
		
		.subtitle {
			font-size: 1.2rem;
		}
		
		.home-container {
			padding: 0 1rem;
		}
		
		.hero {
			margin: 0 -1rem 2rem;
			padding: 2rem 1rem;
		}
	}
</style>

