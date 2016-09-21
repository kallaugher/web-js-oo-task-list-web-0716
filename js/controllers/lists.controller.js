'use strict';
// Lists Controller
class ListsController {
  constructor() {
    this.$addListForm = $('#add_list')
    this.$listTitleInput = $('#list_title')
    this.$selectListMenu = $('#select_list')
    this.$addTaskForm = $('#add_task')
    this.$wrapper = $('#wrapper')
  }
  init(){
    this.$addTaskForm.hide();
    this.$addListForm.submit(function(event){
      this.parentElement.children[2].style="display: block;"
      var listTitle = $('#list_title').val()
      var list = new List(listTitle)
      list.build();
    })
    this.$wrapper.on('click', '.destroy-list', function(){
      var id = this.parentElement.parentElement.children[1].id.split("-")[1]
      this.parentElement.parentElement.remove();
      delete List.all[id];
      List.all.splice(id, 1);
    })
  }

}
