<template>
  <StaffTable
    title="Врачи"
    :data="doctors"
    :isDoctor="true"
    :openModal="openModal"
    :deleteItem="deleteDoctor">
  </StaffTable>
  <FormModal
    :isVisible="toggleModal"
    :staffToEdit="doctorToEdit"
    role="doctor"
    @close="closeModal"
    @edit-staff="editDoctorData"
    @add-staff="addNewDoctor">
  </FormModal>
</template>

<script setup>
import {computed, ref} from 'vue';
import {useDoctorsStore} from '@/stores/doctorsStore'
import FormModal from "@/components/FormModal/FormModal.vue";
import StaffTable from "@/components/StaffTable.vue";

const doctorStore = useDoctorsStore()

const toggleModal = ref(false)
const doctorToEdit = ref(null)
const openModal = (doctor) => {
  if (doctor) {
    doctorToEdit.value = doctor
  }
  toggleModal.value = true
};

const doctors = computed(() => {
  return doctorStore.doctors
})

const editDoctorData = (newData) => {
  doctorStore.editDoctor(newData)
}
const deleteDoctor = (id) => {
  doctorStore.deleteDoctor(id);
};

const addNewDoctor = (newData) => {
  doctorStore.addDoctor(newData)
}

const closeModal = () => {
  toggleModal.value = false
  doctorToEdit.value = null
}

</script>

