<<<<<<< Updated upstream
module.exports = function($scope, DataService){
//    $scope.newTodo = JSON.stringify{ title : '', description : ''};
//    $scope.addNewTodo = function(){
//        var config = {
//            method: 'POST',
//            url : 'http://104.236.68.81/api/tasks',
//            data : {
//                'title' : $scope.todo.title,
//                'description' : $scope.todo.description
//            }
//        }
//        var request = $http(config);
//        request.then(function (response){
//            console.log(response.data);
//        },function(error){
//            console.log(error.data);
//        })
//    }
    
=======
module.exports = function($scope, $http, DataService){
    // $scope.newTodo = JSON.stringify{ title : '', description : ''};
    $scope.addNewTodo = function(){
        var config = {
            method: 'POST',
            url : 'http://104.236.68.81/api/tasks',
            data : {
                'title' : $scope.todo.title,
                'description' : $scope.todo.description
            }
        }
        var request = $http(config);
        request.then(function (response){
            console.log(response.data);
        },function(error){
            console.log(error.data);
        })
    }

>>>>>>> Stashed changes
    DataService.getTodos(function(response){
        console.log(response.data);
        $scope.todos = response.data;
    })
    //DataService.addTodo();
    $scope.completeTodo = function(index){
      console.log(index);
    }

    $scope.saveTodos = function(){
        var filteredTodos = $scope.todos.filter(function(todo){
            if(todo.edited){
                return todo;
            }
        })
        DataService.saveTodos(filteredTodos);
    }
}
