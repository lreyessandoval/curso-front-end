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
        <div class="card h-100">
          <div class="card-header">
            <h4 class="card-title">Tareas</h4>
          </div>
          <div class="card-body">
            <div v-if="tasks.length">

                    <table class="table table-striped table-bordered table-hover table-responsive-md">
                        <thead>
                            <tr class="text-center">
                                <th scope="col">
                                  Id
                                </th>
                                <th scope="col">Tarea</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tasks" :key="item.id">
                                <th scope="row">
                                    {{ item.id }}
                                </th>
                                <td class="text-left">
                                  {{item.title}}
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
            <p v-else>No existen tareas...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyForm",
  props: {
    title: String
  },
  data() {
    return {
      newTask: "",
      tasks: [],
      taskId: 1
    };
  },
  methods: {
    addNewTask: function() {
      this.tasks.push({
        id: this.taskId++,
        title: this.newTask
      });
      this.newTask = "";
    },
    clearTask: function() {
      this.tasks = [];
      this.taskId = 1;
    }
  }
};
</script>