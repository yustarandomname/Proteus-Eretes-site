<template>
  <transition name="fade">
    <div v-if="visible" class="wrapper" style="--speed: 0.3s">
      <div class="outside" @click="close"></div>

      <div class="inside">
        <div class="closeButton" @click="close">
          <Icon style="--size: 2.5em" name="close-circle-outline" />
        </div>
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 50;
}

.outside {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
}

.inside {
  position: absolute;
  top: 50%;
  left: 50%;
  background: white;
  padding: 1em;
  border-radius: 0.75em;
  width: var(--size, 25em);
  max-width: 90vw;
  min-height: var(--size, 25em);
  max-height: 90vh;
  transform: translate(-50%, -50%);
  box-shadow: 0 1rem 4.5rem rgb(0 0 0 / 20%);
  z-index: 50;
}

.closeButton {
  position: absolute;
  right: 1em;
  top: 1em;
  cursor: pointer;
  --size: 2em;
}

/* ANIMATION */

.fade-enter-active {
  animation: fade-in var(--speed, 0.5s);
}
.fade-leave-active {
  animation: fade-in var(--speed, 0.5s) reverse;
}

.fade-enter-active .inside {
  animation: zoom-in var(--speed, 0.5s);
}
.fade-leave-active .inside {
  animation: zoom-in var(--speed, 0.5s) reverse;
}

@keyframes fade-in {
  0% {
    backdrop-filter: blur(0px);
    opacity: 0;
  }
  100% {
    backdrop-filter: blur(5px);
    opacity: 1;
  }
}

@keyframes zoom-in {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  30% {
    transform: translate(-50%, -50%) scale(0);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
