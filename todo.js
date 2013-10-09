var todoapp = {
  newTask: function() {
  //get input, append to task list
    var value = $('item').val();
    $('topitem').append('<li>' + value + '</li>');
    
      },
  toggleStatusTask: function(){
    //change complete or active
  },
  toggleAll: function(){
    //top level change status for all
  },
  beginEditTask: function(){
    //double click to edit items
  },
  endEditTaks: function(){
    //commit edits to double clicked item
  },
  deleteTask: function(){
    //x button to delete the item completely
  },
  filterTask: function('all, active, complete'){
  //alt: View all, view active, view complete
  },
  clearCompletedTasks(){
  //delete more than one at a time
  
},
  updateCount: function() {
  //show numver of items
  }
  
};