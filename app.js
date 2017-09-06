/*defined modules in html so angular js knows where to start compiling
provides different views by module for html code.



/* register the modules the application depends upon here*/
angular.module('listings', []);

/* register the application and inject all the necessary dependencies */
var app = angular.module('directoryApp', ['listings']);
