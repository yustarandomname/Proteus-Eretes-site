<script>
  export let header = "";
  export let footer = "";
  export let link = {title: ""};
  export let links = []
</script>

<style>
  .container {
    width: 50em;
    max-width: 90vw;
    min-height: 2.5em;
    height: var(--height, auto);
    background: var(--background, --base);
    background-size:cover;
    border: var(--border, 1px solid var(--light));
    border-radius: 0.75em;
    margin: 1em 50vw;
    transform: translateX(-50%);
    padding: var(--padding, 0.75em);
    position: relative;
    display: inline-block;
  }

  .container:before {
    content: attr(data-header);
    position:absolute;
    left: 0;
    top: -1.5em;
    font-size: 1.2em;
    font-weight: bold;
  }

  .header {
    margin-top: 2em;
  }

  .positionLinks {
    position: absolute;
    right: 0em;
    top: -1.4em;
    font-size: 1.1em;
    display: flex
  }

  .link {
    color: var(--primary);
    margin-left: 1em;
    cursor: pointer;
  }
</style>

<div class="container" class:header={header || link?.title} class:footer data-header={header} data-footer={footer}>
  <div class="positionLinks">
    {#if link?.action}
      <div class="link" on:click={link.action}>{link.title}</div>
    {:else if link?.href}
      <a href="{link.href}" class="link">{link.title}</a>
    {/if}

    {#each links as link}
      {#if link.action}
        <div class="link" on:click={link.action}>{link.title}</div>
      {:else}
        <a href="{link.href}" class="link">{link.title}</a>
      {/if}
    {/each}
  </div>
  
  <slot/>
</div>