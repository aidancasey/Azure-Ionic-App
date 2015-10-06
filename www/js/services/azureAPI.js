angular.module('app.services', ['azure'])
  .factory('azureAPI', ['client' ,'$q', '$rootScope', function (client, $q, $rootScope) {

    return {
      getAll: function () {
        var deferred = $q.defer();

        var userId = client.currentUser.userId;

        //filter by user id
        client.getTable('Task').where({userId:userId}).read().then(function () {
          deferred.resolve.apply(this, arguments);
          $rootScope.$apply();
        }, function () {
          deferred.reject.apply(this, arguments);
          $rootScope.$apply();
        });

        return deferred.promise;
      },

      addTask: function (task) {

        task.userId = client.currentUser.userId;
        var deferred = $q.defer();

        client.getTable('Task').insert(task).then(function (data) {
          deferred.resolve.apply(this, arguments);
        }, function (error) {
          deferred.reject.apply(this, arguments);
        });
        return deferred.promise;
      },

      updateTask: function (task) {
        var deferred = $q.defer();
        task.userId = client.currentUser.userId;

        client.getTable('Task').update(task).then(function (data) {
          deferred.resolve.apply(this, arguments);
        }, function (error) {
          deferred.reject.apply(this, arguments);
        });
        return deferred.promise;
      }

    };
  }]);