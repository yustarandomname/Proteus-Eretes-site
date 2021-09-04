<template>
  <div>
    <Container
      :style="{
        '--padding': '0em',
        '--height': '16em',
        '--background': 'url(/profiel.png)',
      }"
    />

    <Container>
      <h1>LEDEN PANEL</h1>

      <button @click="visible = true">open dialog</button>
    </Container>

    <Popup :visible="visible" @close="visible = false">
      <h1>Popup</h1>
    </Popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
}
</script>
