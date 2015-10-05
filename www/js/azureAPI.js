angular.module('app.services', [])
  .factory('azureAPI', [ '$q', '$rootScope', function ( $q, $rootScope) {

    var client = new WindowsAzure.MobileServiceClient(
      "https://ionic-todo.azure-mobile.net/",
      "wbkdvJfFonKDssaJOQTBBRyRZpLFbj84"
    );


    return {
      getAll: function () {
        var deferred = $q.defer();

        client.getTable('Task').read().then(function () {
          deferred.resolve.apply(this, arguments);
          $rootScope.$apply();
        }, function () {
          deferred.reject.apply(this, arguments);
          $rootScope.$apply();
        });

        return deferred.promise;
      },

      addTask: function (task) {
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

        client.getTable('Task').update(task).then(function (data) {
          deferred.resolve.apply(this, arguments);
        }, function (error) {
          deferred.reject.apply(this, arguments);
        });
        return deferred.promise;
      }



    };
  }]);