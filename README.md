Azure-Ionic-App
=====================

A smaple application demonstrating how to integrate an ionic framework mobile application with a Windows Azure Mobile Services back

read this blog post for more info...

https://acaseyblog.wordpress.com/2015/10/07/build-a-hybrid-application-with-the-ionic-framework-and-windows-azure-mobile-services/


## Pre requisites
Node.js, Cordova

```bash
$ npm install -g ionic
$ npm install -g cordova
```
A windows azure subscription  sign up for a free trial account here
https://azure.microsoft.com/en-us/pricing/free-trial/

## Configuring the application
(1) provision  a  windows azure mobile service backend
(2) Add the url and application key to www/js/services/azureClient.js
(3) Create OAuth credentials and associate these with the app (more info here https://azure.microsoft.com/en-us/documentation/articles/mobile-services-how-to-register-google-authentication/)
(4) Create a tabble called 'Task"

## To run locally
```bash
$ ionic server
```

## more info
ionic framework -   http://ionicframework.com/
azure mobile services - https://azure.microsoft.com/en-us/documentation/services/mobile-services/

## Contributing
Contributors are most welcome, fork the code and submit a pull request !


aidancasey@gmail.com

