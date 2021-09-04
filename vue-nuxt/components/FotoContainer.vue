<template>
  <Container
    header="Fotos"
    :link="{ title: 'Meer foto\'s', internLink: '/fotos' }"
    :style="style"
  >
  </Container>
</template>

<script>
export default {
  props: ['src'],
  data() {
    return {
      style: {
        '--padding': '0em',
        '--height': '22.5em',
        '--border': 'none',
        '--background': `url(${this.src})`,
      },
    }
  },
}
</script>
