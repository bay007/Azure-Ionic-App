// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers','app.services','azure'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $stateProvider



    .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl'
        }
      }
    })

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })


    .state('app.list', {
      url: '/list',
      views: {
        'menuContent': {
          templateUrl: 'templates/list.html',
          controller: 'TodoListCtrl'
        }
      }
    })

    .state('app.newtask', {
      url: '/new',
      views: {
        'menuContent': {
          templateUrl: 'templates/newtodo.html',
          controller: 'NewToDoCtrl'
        }
      }
    })
;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');


    // don't cache any data
  $ionicConfigProvider.views.maxCache(0);
});
