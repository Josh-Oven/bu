angular.module('bu').controller('mainCtrl', function($scope, $stateParams, mainService){

$scope.mainIf = false;

$scope.title = $stateParams.title;

$scope.getData = () => {
  return mainService.getData().then( (response) => {
    // console.log(response)
    $scope.blogData = response;
  })
}

$scope.getData();

$scope.allBlogs;

$scope.getBlogs = () => {
  mainService.getAllBlogs().then( (response) => {
    $scope.allBlogs = response;
    console.log('blogsArray: ', $scope.blogsArray)
  })
}

$scope.getBlogs();

$scope.title = $stateParams.title

console.log($scope.title)

$scope.getBlogItem = mainService.

})
