<template> 
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
                        <th scope="col"></th>
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
                        <td class="text-center">
                        <button type="button" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Eliminar Tarea">
                        <i class="far fa-trash-alt"  @click="$emit('list-delete', item.id)"></i>
                        </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
            <p v-else>No existen tareas...</p>
          </div>
        </div>
</template>
<script>
export default {
  name: "MyTable",
  props: {
    tasks: Array
  },
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>