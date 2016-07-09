require('angular')

var MainController = require('./controllers/MainController')
var SecondController = require('./controllers/SecondController')
DataService = require('./services/data')

angular.module('app', [])

.controller('MainController', ['$scope', 'DataService', MainController])
.controller('SecondController', ['$scope', '$http', SecondController])
.service('DataService', ['$http', DataService])
