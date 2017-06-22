angular.module('bu').controller('mainCtrl', function($scope, $stateParams, mainService){

$scope.mainIf = false;

$scope.title = $stateParams.title;

$scope.deltaData

console.log('deltaData: ', $scope.deltaData)

$scope.getData = () => {
  return mainService.getData().then( (response) => {
    console.log(response)
    $scope.blogData = response;
  })
}

$scope.getData();

$scope.colorC;

$scope.readColor;

$scope.colorChange = () => {

  return () => {

    if ($scope.mainIf == false){
      $scope.readColor = {'background': '#383C3E'};
    } else if($scope.mainIf == true){
      $scope.readColor ={'background': '#1B1E1F'}
    }
    return $scope.readColor
  }
}

console.log($scope.readColor)

// $scope.blogData;

})
