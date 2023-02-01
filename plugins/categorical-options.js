import Vue from 'vue';

Vue.mixin({
  data() {
    return {
      categoricalOptions: {
        Sex: {
          All: null,
          male: 'male',
          female: 'female',
          other: 'other',
        },
        Modality: {
          All: null,
          'Flow weighted': 'nidm:FlowWeighted',
          'T1 weighted': 'nidm:T1Weighted',
          'T2 weighted': 'nidm:T2Weighted',
        },
      },

    };
  },
});
