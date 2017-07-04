'use strict';

angular.module('bu', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './views/home.html'
  }).state('read', {
    url: '/home/:title',
    templateUrl: './views/text.html'
    // controller: 'quillCtrl'
  });

  $urlRouterProvider.otherwise('/');
});
'use strict';

angular.module('bu').controller('blogCtrl', function ($scope, $stateParams, mainService) {

  (function () {
    for (var i = 0; i < $scope.blogData.length; i++) {
      for (var j = 0; j < $scope.blogData.blog.length; j++) {
        if ($stateParams.title === $scope.blogData.blog.title) {
          $scope.blogItem = $scope.blogData[i];
        } else {
          console.log('blog not found');
        }
      }
    }
  })();
});
'use strict';

angular.module('bu').controller('mainCtrl', function ($scope, $stateParams, mainService) {

  $scope.mainIf = false;

  $scope.title = $stateParams.title;

  $scope.getData = function () {
    return mainService.getData().then(function (response) {
      // console.log(response)
      $scope.blogData = response;
    });
  };

  $scope.getData();

  $scope.allBlogs;

  $scope.getBlogs = function () {
    mainService.getAllBlogs().then(function (response) {
      $scope.allBlogs = response;
      console.log('blogsArray: ', $scope.blogsArray);
    });
  };

  $scope.getBlogs();

  $scope.title = $stateParams.title;

  console.log($scope.title);

  // $scope.getBlogItem = mainService.
});
'use strict';

angular.module('bu').service('mainService', function ($http) {

  this.getData = function () {
    return $http.get('./storage.json').then(function (response) {
      // console.log(response.data)
      return response.data;
    });
  };

  this.getAllBlogs = function () {
    return $http.get('/getAllBlogs').then(function (response) {
      // console.log('data base blogs', response.data)
      return response.data;
    });
  };
});
// <!-- Initialize Quill editor -->

// var quill = new Quill('#editor', {
//   theme: 'snow'
// });
"use strict";
'use strict';

angular.module('bu').controller('quillCtrl', function ($scope, $stateParams, quillService, mainService, $http) {

  $scope.deltaData;

  $scope.quillContent = quill.container.firstChild.innerHTML.toString();

  console.log('quill content', $scope.quillContent);

  $scope.submit = function () {

    $scope.data = $scope.quilllContent;

    return $http.post('/postBlogText', $scope.data);
  };

  // $scope.title = $stateParams.title
  //
  // console.log($scope.title)
  //
  // $scope.getBlog = quillService.getBlog($scope.title).then( (response) => {
  //   $scope.blogItem = response;
  //   console.log($scope.blogItem)
  // })
});
'use strict';

angular.module('bu').service('quillService', function ($http) {

  // this.quillContent = quillCtrl.submit();

  // this.postBlog = () => {
  //   return $http.post('/postBlogText').then( () => {
  //
  //   })
  // }

  // this.getBlog = (title) => {
  //   return $http.get('../storage.json/' + title).then( (response) => {
  //     return response;
  //     console.log(response)
  //   })
  // }
  //
  // this.getBlog();

});
//# sourceMappingURL=bundle.js.map
