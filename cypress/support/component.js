// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Import plugins into cypress component context
// so cypress is aware of them when running component tests
import '../../plugins/bootstrap-vue';
import '../../plugins/vue-select';
import '../../plugins/categorical-options';

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from 'cypress/vue2';

Cypress.Commands.add('mount', mount);

// Example use:
// cy.mount(MyComponent)
