module.exports = function(grunt){
	grunt.initConfig({
		vendorPath: 'node_modules',
		uglify: {
			options: {
				sourceMap: true
			},
			build: {
				files: {
					'build/master.js': [
						'js/main.js',
						'js/controllers/HomeCtrl.js',
						'js/controllers/ProjectsCtrl.js',
						'js/services/contactService.js'
					]
				}
			}
		},
		concat: {
			options: {
				sourceMap: true
			},
			dist: {
				src: [
					'<%= vendorPath %>/angular/angular.min.js',
					'<%= vendorPath %>/angular-route/angular-route.min.js',
					'bower_components/firebase/firebase.js',
					'<%= vendorPath %>/angularfire/dist/angularfire.min.js',
					'build/master.js'
				],
				dest: 'build/app.min.js'
			}
		},
		less: {
			development: {
				options: {
					yuicompress: true,
					paths: ["css"],
					livereload: true,
					sourceMap: true
				},
				files: {
					'css/master.css': 'css/master.less'
				}
			},
			theme: {
				options: {
					yuicompress: true,
					paths: ["css"],
					livereload: true,
					sourceMap: true
				},
				files: {
					'css/theme-preview/chooser.css': 'css/theme-preview/chooser.less'
				}
			}
		},
		watch: {
			less: {
				options: {
					livereload: true
				},
				files: ['css/**/*.less'],
				tasks: ['less:theme']
			},
			js: {
				options: {
					livereload: true
				},
				files: ['js/**/*.js'],
				tasks: ['uglify', 'concat']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
}