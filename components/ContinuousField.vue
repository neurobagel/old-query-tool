<template>
  <div class="mb-3">
    <label class="form-label">{{ name }}</label>
    <b-form-input
      v-model="input"
      type="number"
      step="any"
      class="numberinput form-control"
      min="0"
      @input="updateField"
    />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: null,
    },
  },
  emits: ['update-continuous-field'],
  data() {
    return {
      input: null,
    };
  },
  methods: {
    updateField() {
      this.$emit('update-continuous-field', this.name, this.input);
    },
  },
};
</script>
