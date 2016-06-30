module.exports = function($scope, $http){
    $scope.message = 'Angular is working!'
    
    $scope.saveTodos = function(task){
        
        $http.post('/api/tasks', task ).then()
            
    }
}