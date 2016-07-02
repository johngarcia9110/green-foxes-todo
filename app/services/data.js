module.exports = function($http, $scope){
   
    this.getTodos = function(callback){
        $http.get('http://104.236.68.81/api/tasks')
        .then(callback)
    }
    
    
//    this.addTodos = function(todo){
//        
//        $http.post('http://104.236.68.81/api/tasks', todo)
//        
//        
//        .then(console.log(todo.length + 'have been saved.'))
//    }
}