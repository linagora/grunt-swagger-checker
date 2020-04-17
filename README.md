# grunt-swagger-checker

> Grunt plugin for checking swagger syntax

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-swagger-checker --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-swagger-checker');
```

## The "swagger_checker" task

### Overview
This plugin uses Swagger parser. Please visit [their website](https://apitools.dev/swagger-parser/) for any further implementation and documentation. 

To use this plugin, navigate to your project's Gruntfile, add a section named `swagger_checker` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  swagger_checker: {
    options: {
      // Task-specific options go here.
    }
  },
});
```

### Options
* path: the file path or URL of your Swagger document, with the base path is your grunt.js file.
* validate: this option controls how the Swagger document is validated. It is an object with 2 keys which are **schema** and **spec**. Set **schema** to true to validate Swagger 2.0 Schema. Set **spec** to true to validate things that aren't covered by the schema, such as duplicate parameters, invalid MIME types, etc.

### Usage Examples
```js
  grunt.initConfig({
    swagger_validator: {
      options: {
        path: './doc/REST_API/swagger/swagger.json',
        validate: {
          schema: true,
          spec: false
        }
      }
    }
  });
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
