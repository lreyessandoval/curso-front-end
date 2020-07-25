<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div class="row">
      <div class="col-4">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Ingreso</h4>
          </div>
          <div class="card-body">
            <form>
              <div class="form-group text-left">
                <label for="new-task">Tarea:</label>
                <input type="text" class="form-control" v-model="newTask" id="new-task" />
              </div>
            </form>
          </div>
          <div class="card-footer text-right">
            <button class="btn btn-primary mr-3" v-on:click="addNewTask">Agregar</button>
            <button class="btn btn-secondary" v-on:click="clearTask">Limpiar</button>
          </div>
        </div>
      </div>
      <div class="col-8">
        <MyTable :tasks="tasks" @list-delete="deleteTask($event)"/>
      </div>
    </div>
  </div>
</template>

<script>
import MyTable from './MyTable';

export default {
  name: "MyForm",
  components: { MyTable },
  props: {
    title: String,
  },
  data() {
    return {
      newTask: "",
      tasks: [],
      taskId: 1,
    };
  },
  methods: {
    addNewTask: function() {
      this.tasks.push({
        id: this.taskId++,
        title: this.newTask
      });
      this.newTask = "";
      MyTable.tasks = this.tasks;
    },
    clearTask: function() {
      this.tasks = [];
      this.taskId = 1;
    },
    deleteTask: function(id) {
      var index = this.tasks.findIndex(item=> item.id ==id);
      if (index>-1) this.tasks.splice(index, 1);
    }
  }
};
</script>