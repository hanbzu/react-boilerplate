BEWARE: This is work in progress. My intention is to use it as a reference
for some time and if I have time improve this README file to ease understanting.


## Steps

* Install Webpack (not as dev-dep, because it's needed to compile in server)

npm install --save webpack@^1.12.2

* Install Webpack middleware
npm install --save-dev webpack-dev-middleware@^1.2.0 webpack-hot-middleware@^2.4.1

* Install Babel (avoiding Babel 6 until compatible with react-transform). Babel and babel-loader are needed on the server so don't --save-dev but simply --save.
npm install --save-dev babel-core@^5.4.7 babel-eslint@^4.1.3 babel-plugin-react-transform@^1.1.1
npm install --save babel@^5.8.23 babel-loader@^5.1.2

* Express to be used as a server, plus favicon middleware
npm install --save express serve-favicon

* React
npm install --save react react-dom

* Add .babelrc with stage 0 (can this be improved)

* Install development mode tools. This will allow to define a specific section in server/server.js and load the Webpack dev conf along with the hot reloading and error reporting modules.
npm install --save-dev react-transform-catch-errors react-transform-hmr redbox-react

* Other tools
npm install --save rimraf

* CSS modules. CSS loader will be used so that modules can be nicely packed.
npm install css-loader --save

Inspiration:
* https://github.com/inxilpro/react-redux-isomorphic-hot-boilerplate
