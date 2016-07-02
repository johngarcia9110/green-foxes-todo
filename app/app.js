require('angular')

var MainController = require('./controllers/MainController')
DataService = require('./services/data')

angular.module('app', [])

.controller('MainController', ['$scope', '$http', 'DataService', MainController])
.service('DataService', ['$http', DataService])