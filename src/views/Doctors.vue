<template>
  <div class="container">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h1>Врачи</h1>
      </div>
      <div class="panel-body">
        <table class="table-latitude">
          <thead>
          <tr class="thread">
            <th class="border px-4 py-2 fio" >ФИО</th>
            <th >Отделение</th>
            <th >Заведующий</th>
            <th >Действие</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="doctor in doctors" :key="doctor.id">
            <td >{{ doctor.name }}</td>
            <td >{{ doctor.department }}</td>
            <td >{{ doctor.isHead ? "Да" : "Нет" }}</td>
            <td >
              <button @click="editDoctor(doctor)">Редактировать</button>
              <button @click="doctorStore.deleteDoctor(doctor.id)">Удалить</button>
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
import { useDoctorsStore } from '@/stores/doctorsStore'
const doctorStore = useDoctorsStore()
// const doctors = reactive([
//   { id: 1, name: "Иванов Иван Иванович", department: "Кардиологическое", isHead: true },
//   { id: 2, name: "Петров Петр Петрович", department: "Хирургическое", isHead: false },
// ]);

const editDoctor = (doctor) => {
  console.log("Редактировать врача", doctor);
};

const doctors = computed(() => {
  return doctorStore.doctors
})

// const deleteDoctor = (id) => {
//   const index = doctors.findIndex((doctor) => doctor.id === id);
//   if (index !== -1) {
//     doctors.splice(index, 1);
//   }
// };
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

