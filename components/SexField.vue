<template>
  <div class="mb-3">
    <label class="form-label">Sex</label>
    <v-select
      v-model="sex"
      :options="Object.keys(options)"
      @input="updateSex"
    />
  </div>
</template>

<script>
export default {
  emits: ['update-sex'],
  data() {
    return {
      options: {
        All: null,
        male: 'male',
        female: 'female',
        other: 'other',
      },
      sex: 'All',
    };
  },
  methods: {
    updateSex() {
      this.$emit('update-sex', this.options[this.sex]);
    },
  },
};
</script>
