angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $state) {

    $scope.newTask = function() {
      $state.go('app.newtask');
    }
})

.controller('TodoListCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

  .controller('NewToDoCtrl', function($scope,$state) {

    $scope.saveTask = function() {
      console.log('save to do task');
      $state.go('app.list');
    }
  })
;
