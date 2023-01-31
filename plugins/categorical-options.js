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
      },

    };
  },
});
