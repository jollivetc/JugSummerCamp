JugSummerCamp
=============

This project gather demonstration for my conference at JugSummerCamp 2013 about integration of JavaScript in software factories.

01-jasmine-test
---------------
This is a basic Jasmine project with tests in spec directory. When creating new tests, you need to add required files in the `SpecRunner.html` file.
In order to get a continuous feedback, you can launch [testem](https://github.com/airportyh/testem) which is configured by the `testem.yml`. 

For integration in Jenkins, you need to create a job running `testem ci` and use a plugin to import tests result in TAP format.

02-JasmineMaven
---------------
This project is created using the command `mvn archetype:generate -Dfilter=jasmine`

It will allow you to execute your js tests using Maven and Maven type project in Jenkins.

03-jsMavenTools
---------------
This project is built using [Maven Tools for JavaScript Developers](http://mojo.codehaus.org/javascript-maven-tools/)
 

The use of Maven build extension and repository bring many Maven plugin like concatenation and minification of js on `mvn package` or jsTestRunner on `mvn test`.

04-webjarDemo
-------------
This project use Webjar for dependencies of js librairies. Webjar manage transitive dependencies and put jars inside `WEB-INF/lib` of the final package.

You can find a sample of usage in the file `index.html`.

05-grunt
--------
this project doesn't use Maven for builts but Grunt.
It allows you to define task in `Gruntfile.js` and launch them on the command line using `grunt <task>`

For Jenkins intégration, you need to have npm available for the "Jenkins user", you can use the [nodejs plugin](https://wiki.jenkins-ci.org/display/JENKINS/NodeJS+Plugin) for this.

To set it in continuous integration you need to prepare a free job with shell command : 
`npm install;
grunt test
`

Interesting plugins in the project are : 

* Plato for code quality
* jsduck for documentation
* istanbul for code coverage

There is also a sonar-project.properties to use with `sonar-runner`

06-Yo
-----
This project is the result of scaffoldin with [Yeoman](http://yeoman.io/). It uses Grunt for the build but also Bower for dependencies. For Jenkins intégration, you need to have npm available for the "Jenkins user", you can use the [nodejs plugin](https://wiki.jenkins-ci.org/display/JENKINS/NodeJS+Plugin) for this.

To run it in Jenkins, you need to create a free job and add shell step with  : 
`npm install && bower install; grunt package`