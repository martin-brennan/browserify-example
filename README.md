browserify-example
==================

An example of Browserify, a simple JavaScript application that uses Backbone and Underscore.

To get set up, first install Browserify:

```
npm install -g browserify
```

Then, install both watchify (a browserify file watch extension) and and uglifyify (uglifyjs for Browserify).

```
npm install --save-dev uglifyify
```

```
npm install -g watchify
```

## Structure
The app's structure is straightforward, the starting point for the application is app.js and all modules are located in the js/ directory. There is a people.json file in the root which is fetched by the Backbone collection.

## Running
I recommend doing something simple like running a python server in the root of this appby using `python -m SimpleHTTPServer 8000`. The Backbone collection will not be able to fetch if this app is not running on a server.

## Usage
To watch the JavaScript files as changes are made, use the following command:

```
watchify js/app.js -o out.js -v
```

To use Browserify to bundle all modules and uglifyjs to minify the output, use the following command:

```
browserify js/app.js | uglifyjs -o out.js
```