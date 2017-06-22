angular.module('bu').controller('blogCtrl', function($scope, $stateParams, mainService){

  (() => {
    for (let i = 0; i < $scope.blogData.length; i++) {
      for (let j = 0; j < $scope.blogData.blog.length; j++) {
        if($stateParams.title === $scope.blogData.blog.title){
          $scope.blogItem = $scope.blogData[i]
        } else {
          console.log('blog not found')
        }
      }
    }
  })();

})
