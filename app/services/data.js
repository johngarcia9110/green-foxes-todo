module.exports = function($http){
    this.getTodos = function(callback){
        $http.get('./mock/todos.json')
        .then(callback)
    }
    this.saveTodos = function(todos){
        console.log(todos.length + 'have been saved.')
    }
}