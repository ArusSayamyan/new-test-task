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

    editDoctor(id, name, department) {
      const doctor = this.doctors.find(d => d.id === id);
      if (doctor) {
        doctor.name = name;
        doctor.department = department;
      }
    },

    deleteDoctor(id) {
      console.log('id', id)
      this.doctors = this.doctors.filter(doctor => doctor.id !== id);
      console.log('this.doctors', this.doctors)
    },
  },
});
