// Generated on 2013-12-30 using generator-angular 0.7.1 then manually modified
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'
var path = require('path');
module.exports = function(grunt) {

    // Load grunt tasks automatically
//    grunt.loadNpmTasks('grunt-contrib-sass');
    require('grunt-tasks')(grunt)

    // Define the configuration for all the tasks
    grunt.initConfig({
        // sass_globbing: {
        //     dist:{
        //         files: {
        //             'theme.scss': '../src/sass/**/*.scss' 
        //         },
        //         options: {
        //             useSingleQuotes: false,
        //             signature: '//Hello World'
        //         }
        //     }
        // },
        sass: {
            dist:{
                files: {
                   '../src/css/theme.css': '../src/sass/base.scss' 
                }
            }
        },
         
        watch: {
            styles: {
                files: ['../src/sass/**/*.scss'],
                tasks: ['sass'],
                options: {
                  nospawn: true
              }
           }
       }

   });

    grunt.registerTask('default', [
//        'sass_globbing',
        'sass',
       'watch'
 //       'sass'
    ]);



};