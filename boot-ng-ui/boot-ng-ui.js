(function() {
    var bng = angular.module('boot-ng-ui', []);
    var directives = bng.directives = {};
    directives.GlyphIcon = function() {
        return {
            restrict: 'E',
            templateUrl: utils.getTemplate('glyphicon'),
            link: function(scope, el, attrs) {
                scope.name = attrs.name ? attrs.name : '';
            }
        }
    };
    directives.Alert = function() {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: utils.getTemplate('alert'),
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
            templateUrl: utils.getTemplate('well'),
            link: function(scope, el, attrs) {
                scope.size = attrs.size === 'small' ? 'sm' : 'lg';
            }
        }
    };
    directives.Label = function() {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: utils.getTemplate('label'),
            link: function(scope, el, attrs) {
                scope.type = attrs.type ? attrs.type : 'default';
            }
        }
    };
    directives.Button = function() {
        return {
            restrict: 'E',
            templateUrl: utils.getTemplate('button'),
            scope: {},
            link: function(scope, el, attrs) {
            }
        }
    };
    bng.directive('glyphicon', directives.GlyphIcon);
    bng.directive('alert', directives.Alert);
    bng.directive('bngAlert', directives.Alert);
    bng.directive('btn', directives.Button);
    bng.directive('bngButton', directives.Button);
    bng.directive('well', directives.Well);
    bng.directive('bngLabel', directives.Label);

    /*----------- Utils -------------*/
    var utils = {
        getTemplate: function(name) {
            return options.template_dir + name + '.html';
        },
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
})();