<script>
  import sitemap from '/content/sitemap.json';
</script>

<h1>NixtaVeganic Corn Wiki</h1>
<div class="card">
  <p>Welcome. Ecological, no-till veganic corn at ~3,000 ft; on-site water; patches;
  masa/nixtamal.</p>
</div>

<h2>Pages</h2>
<ul>
  {#each sitemap as p}
    <li><a href={`/en/wiki/${p.id}/`}>{p.id}</a></li>
  {/each}
</ul>
