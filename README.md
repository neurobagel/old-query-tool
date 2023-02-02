<div align="center">

# Query Tool

    
<div>
    <a href="https://github.com/neurobagel/query-tool/actions/workflows/test.yaml">
        <img src="https://img.shields.io/github/actions/workflow/status/neurobagel/query-tool/test.yaml?color=BDB76B&label=test&style=flat-square" alt="test">
    </a>
    <a href="https://nodejs.org/en//">
        <img src="https://img.shields.io/badge/node-16.14-8FBC8F?style=flat-square" alt="Node">
    <a href="https://www.npmjs.com/">
        <img src="https://img.shields.io/badge/npm-8.3-CD5C5C?style=flat-square" alt="npm">
    </a>
    <a href="https://nuxtjs.org/">
        <img src="https://img.shields.io/badge/nuxt-2.15-F0FFF0?style=flat-square" alt="Nuxt">
    </a>
    <a href="https://vuejs.org/">
        <img src="https://img.shields.io/badge/vue-2.17-D8BFD8?style=flat-square" alt="Vue">
    </a>
    <a href="LICENSE">
        <img src="https://img.shields.io/github/license/neurobagel/query-tool?color=4682B4&style=flat-square" alt="GitHub license">
    </a>
</div>
<br>

Query Tool is a Vue application, developed in [JavaScript](https://www.javascript.com/) using a variety of tools including [Nuxt](https://nuxtjs.org/), [Cypress](https://www.cypress.io/), and [BootstrapVue](https://bootstrap-vue.org/docs).

[Getting started](#getting-started) |
[Usage](#usage) |
[Testing](#testing) |
[License](#license)

</div>

## Getting Started

### `Install Dependencies`

To run Query Tool, you'll need [node package manager (npm)](https://www.npmjs.com/) and [Node.js](https://nodejs.org/en/).
You can find the instructions on installing npm and node in the official [documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

Once you have npm and node installed, you'll need to install the dependencies outlined in the package.json file.
You can do so by running the following command:

```bash
npm install
```

### `Set the Environment Variables`

You'll need to set the environment variables (API_QUERY_URL) required to run the query tool. Query tool utilizes [nuxt dotenv module](https://github.com/nuxt-community/dotenv-module) for managing environment variables. 

To set environment variables, create an `.env` file in the root directory and add the environment variables there. If you're running the API locally on your machine, your `.env` file would look something like this:

```bash
API_QUERY_URL=http://localhost:8000/query/?
```

### `Launch Query Tool`

To launch the tool in developer mode run the following command:

```bash
npm run dev
```

You can also build and then run the tool from the (production) build of the application by running the following command:

```bash
npm run build && npm run start
```

You can verify the tool is running once you receive info messages from Nuxt regarding environment, rendering, and what port the tool is running on in your terminal.

## Usage

To define a cohort, set your inclusion criteria using the following:

- Age: Minimum and/or maximum age (in years) of participant that should be included in the results.
- Sex: Sex of participant that should be included in the results.
- Diagnosis: Diagnosis of participant that should be included in the results
- Healthy control: Whether healthy participants should be included in the results. Once healthy control checkbox is selected, diagnosis field will be disabled since a participant cannot be both a healthy control and have a diagnosis.
- Minimum number of sessions: Minimum number of imaging sessions that participant should have to be included in the results.
- Assessment tool: Non-imaging assessment completed by participant that should be included in the results.
- Modality: Imaging modality of participant scans that should be included in the results.


Once you've defined your criteria, submit them as a query and query tool will display the results.

## Testing

Query Tool utilizes [Cypress](https://www.cypress.io/) framework for testing.

To run the tests execute the following command:

```bash
npx cypress open
```

### License

Query Tool is released under the terms of the [MIT License](LICENSE)