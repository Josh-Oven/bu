angular.module('bu', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html'
    })

    .state('read', {
      url: '/home/:title',
      templateUrl: './views/text.html'
      // controller: 'quillCtrl'
    })

    $urlRouterProvider.otherwise('/')

})
