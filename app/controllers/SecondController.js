module.exports = function($scope, $http) {
    $scope.addTask = function(newTodo) {
        var config = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:9000'
            }
        }
        newTodo.completed = false;
        newTodo.priority = parseInt(newTodo.priority);
        console.log(newTodo);

        $http.post('http://104.236.68.81/api/tasks/', newTodo, config)
            .success(function(data, status, headers, config) {
                console.log('aiiigh')
            })
            .error(function(data, status, header, config) {
                console.log('mierda')
            });
    }
}
