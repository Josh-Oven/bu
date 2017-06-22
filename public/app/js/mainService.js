angular.module('bu').service('mainService', function($http){

this.getData = () => {
  return $http.get('./storage.json').then( (response) => {
    console.log(response.data)
    return response.data
  })
}


})
