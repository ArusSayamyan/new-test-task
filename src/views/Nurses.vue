<template>
  <div class="container">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h1>Медсестры</h1>
      </div>
      <div class="panel-body">
        <table class="table-latitude">
          <thead>
          <tr class="thread">
            <th class="border px-4 py-2 fio" >ФИО</th>
            <th >Отделение</th>
            <th >Действие</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="nurse in nurses" :key="nurse.id">
            <td>{{ nurse.name }}</td>
            <td>{{ nurse.department }}</td>
            <td>
              <button @click="editNurse(nurse)">Редактировать</button>
              <button @click="nursesStore.deleteNurse(nurse.id)">Удалить</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, reactive} from 'vue';
import { useNursesStore } from '@/stores/nursesStore'
const nursesStore = useNursesStore()

const editNurse = (nurse) => {
  console.log("Редактировать врача", nurse);
};

const nurses = computed(() => {
  return nursesStore.nurses
})
</script>
<style lang="scss">
$background: #efefef;
$lfs-blue: #006ac6;
$lfs-yellow: #fab700;
$lfs-grey: #75787b;
body {
  background-color: $background;
}

.table-latitude {
  width: 100%;
  thead {
    border-top: 2px solid $lfs-yellow;
    border-bottom: 2px solid $lfs-yellow;
    th {
      text-transform: uppercase;
      text-align: center;
      padding: 10px;
      color: $lfs-blue;
      border: 1px solid $lfs-grey;
    }
  }
  tbody {
    tr {
      border-bottom: 1px solid $lfs-grey;
      color: $lfs-grey;
      td {
        padding: 10px;
        border: 1px solid $lfs-grey;
      }
      th {
        padding-left: 10px;
        border: 1px solid red;
      }
    }
  }
}

</style>

