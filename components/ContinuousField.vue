<template>
  <div class="mb-3">
    <label
      data-cy="continuous-field-label"
      class="form-label"
    >{{ name }}</label>
    <b-form-input
      :data-cy="`${name}-continuous-field-input`"
      type="number"
      :step="step"
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
      required: true,
    },
    step: {
      type: String,
      default: '1',
    },
  },
  emits: ['update-continuous-field'],
  methods: {
    updateField(value) {
      this.$emit('update-continuous-field', this.name, value);
    },
  },
};
</script>
