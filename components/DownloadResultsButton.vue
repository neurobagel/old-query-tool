<template>
  <b-col
    class="d-flex flex-row-reverse"
    style="margin-top: 1em;"
  >
    <b-row
      v-if="!Object.is(results, null) && results.length !== 0"
      class="mr-auto"
    >
      <b-button
        id="download-results-button"
        :disabled="downloads.length === 0"
      >
        <b-icon
          icon="download"
          font-scale="1"
        />
        Download Results
      </b-button>
    </b-row>
  </b-col>
</template>

<script>
export default {
  props: {
    results: {
      type: Array,
      required: false,
      default: null,
    },
    downloads: {
      type: Array,
      required: true,
      default: () => [],
    },
  },

};
</script>
