module.exports = function(grunt) {
  var pkg = grunt.file.readJSON('package.json');
  grunt.initConfig({
    jsx: {
      build_server: {
        src: "main.jsx",
        dest: "main.js",
        add_search_path: ["node_modules/express.jsx/lib", "node_modules/socket.io.jsx/src", "nodejs.jsx/lib"],
        executable : "node",
      },
      build_client: {
        src: "public/client.jsx",
        dest: "public/client.js",
        add_search_path: ["node_modules/socket.io.jsx/src"],
        executable : "web",
      },
      test: {
        src: grunt.option('target') || 't/**/*.jsx',
        add_search_path: ["src", "nodejs.jsx/lib"],
        executable : "node",
        test : true,
      },
    },
  });

  grunt.loadNpmTasks("grunt-jsx");

  grunt.registerTask('test', ['jsx:test']);
  grunt.registerTask('build', ['jsx:build_server', 'jsx:build_client']);
}
