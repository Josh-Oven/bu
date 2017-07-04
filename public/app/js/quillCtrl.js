angular.module('bu').controller('quillCtrl', ($scope, $stateParams, quillService, mainService, $http) => {

$scope.deltaData

$scope.quillContent = quill.container.firstChild.innerHTML.toString();

console.log('quill content', $scope.quillContent)

$scope.submit = () => {

  $scope.data = $scope.quilllContent;

    return $http.post('/postBlogText', $scope.data)
}

// $scope.title = $stateParams.title
//
// console.log($scope.title)
//
// $scope.getBlog = quillService.getBlog($scope.title).then( (response) => {
//   $scope.blogItem = response;
//   console.log($scope.blogItem)
// })

})
