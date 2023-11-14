<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="light"
      variant="light"
    >
      <b-navbar-brand
        class="brand-styling"
        href="https://www.neurobagel.org/"
        target="_blank"
        data-cy="brand"
      >
        <img
          src="https://raw.githubusercontent.com/neurobagel/documentation/main/docs/imgs/logo/neurobagel_logo.png"
          alt="Neurobagel Logo"
          class="nav-logo"
        >
        <div class="nav-title-and-subtitle">
          Neurobagel Query
          <p class="nav-subtitle">
            Define and find cohorts at the subject level
          </p>
        </div>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav
          class="ml-auto right-nav"
        >
          <b-nav-item
            href="https://github.com/neurobagel/query-tool/releases/tag/v0.1.0/"
            target="_blank"
            data-cy="version"
          >
            v0.1.0
          </b-nav-item>
          <b-nav-item
            href="https://www.neurobagel.org/query_tool/"
            target="_blank"
            data-cy="docs"
          >
            Documentation
          </b-nav-item>
          <b-nav-item
            href="https://github.com/neurobagel/query-tool/"
            target="_blank"
            data-cy="github"
          >
            <b-icon
              icon="github"
              font-scale="1"
            />
          </b-nav-item>
          <b-navbar-nav />
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style>
  .brand-styling {
    font-family: -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      "Helvetica Neue",
      Arial,
      "Noto Sans",
      "Liberation Sans",
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji";
    font-size: 2em;
    font-weight: 700;
    padding-left: 1em;
  }

  .navbar {
      background-color: white !important;
      margin-bottom: 0.5rem;
  }

  .navbar-nav .nav-link:hover {
    color: #470A68;
  }

  .nav-subtitle {
    color: grey;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
  }

  .nav-title-and-subtitle {
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
    margin-top: 10px;
  }

  .right-nav {
    padding-right: 1em;
    margin-left: auto !important;
  }

  .nav-logo {
    height: 60px;
    width: auto;
  }
</style>
