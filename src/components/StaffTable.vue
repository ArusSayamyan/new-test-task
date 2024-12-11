<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h1>{{ title }}</h1>
      <button class="primary_button" @click="openModal(null)">Добавить</button>
    </div>
    <div class="panel-body">
      <table class="table-latitude">
        <thead>
        <tr class="thread">
          <th class="border px-4 py-2 fio">ФИО</th>
          <th>Отделение</th>
          <th v-if="isDoctor">Заведующий</th>
          <th>Действие</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in data" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.department }}</td>
          <td v-if="isDoctor">{{ item.isHead ? "Да" : "Нет" }}</td>
          <td>
            <div>
              <button class="primary_button" @click="openModal(item)">Редактировать</button>
            </div>
            <div>
              <button class="primary_button" @click="deleteItem(item.id)">Удалить</button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script  setup>
import { defineProps } from 'vue';
defineProps({
  title: String,
  data: Array,
  isDoctor: Boolean,
  openModal: Function,
  deleteItem: Function,
});
</script>
<style lang="scss" scoped>
$background: #efefef;
$lfs-blue: #006ac6;
$lfs-yellow: #fab700;
$lfs-grey: #75787b;

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


