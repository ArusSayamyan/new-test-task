import { defineStore } from 'pinia';

export const useDoctorsStore = defineStore('doctors', {
  state: () => ({
    doctors: [
      { id: 1, name: 'Иванов Иван Иванович', department: 'Кардиологическое', isHead: true },
      { id: 2, name: 'Петров Петр Петрович', department: 'Хирургическое', isHead: false },
    ]
  }),

  actions: {
    addDoctor(newDoctorData) {
      const newDoctor = {
        id: Math.max(...this.doctors.map(d => d.id)) + 1,
        ...newDoctorData
      };
      this.doctors.push(newDoctor);
    },

    editDoctor(editedDoctor) {
      const doctor = this.doctors.find(doc => doc.id === editedDoctor.id);
      if (doctor) {
        doctor.name = editedDoctor.name;
        doctor.department = editedDoctor.department;
        doctor.isHead = editedDoctor.isHead;
      }
    },

    deleteDoctor(id) {
      this.doctors = this.doctors.filter(doctor => doctor.id !== id);
    },
  },
});
