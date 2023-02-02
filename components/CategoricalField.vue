<template>
  <div class="mb-3">
    <label
      data-cy="categorical-field-label"
      class="form-label"
    >{{ name }}</label>
    <v-select
      v-model="selected"
      data-cy="categorical-field-select"
      :options="options"
      @input="updateCategoricalField"
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
    defaultSelected: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      default: null,
    },
  },
  emits: ['update-categorical-field'],
  data() {
    return {
      selected: this.defaultSelected,
    };
  },
  methods: {
    updateCategoricalField() {
      this.$emit('update-categorical-field', this.name, this.selected);
    },
  },
};
</script>
