var todoapp = {
  init: function()  {
    $('.todolist .todoItem:first-child input').change(todoapp.newTask);  
  },
  
  newTask: function() {
    
  //get input, append to task list
    var input = $(this);
    var clonedItem = input.parent().parent().clone();
    $('.todolist').append(clonedItem);
    input.val('');
    todoapp.updateCount();
  },
  toggleStatusTask: function(ev){
    //change complete or active
    
  },
  toggleAll: function(){
    //top level change status for all
  },
  beginEditTask: function(){
    //double click to edit items
  },
  endEditTask: function(){
    //commit edits to double clicked item
  },
  deleteTask: function(){
    //x button to delete the item completely
  },
  filterTask: function(all, active, complete){
  //alt: View all, view active, view complete
  },
  clearCompletedTasks: function(){
  //delete more than one at a time
  
},
  updateCount: function() {
  //show numver of items
    var Count = $('.todolist .todoItem').length - 1;
    $('.itemsleft').text(Count);
    
  }
  
};
