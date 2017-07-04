angular.module('bu').service('mainService', function($http){

this.getData = () => {
  return $http.get('./storage.json').then( (response) => {
    // console.log(response.data)
    return response.data
  })
}

this.getAllBlogs = () => {
  return $http.get('/getAllBlogs').then( (response) => {
    // console.log('data base blogs', response.data)
    return response.data;
  })
}


})
