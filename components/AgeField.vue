<template>
  <b-form-row class="row">
    <b-form-group class="col-md-6">
      <div class="mb-3">
        <label class="form-label">Min Age</label>
        <b-form-input
          v-model="minAge"
          type="number"
          step="any"
          class="numberinput form-control"
          data-cy="minAge"
          @input="updateAge"
        />
      </div>
    </b-form-group>
    <b-form-group class="col-md-6">
      <div class="mb-3">
        <label class="form-label">Max Age</label>
        <b-form-input
          v-model="maxAge"
          type="number"
          step="any"
          class="numberinput form-control"
          data-cy="maxAge"
          @input="updateAge"
        />
      </div>
    </b-form-group>
  </b-form-row>
</template>

<script>
export default {
  emits: ['update-age'],
  data() {
    return {
      minAge: null,
      maxAge: null,
    };
  },
  methods: {
    updateAge() {
      this.$emit('update-age', this.minAge, this.maxAge);
    },
  },

};

</script>
