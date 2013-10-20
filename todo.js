var todoapp = {
  init: function()  {
    $('.todolist .todoItem:first-child input').keypress(todoapp.newTask);  
    $('.todolist').on('dblclick', '.item input', todoapp.beginEditTask);
  $('.todolist').on('mouseLeave',todoapp.endEditTask);  
  
  },
  newTask: function(ev) {
    
  //get input, append to task list
    if(ev.which === 13) {
    var input = $(this);
      
    var clonedItem = input.parent().parent().clone();
    
      console.log(clonedItem);  
      
    $('.todolist').append(clonedItem);
    input.val(''); }; 
    $(clonedItem).find('.item input').attr('readonly', true).attr('placeholder', (''));
    
    todoapp.updateCount();
    //todoapp.beginEditTask(ev);
  },
  
  toggleStatusTask: function(ev){
    //change complete or active
    
  },
  toggleAll: function(){
    //top level change status for all
  },
  beginEditTask: function(ev){
  $(ev.currentTarget).removeAttr('readonly');
    
    //double click to edit items
//    $('input').ondblclick(this:'readonly', false);
  },
  
  
  endEditTask: function(){
    //commit edits to double clicked item
    $('this  .item input').attr('readonly' , true);
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
