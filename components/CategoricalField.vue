<template>
  <div class="mb-3">
    <label class="form-label">{{ name }}</label>
    <v-select
      v-model="selected"
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
      require: false,
    },
    defaultSelected: {
      type: String,
      default: null,
      require: false,
    },
    options: {
      type: Array,
      default: null,
      require: false,
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
