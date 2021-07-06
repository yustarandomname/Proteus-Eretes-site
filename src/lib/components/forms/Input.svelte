<script lang="ts">
  type inputType = "text" | "password" | "email" | "date" | "submit"

  export let type: inputType = "text"; // [*text* | password | email | date]
  export let placeholder: string = "";
  export let required: boolean = true;
  export let value:any = "";
</script>

<style>
  input {
    width: 100%;
    width: var(--width, -webkit-fill-available);
    border-radius: 0.5em;
    border: 1px solid var(--light);
    padding: 0.5em;
    margin-top: 1em;
    background: white;
  }

  input[type="submit"] {
    background: var(--primary);
    color: white;
    cursor:pointer;
    border: 1px solid var(--primary)
  }

  input[type="submit"]:hover {
    background: var(--secondary);
  }
</style>

<div class="input" class:primary={type == "submit"}>
  {#if type == "password"}
    <input type="password" placeholder={placeholder || "password"} autocomplete="current-password" on:input bind:value/>
  {:else if type == "email"}
    <input type="email" placeholder={placeholder || "email"} autocomplete="email" {required} on:input bind:value />
  {:else if type == "date"}
    <input type="date" placeholder={placeholder || "date"} {required} autocomplete="date" on:input bind:value/>
  {:else if type == "submit"}
    <input type="submit" {required} on:submit|preventDefault {value} />
  {:else}
    <input type="text" {placeholder} {required} on:input />
  {/if}
</div>