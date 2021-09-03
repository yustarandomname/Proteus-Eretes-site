<template>
  <div v-if="type == 'submit'" class="input primary">
    <input type="submit" :disabled="disabled" />
  </div>
  <div v-else class="input">
    <input
      :type="type"
      ref="input"
      :placeholder="inputPlaceholder"
      :required="required"
      :disabled="disabled"
      :autocomplete="inputAutocomplete"
      :value="value"
      v-model="input"
    />
  </div>
</template>

<script lang="ts">
import { PropType, ref, watch } from "vue";
type inputType = "text" | "password" | "email" | "date" | "time" | "submit";

export default {
  props: {
    type: {
      type: String as PropType<inputType>,
      default: "text",
    },
    placeholder: String,
    autocomplete: String,
    value: String,
    required: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  setup(props: any, context: any) {
    const inputPlaceholder = props.placeholder || props.type;
    let inputAutocomplete = props.autocomplete || (props.type === "password" ? "current-password" : "off");

    function useInputValidator(startVal: any, onValidate: (v: any) => void) {
      let input = ref(startVal);

      watch(input, (value) => {
        console.log(value);
        onValidate(value);
      });

      return { input };
    }

    const { input } = useInputValidator(props.value, (value) => context.emit("input", "test"));

    return {
      input,
      inputPlaceholder,
      inputAutocomplete,
    };
  },
};
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
  cursor: pointer;
  border: 1px solid var(--primary);
}

input[type="submit"]:hover {
  background: var(--secondary);
}
</style>
