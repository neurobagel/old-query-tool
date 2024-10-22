<div align="center">

# Query Tool

    
<div>
    <a href="https://github.com/neurobagel/query-tool/actions/workflows/pages/pages-build-deployment">
        <img src="https://img.shields.io/website?down_color=CD5C5C&down_message=down&label=deployed%20app&style=flat-square&up_color=B0C4DE&up_message=live&url=https%3A%2F%2Fquery.neurobagel.org%2F" alt="deployed app">
    </a>
    <a href="https://github.com/neurobagel/query-tool/actions/workflows/component-test.yaml">
        <img src="https://img.shields.io/github/actions/workflow/status/neurobagel/query-tool/component-test.yaml?color=BDB76B&label=component test&style=flat-square" alt="component test">
    </a>
    <a href="https://github.com/neurobagel/query-tool/actions/workflows/e2e-test.yaml">
        <img src="https://img.shields.io/github/actions/workflow/status/neurobagel/query-tool/e2e-test.yaml?color=8FBC8F&label=e2e test&style=flat-square" alt="e2e test">
    </a>
    <a href="https://nodejs.org/en//">
        <img src="https://img.shields.io/badge/node-16.14-CD5C5C?style=flat-square" alt="Node">
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

The query tool is a Vue application, developed in [JavaScript](https://www.javascript.com/) using a variety of tools including [Nuxt](https://nuxtjs.org/), [Cypress](https://www.cypress.io/), and [BootstrapVue](https://bootstrap-vue.org/docs).

[Quickstart](#quickstart) |
[Local Installation](#local-installation) |
[Usage](#usage) |
[Testing](#testing) |
[License](#license)

</div>

Please refer to our [**official documentation**](https://neurobagel.org/query_tool/) for more detailed information on how to use the query tool.

## Quickstart

The query tool is hosted at https://query.neurobagel.org/ and interfaces with [Neurobagel API](https://api.neurobagel.org/docs).

NOTE: Currently, to access the query tool, you must be connected to the McGill network.

## Local Installation
To run the query tool locally, you have two options:

1. Use our docker image (preferred)
2. Do a manual install from the cloned git repo.
### Install using Docker
To obtain the query tool docker image, simply run 

```bash
docker pull neurobagel/query_tool:latest
```

in your terminal. The Docker image includes the most recent build of the 
query tool and a minimal http server to serve the static tool.

### Manual installation

To run the query tool, you'll need [node package manager (npm)](https://www.npmjs.com/) and [Node.js](https://nodejs.org/en/).
You can find the instructions on installing npm and node in the official [documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

Once you have npm and node installed, you'll need to install the dependencies outlined in the package.json file.
You can do so by running the following command:

```bash
npm install
```

**use node v16.x LTS**!

:warning: 
The query tool is built with the Nuxt framework and currently depends on Nuxt2. 
Nuxt2 does not support node versions beyond the v16 LTS (see e.g. [this Github issue](https://github.com/nuxt/nuxt/issues/10844)).
If you want to run the tool locally, make sure you are using node v16.x.
A good way to manage different node versions is to use the [node version manager](https://github.com/nvm-sh/nvm) tool.

### Set the Environment Variables

You'll need to set the `API_QUERY_URL` environment variable required to run the query tool. `API_QUERY_URL` is the [Neurobagel API](https://github.com/neurobagel/api) URL that the query tool uses to send requests to for results. The query tool utilizes [nuxt dotenv module](https://github.com/nuxt-community/dotenv-module) for managing environment variables. 

To set environment variables, create an `.env` file in the root directory and add the environment variables there. If you're running the API locally on your machine (following the instructions [here](https://github.com/neurobagel/api#local-installation)), your `.env` file would look something like this:

```bash
API_QUERY_URL=http://localhost:8000/
```

if you're using the remote api, your `.env` file would look something like this:

```bash
API_QUERY_URL=https://api.neurobagel.org/
```

:warning: The protocol matters here. 
If you wish to use the Neurobagel remote API, ensure your `API_QUERY_URL` uses `https` instead of `http`.

### Launch the Query Tool as a Docker container
To launch the query tool Docker container and pass in the `.env` file you have created, simply run

```bash
docker run -p 3000:3000 --env-file=.env neurobagel/query_tool:latest
```

Then you can access the query tool at http://localhost:3000

**Note**: the query tool is listening on port `3000` inside the docker container,
replace port `3000` by the port you would like to expose to the host.

### Launch the Query Tool for a manual install

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


Once you've defined your criteria, submit them as a query and the query tool will display the results.\
The query tool offers two different TSV files for results:
- Dataset-level results TSV contains: dataset id, dataset name, dataset portal uri, number of matching subjects, and available imaging modalities
- Participant-level results TSV contains: dataset id, subject id, age, sex, diagnosis, assessment, session id, session file path, number of sessions, and imaging modality

The output files can be joined using `DatasetID` as key.

You can refer to [the neurobagel documentation](https://neurobagel.org/query_tool/#downloading-query-results) to see what the outputs of the query tool look like and how they are structured. You can also download the raw example output files [here](https://github.com/neurobagel/neurobagel_examples/tree/main/query-tool-results).

## Testing

The query tool utilizes [Cypress](https://www.cypress.io/) framework for testing.

To run the tests execute the following command:

```bash
npx cypress open
```

### License

The query tool is released under the terms of the [MIT License](LICENSE)
