<template>
  <div class="home">home</div>
</template>

<script lang="ts">
import { ref, inject } from "vue";

export default {
  setup() {
    const injectedUser = inject("user");
    const test = ref("");

    console.log(user);

    const getInput = (e: Event) => {
      test.value = (e.target as HTMLInputElement).value;
    };

    return {
      test,
      user,
      getInput,
    };
  },
};
</script>
