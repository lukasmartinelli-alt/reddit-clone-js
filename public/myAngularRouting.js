var redditclone = angular.module('redditclone',['ngRoute']);

redditclone.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'view/table.html'
                //   controller: 'ShowOrdersController'
            }).
            when('/new', {
                templateUrl: 'view/new.html'
            //   controller: 'AddOrderController'
            }).
            when('/entry', {
                templateUrl: 'view/entry.html'
                //   controller: 'ShowOrdersController'
            }).
            when('/404', {
                templateUrl: 'view/404.html'
                //   controller: 'ShowOrdersController'
            }).
            otherwise({
                redirectTo: '/404'
            });
    }]);
