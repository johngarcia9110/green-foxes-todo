module.exports = function($scope, DataService) {

  DataService.getTodos(function(response) {
      console.log(response.data);
      $scope.todos = response.data;
  }),

    $scope.editTask = function(todo) {
        DataService.editTask(todo);
    },

    $scope.deleteTask = function(todo, index) {
        DataService.deleteTask(todo);
        $scope.todos.splice(index,1);
    },

    $scope.addTask = function(todo) {
        DataService.addTask(todo);
    },

    $scope.getStyle = function(todo) {
        if (todo.completed) {
            var textDecoration = 'line-through';
            var color = '#D2D2D2';
        } else {
            var textDecoration = 'none';
            var color = '#000000';
        }
        var borderColor
        switch (todo.priority) {
            case 0:
                borderColor = '#45C67D'
                break;
            case 1:
                borderColor = '#FF7700'
                break;
            case 2:
                borderColor = '#e63d3d'
        }
        return {
            'text-decoration': textDecoration,
            'color': color,
            'border-color': borderColor
        }
    }
}
