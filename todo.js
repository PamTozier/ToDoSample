var todoapp = {
  init: function()  {
    $('.todolist .todoItem:first-child input').keypress(todoapp.newTask);  
    $('.todolistitem').on('dblclick', '.item input', todoapp.beginEditTask);
    $(todoapp.toggleStatusTask);
                               
 $('.todolistitem').on('mouseleave', todoapp.endEditTask);  
  
  },
  newTask: function(ev) {
    
  //get input, append to task list
    if(ev.which === 13) {
    var input = $(this);
      
    var clonedItem = input.parent().parent().clone();
    
      //console.log(clonedItem);  
    $(clonedItem)
      .removeClass('todoItem')
      .addClass('todolistitem')
    
    $('.todolist').append(clonedItem);
    input.val(''); }; 
    
    $(clonedItem).find('.item input')
    .attr('readonly', true)
    .removeAttr('placeholder');
    
    $('.todolistitem .btn').show();
    
    todoapp.updateCount();
    //todoapp.beginEditTask(ev);
  },
  
   beginEditTask: function(ev){
  $(ev.target).removeAttr('readonly');
    
    //double click to edit items
//    $('input').ondblclick(this:'readonly', false);
  }, 
  toggleStatusTask: function(ev){
    //change complete or active
    $(ev.target).closest('checkbox')
      .removeClass('item')
      .addClass('noitem');
    todoapp.updateCount;
/*    var complete = $('.todolistitem .check checkbox');  
    if(complete === true) {
        
        $('.check checkbox')
        .onchange('.item input')
        .removeClass('.item')
        .addClass('.noitem');
      */
        
  
  },
  toggleAll: function(){
    //top level change status for all
    
  },

  
  
  endEditTask: function(){
    //commit edits to double clicked item
    $('.item input').attr('readonly', true);
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
    var Count = $('.todolistitem').length-($('.todolistitem .noitem').length);
    $('.itemsleft').text(Count);
    
  }
  
};
