Dev tools are part of a project. Development conf is part of a project. Don't hide it.

# The guide

## React-transforms

Dan Abramov wrote a Babel plugin to wrap all react components into arbitrary
transforms written by the community. This is useful to:

* catch errors inside render() like react-transform-catch-errors;
* enable hot reloading like react-transform-hmr;
* render an inline prop inspector like react-transform-debug-inspector;
* highlight parts of the screen when components update like react-transform-render-visualizer;
* etc.

The plugin comes in an NPM package and community transforms have of course
their own NPM packages. In this boilerplate I use:

* react-transform-hmr
* react-transform-catch-errors

# Glosario

* [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware): Webpack hot reloading using only webpack-dev-middleware. This allows you to add hot reloading into an existing server without webpack-dev-server.

* [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware): It serves the files emitted from webpack over a connect server.

* [webpack-isomorphic-tools](https://github.com/halt-hammerzeit/webpack-isomorphic-tools): Adds server side rendering for requires (images, css, etc) that were only possible in the client through Webpack. Used to make the app universal.

* Travi CI is a continnuous integration system that apparently works for free with open source on GitHub.
