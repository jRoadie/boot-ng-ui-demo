var bng = angular.module('boot-ng-ui', []);
var directives = bng.directives = {};
directives.Alert = function() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: options.template_dir + 'alert.html',
        scope: {
            closeBsAlert: '&',
            closedBsAlert: '&'
        },
        link: function(scope, el, attrs) {
            scope.type = attrs.type;
            scope.id = attrs.id;
            scope.class = attrs.class;
            scope.dismissible = attrs.dismissible != 'false';
            el.on('close.bs.alert', scope.closeBsAlert);
            el.on('closed.bs.alert', scope.closedBsAlert);
        }
    }
};
directives.Well = function() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: options.template_dir + 'well.html',
        link: function(scope, el, attrs) {
            scope.size = attrs.size !== undefined && attrs.size === "small" ? 'sm' : 'lg';
        }
    }
};
directives.Button = function() {
    return {
        restrict: 'E',
        templateUrl: options.template_dir + 'button.html',
        scope: {},
        link: function(scope, el, attrs) {
        }
    }
};
bng.directive('alert', directives.Alert);
bng.directive('bngAlert', directives.Alert);
bng.directive('btn', directives.Button);
bng.directive('bngButton', directives.Button);
bng.directive('well', directives.Well);

/*----------- Utils -------------*/
var utils = {
    toSet: function(arr) {
        var tmp = {};
        for(var i = 0; i < arr.length; i++) {
            tmp[arr[i]] = arr[i]
        }
        var res = [];
        for(var i in tmp) {
            res.push(tmp[i]);
        }
        return res;
    }
};