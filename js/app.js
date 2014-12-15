(function() {
    window.options = {
        template_dir:  location.pathname + 'boot-ngui/templates/'
    };
    var bngDemo = angular.module('bng-demo', ['boot-ngui']);
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