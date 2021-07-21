<script lang="ts">
  type inputType = "text" | "password" | "email" | "date" | "time" | "submit"

  export let type: inputType = "text"; // [*text* | password | email | date]
  export let placeholder: string = "";
  export let required: boolean = true;
  export let value:any = "";
  export let disabled: boolean = false
</script>

<style>
  input {
    width: 100%;
    width: var(--width, -webkit-fill-available);
    border-radius: 0.5em;
    border: 1px solid var(--light);
    padding: var(--padding, 1em);
    margin-top: 1em;
    font-size: 1em;
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
    <input type="password" placeholder={placeholder || "password"} {disabled} autocomplete="current-password" on:input bind:value/>
  {:else if type == "email"}
    <input type="email" placeholder={placeholder || "email"} {disabled} autocomplete="email" {required} on:input bind:value />
  {:else if type == "date"}
    <input type="date" placeholder={placeholder || "date"} {required} {disabled} autocomplete="date" on:input bind:value/>
  {:else if type == "time"}
    <input type="time" {required} autocomplete="time" {disabled} on:input bind:value/>
  {:else if type == "submit"}
    <input type="submit" {required} on:submit|preventDefault {disabled} {value} />
  {:else}
    <input type="text" {placeholder} {required} {disabled} on:input />
  {/if}
</div>