module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {                             
      dist: {                           
        options: {                 
          style: 'compressed'
        },
        files: {
          'style.css': 'static/scss/master.scss'
        }
      }
    },

    watch: {
      js: {
        files: 'static/scripts/*.js',
        tasks: ['jshint', 'concat', 'uglify'],
      },
      src: {
        files: ['static/scss/*.scss'],
        tasks: ['sass'],
        options: {
          interrupt: true,
          reload: true
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
      },
      files: [
        'static/scripts/*.js'
      ]
    },

    concat: {
      dist: {
        files: {
          'static/dist/home-build.js' : [
            'static/vendor/sly.min.js',
            'static/vendor/swipe.min.js',
            'static/scripts/precompiled/article-template.js',
            'static/scripts/precompiled/instabinge-template.js',
            'static/vendor/imagesloaded.pkgd.min.js',
            'static/scripts/post-loader.js',
            'static/scripts/home.js',
            'static/scripts/instabinge.js'
          ],
          'static/dist/global-build.js' : [
            'static/vendor/jquery-2.0.3.min.js',
            'static/vendor/*.js',
            '!static/vendor/imagesloaded.pkgd.min.js',
            '!static/vendor/sly.min.js',
            '!static/vendor/hammer.min.js',
            'static/scripts/global.js',
            'static/scripts/nav.js',
            'static/scripts/modal.js',
            'static/scripts/back-up.js',
            'static/scripts/precompiled/search-template.js',
            'static/scripts/button-loader.js',
            'static/scripts/search.js',
            'static/scripts/load.js',
            'static/scripts/spinner.js',
            'static/scripts/dropdown.js'
          ],
          'static/dist/gallery-build.js' : [
            'static/vendor/sly.min.js',
            'static/vendor/hammer.min.js',
            'static/scripts/precompiled/gallery-template.js',
            'static/scripts/gallery.js'
          ],
          'static/dist/single-build.js' : [
            'static/vendor/imagesloaded.pkgd.min.js',
            'static/scripts/share.js',
            'static/scripts/single.js'
          ],
          'static/dist/category-build.js' : [
            'static/scripts/dropdown.js'
          ]
        }
      }
    },

    uglify: {
      options: {
        sourceMap: true,
        compress: {
          drop_console: true
        },
        mangle: {
          except: ['jQuery', 'Handlebars', 'flexslider']
        }
      },
      my_target: {
        files: {
          'static/dist/prod/global.min.js': ['static/dist/global-build.js'],
          'static/dist/prod/home.min.js': ['static/dist/home-build.js'],
          'static/dist/prod/single.min.js': ['static/dist/single-build.js'],
          'static/dist/prod/gallery.min.js': ['static/dist/gallery-build.js'],
          'static/dist/prod/category.min.js': ['static/dist/category-build.js']
        }
      }
    },

    handlebars: {
      compile: {
        options: {
          namespace: 'Handlebars',
          min: true,
          processName: function(filePath) {
            return filePath.match(/[^\/]+$/)[0].split('.')[0];
          }
        },

        files: {
          "static/scripts/precompiled/article-template.js": ["js_partial/article_thumb.hbs.html"],
          "static/scripts/precompiled/search-template.js": ["js_partial/search_thumb.hbs.html", "js_partial/search_next_link.hbs.html"],
          "static/scripts/precompiled/instabinge-template.js": ["js_partial/instabinge_thumb.hbs.html", "js_partial/instabinge_thumb_modal.hbs.html"],
          "static/scripts/precompiled/gallery-template.js": ["js_partial/gallery_inline.hbs.html"]
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['sass', 'concat']);
};