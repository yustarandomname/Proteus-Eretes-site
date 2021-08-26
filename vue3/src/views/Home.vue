<template>
  <div class="home">
    <Container>test</Container>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Container from "@/components/Container.vue"
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
    Container
  },
})
export default class Home extends Vue {}
</script>
