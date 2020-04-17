const SwaggerParser = require('@apidevtools/swagger-parser');

module.exports = function(grunt) {
  grunt.registerTask('swagger_checker', 'Grunt plugin to validate swagger document', function() {
    const done = this.async();
    const options = this.options();

    SwaggerParser.validate(options.path, { validate: options.validate })
      .then(() => {
        grunt.log.ok('The swagger document is syntactically correct');
        done();
      }).catch((err) => {
        grunt.log.error(err.message);
        done(false);
      });
  });
};
