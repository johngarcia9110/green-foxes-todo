module.exports = function($http, $scope) {

    this.getTodos = function(callback) {
        $http.get('http://104.236.68.81/api/tasks')
            .then(callback)
    }

    this.editTask = function(todo) {
        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
            console.log(todo);
        $http.put('http://104.236.68.81/api/tasks/' + todo.id, todo, config)
            .success(function(data, status, headers, config) {
                console.log('aiiigh')
            })
            .error(function(data, status, header, config) {
                console.log('mierda')
            });
    }
    this.deleteTask = function(todo) {
        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        $http.delete('http://104.236.68.81/api/tasks/' + todo.id, todo, config)
            .success(function(data, status, headers, config) {
                console.log('aiiigh')
            })
            .error(function(data, status, header, config) {
                console.log('mierda')
            });
    },

    this.addTask = function(todo) {
        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        $http.post('http://104.236.68.81/api/tasks/', todo, config)
            .success(function(data, status, headers, config) {
                console.log('aiiigh')
            })
            .error(function(data, status, header, config) {
                console.log('mierda')
            });
    }
}
