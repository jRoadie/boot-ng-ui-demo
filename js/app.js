(function() {
    window.options = {
        template_dir:  location.pathname + 'boot-ng-ui/templates/'
    };
    var bngDemo = angular.module('bng-demo', ['boot-ng-ui']);
    bngDemo.controller('AlertDemo', function($scope) {
        $scope.beforeClose = function() {
            alert('before')
        };
        $scope.afterClose = function() {
            console.log('after')
        }
    });
    bngDemo.controller('WellDemo', function($scope) {
    });
})();