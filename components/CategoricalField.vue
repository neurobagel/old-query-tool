<template>
  <div class="mb-3">
    <b-row class="row">
      <b-form-group class="col">
        <label
          data-cy="categorical-field-label"
          class="form-label"
        >{{ name }}</label>
      </b-form-group>
      <slot name="control" />
    </b-row>
    <v-select
      v-model="selected"
      :data-cy="`${name}-select`"
      :options="options"
      :disabled="disabled"
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
    defaultSelected: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update-categorical-field'],
  data() {
    return {
      selected: this.defaultSelected,
    };
  },
  methods: {
    updateField() {
      this.$emit('update-categorical-field', this.name, this.selected);
    },
  },
};
</script>
