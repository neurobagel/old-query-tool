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
      :options="sortedOptions"
      :multiple="multiple"
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
      type: [String, Array],
      default: null,
    },
    options: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: false,
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
  computed: {
    sortedOptions() {
      // We have to do this to avoid mutating the prop
      const { options } = this;
      return options.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    },
  },
  methods: {
    updateField() {
      this.$emit('update-categorical-field', this.name, this.selected);
    },
  },
};
</script>
