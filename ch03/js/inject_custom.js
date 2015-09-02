var myMod = angular.module('myMod', []);
myMod.value('modMsg', 'Hello From My Module');
myMod.controller('controllerB', ['$scope', 'modMsg',
                                function($scope, msg){
$scope.message = msg
}]);


var myApp = angular.module('myApp', ['myMod']);
myApp.value('appMsg', 'Hello from My App');
myApp.controller('controllerA', ['$scope', 'appMsg',
                                  function($scope, msg) {
$scope.message = msg;
}]);