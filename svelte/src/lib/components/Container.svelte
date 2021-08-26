<script lang="ts">
  interface link {
    title: string,
    action?: () => void,
    href?: string
  }

  export let header: string = "";
  export let footer: string = "";
  export let link: link = null;
  export let links: link[] = [];
</script>

<style>
  .container {
    width: var(--width, calc(50em - 2 * var(--padding, 0.75em)));
    max-width: calc(90vw - 2 * var(--padding, 0.75em));
    min-height: 2.5em;
    height: var(--height, auto);
    background: var(--background, --base);
    background-size: cover;
    border: var(--border, 1px solid var(--light));
    border-radius: 0.75em;
    margin: var(--margin, 1em auto);
    padding: var(--padding, 0.75em);
    position: relative;
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
    margin-top: 3em;
  }

  .positionLinks {
    position: absolute;
    right: 0em;
    top: -1.4em;
    font-size: 1.1em;
    display: flex;
    flex-direction: row-reverse;
  }

  .link {
    color: var(--primary);
    margin-left: 1em;
    cursor: pointer;
  }
</style>

<div id={header.replace(/\s/g, '-')} class="container" class:header={header || link?.title} class:footer data-header={header} data-footer={footer}>
  {#if link || links.length}
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
  {/if}
  
  <slot/>
</div>