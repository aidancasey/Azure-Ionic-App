angular.module('azure', [])
  .factory('client', [function () {
    var client = new WindowsAzure.MobileServiceClient(
      "your-mobile-service-url",
      "your-application-key"
    );
    return client;
  }]);