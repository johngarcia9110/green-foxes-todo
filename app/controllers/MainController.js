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

<<<<<<< HEAD
	$scope.getStyle = function (todo) {
	  if (todo.completed) {
		var textDecoration = 'line-through';
		var color = '#D2D2D2';
	  } else {
		var textDecoration = 'none';
		var color = '#000000';
	  }
	var borderColor
	  switch(todo.priority) {
		case 0:
			borderColor = '#45C67D'
			break;
		case 1:
			borderColor = '#FF7700'
			break;
		case 2:
			borderColor = '#FF0000'
	}
		return {
			 'text-decoration': textDecoration,
			 'color': color,
			 'border-color': borderColor
		}
	};

		DataService.getTodos(function(response){
			console.log(response.data);
			$scope.todos = response.data;
		})
		//DataService.addTodo();
		$scope.completeTodo = function(index){
		  console.log(index);
		}
}
=======
$scope.getStyle = function (todo) {
  if (todo.completed) {
    var textDecoration = 'line-through';
    var color = '#D2D2D2';
  } else {
    var textDecoration = 'none';
    var color = '#000000';
  }
var borderColor
  switch(todo.priority) {
    case 0:
        borderColor = '#45C67D'
        break;
    case 1:
        borderColor = '#FF7700'
        break;
    case 2:
        borderColor = '#FF0000'
}
    return {
         'text-decoration': textDecoration,
         'color': color,
         'border-color': borderColor
    }
};

    DataService.getTodos(function(response){
        console.log(response.data);
        $scope.todos = response.data;
    })
    //DataService.addTodo();
    $scope.completeTodo = function(index){
      console.log(index);
    }
}
>>>>>>> 9b9559c41a30f80467178512e2a615d1e8627673
