module.exports = function($scope, DataService){
    $scope.message = 'Angular is working!'
    
    DataService.getTodos(function(response){
        console.log(response.data);
        $scope.todos = response.data;
    })
    
    $scope.saveTodos = function(){
        var filteredTodos = $scope.todos.filter(function(todo){
            if(todo.edited){
                return todo;
            }
        })
        DataService.saveTodos(filteredTodos);
    }
}