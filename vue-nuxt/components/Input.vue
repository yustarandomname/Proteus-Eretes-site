<template>
  <div>
    <div v-if="type == 'submit'" class="input primary">
      <input type="submit" :value="value" :disabled="disabled" />
    </div>
    <div v-else class="input">
      <input
        v-model="input"
        :type="type"
        :placeholder="inputPlaceholder"
        :required="required"
        :disabled="disabled"
        :autocomplete="inputAutocomplete"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: { type: String, default: 'text' },
    value: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    autocomplete: { type: String, default: '' },
    required: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false },
  },
  data() {
    return {
      inputPlaceholder: this.placeholder || this.type,
      inputAutocomplete:
        this.autocomplete ||
        (this.type === 'password' ? 'current-password' : 'off'),
    }
  },
  computed: {
    input: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
}
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

input[type='submit'] {
  background: var(--primary);
  color: white;
  cursor: pointer;
  border: 1px solid var(--primary);
}

input[type='submit']:hover {
  background: var(--secondary);
}
</style>
