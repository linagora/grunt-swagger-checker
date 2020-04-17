const loadGrunt = require('load-grunt-tasks');

module.exports = function(grunt) {
  grunt.initConfig({
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      target: [
        'Gruntfile.js',
        'tasks/*.js'
      ]
    }
  });

  loadGrunt(grunt);

  grunt.registerTask('default', ['lint']);
  grunt.registerTask('lint', 'eslint');
};
