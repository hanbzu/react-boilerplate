* Install Webpack
npm install --save-dev webpack@^1.12.2 webpack-dev-middleware@^1.2.0 webpack-hot-middleware@^2.4.1

* Install Babel (avoiding Babel 6 until compatible with react-transform).
npm install --save-dev babel-core@^5.4.7 babel-eslint@^4.1.3 babel-loader@^5.1.2 babel-plugin-react-transform@^1.1.1
npm install --save babel@^5.8.23

* Express to be used as a server, plus favicon middleware
npm install --save express serve-favicon

* React
npm install --save react react-dom

* Add .babelrc with stage 0 (what for?)

* Install development mode tools. This will allow to define a specific section in server/server.js and load the Webpack dev conf along with the hot reloading and error reporting modules.
npm install --save-dev react-transform-catch-errors react-transform-hmr redbox-react

* Other tools
npm install --save rimraf
