import { defineStore } from 'pinia';

export const useNursesStore = defineStore('nurses', {
  state: () => ({
    nurses: [
      { id: 1, name: 'Сидорова Екатерина Петровна', department: 'Кардиологическое' },
      { id: 2, name: 'Андреева Анна Александровна', department: 'Хирургическое' },
    ]
  }),

  actions: {
    addNurse(newNurseData) {
      const newNurse = {
        id: Math.max(...this.nurses.map(d => d.id)) + 1,
        ...newNurseData
      };
      this.nurses.push(newNurse);
    },

    editNurse(id, name, department) {
      const nurses = this.nurses.find(d => d.id === id);
      if (nurses) {
        nurses.name = name;
        nurses.department = department;
      }
    },

    deleteNurse(id) {
      console.log('id', id)
      this.nurses = this.nurses.filter(nurse => nurse.id !== id);
      console.log('this.nurses', this.nurses)
    },
  },
});
