<template>
  <span
    v-b-tooltip.hover.top="downloadsIsEmpty ? 'Select at least one dataset for download' : ''"
    :data-cy="`download-` + identifier + `-results-button-tooltip`"
  >
    <b-button
      class="nb-button"
      :disabled="downloadsIsEmpty"
      :data-cy="`download-` + identifier + `-results-button`"
      @click="$emit('download-results', identifier)"
    >
      <b-icon
        icon="download"
        font-scale="1"
      />
      {{ 'Download ' + identifier + ' results' }}
    </b-button>
  </span>
</template>

<script>
export default {
  props: {
    identifier: {
      type: String,
      default: 'participant-level',
    },
    downloadsIsEmpty: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['download-results'],
};
</script>
