<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page }) {
    const jaarlaag = page.query.get("jaar")

    console.log(jaarlaag)

		return {
      props: {jaarlaag}
    }
	}
</script>

<script>
  import Container from "$lib/components/Container.svelte"

  export let jaarlaag;
</script>

<Container>
  <h2>
    {#if jaarlaag == "worstje"}
      {jaarlaag} is de beste jaarlaag
    {:else if jaarlaag}
      {jaarlaag} is minder dan worstje
    {:else}
      Selecteer een jaarlaag
    {/if}
  </h2>
</Container>