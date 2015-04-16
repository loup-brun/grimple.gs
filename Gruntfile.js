module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);


	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		// Setup paths
		paths: {
			src: 'src/',
			dist: 'dist/'
		},

		banner:
		'/** \n' +
		' * @author <%= pkg.author %> \n' +
		' * @version <%= pkg.version %> \n' +
		' * @description <%= pkg.description %> \n' +
		' * @license <%= pkg.license %> \n' +
		' */ ',

		version: {
			project: {
				src: ['package.json']
			},

			html: {
				options: {
					// @version X.X.X
					prefix: '@version\\s*'
				},
				src: ['index.html']
			},
			scss: {
				options: {
					// @version X.X.X
					prefix: '@version\\s*'
				},
				src: ['<%= paths.src %>*/**.scss']
			},
			readme: {
				options: {
					// @version X.X.X
					prefix: '@version\\s*'
				},
				src: ['README.md']
			}
		},
		sass: {
			// compile different stylesheets to be loaded async
			compile: {
				files: {
					'<%= paths.dist %><%= pkg.name %>.css': '<%= paths.src %>main.scss'
				},
				options: {
					style: 'compressed', // expanded for dev, compressed for production
					sourcemap: 'file'
				}
			},

			options: {
				precision: 3
			}
		},
		
		clean: {
			dist: {
				src: ['<%= paths.dist %>']
			}
		},

		// watch: recompile on file save
		watch: {
			sass: {
				files: ['<%= paths.src %>**/*.scss'],
				tasks: ['sass:compile']
			}
		}
	});

	grunt.registerTask(
		'compile',
		'Compile without minification',
		['clean:dist', 'version', 'sass:compile']
	);

	grunt.registerTask(
		'dev',
		'Serve the site and auto-regenerate on file change',
		['compile', 'watch']
	);

	grunt.registerTask(
		'default',
		'Default task - compile the files',
		['compile']
	);

};
