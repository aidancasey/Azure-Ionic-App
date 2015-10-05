angular.module('azure', [])
  .factory('client', [function () {
    var client = new WindowsAzure.MobileServiceClient(
      "https://ionic-todo.azure-mobile.net/",
      "wbkdvJfFonKDssaJOQTBBRyRZpLFbj84"
    );
    return client;
  }]);