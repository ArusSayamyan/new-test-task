<template>
  <StaffTable
    title="Медсестры"
    :data="nurses"
    :isDoctor="false"
    :openModal="openModal"
    :deleteItem="deleteNurse"
  />
  <FormModal
    :isVisible="toggleModal"
    :staffToEdit="nurseToEdit"
    role="nurse"
    @close="closeModal"
    @edit-staff="editNurse"
    @add-staff="addNurse"
  />
</template>

<script setup>
import {computed, ref} from 'vue';
import { useNursesStore } from '@/stores/nursesStore'
import FormModal from "@/components/FormModal/FormModal.vue";
import StaffTable from "@/components/StaffTable.vue";
const nursesStore = useNursesStore()
const toggleModal = ref(false)
const nurseToEdit = ref(null)

const openModal = (nurse) => {
  if (nurse) {
    nurseToEdit.value = nurse
  }
  toggleModal.value = true
};
const closeModal = () => {
  toggleModal.value = false
  nurseToEdit.value = null
}

const editNurse = (newData) => {
  nursesStore.editNurse(newData)
}

const addNurse = (newData) => {
  nursesStore.addNurse(newData)
}

const deleteNurse = (id) => {
  nursesStore.deleteNurse(id);
};

const nurses = computed(() => {
  return nursesStore.nurses
})
</script>

