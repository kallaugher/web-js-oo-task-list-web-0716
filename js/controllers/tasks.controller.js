'use strict';
// Tasks Controller

class TasksController {
  constructor(){
    this.$addTaskForm = $('#add_task');
    this.$taskDescriptionInput = $('#task_description');
    this.$selectListMenu = $('#select_list');
    this.$taskPriorityInput = $('#task_priority');
    this.$wrapper = $('#wrapper');
  }

  init(){
    this.$addTaskForm.submit(function(event){
      var taskDescription = this.$taskDescriptionInput.val();
      var taskPriority = this.$taskPriorityInput.val();
      var listId = this.$selectListMenu.val();
      var list = List.all[listId]
      var task = new Task(taskDescription, taskPriority, list)
      task.build();
      this.$addTaskForm.one().show();
    }.bind(this))

    var that = this;

    this.$wrapper.on('click', '.destroy-task', function(){
      var listId = that.$selectListMenu.val();
      var taskId = $(this).parent().data('id')
      this.parentElement.remove();
      var list = List.all[listId]
      delete list.tasks[taskId]
      list.tasks.splice(taskId, 1, null)
    })
  }
}
