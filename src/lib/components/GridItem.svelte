<script lang="ts">
  import Icon from "$lib/components/Icon.svelte"

  export let title: string;
  export let icon: string;
  export let link: string = null;
  export let action: () => void = null
</script>

<style>
  .gridItem {
    height: 5em;
    width: 100%;
    border: 1px solid var(--light);
    border-radius: 0.5em;
    text-align: center;
  }

  .gridItem:hover {
    color: var(--primary);
    border-color: var(--primary);
  }

  .icon {
    margin: 1em 1em 0.1em;
    --size: 1.5em
  }
</style>

{#if link}
  <a class="gridItem" href={link}>
    <div class="icon">
      <Icon name={icon} />
    </div>
    <div class="title">{title}</div>
  </a>
{:else if action}
  <div class="gridItem">
    <Icon name={icon} />
    <div class="title">{title}</div>
  </div>
{:else}
  <slot/>
{/if}