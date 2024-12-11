<template>
  <div v-if="isVisible" class="modal-overlay">
    <div class="modal-container">
      <h2 class="modal-title">{{ pageTitle }}</h2>
      <form @submit.prevent="submitForm">
        <div class="input-group">
          <label for="name" class="input-label">ФИО</label>
          <input
            v-model="staffData.name"
            type="text"
            id="name"
            class="input-field"
            placeholder="Введите ФИО"
            required
          />
        </div>

        <div class="input-group">
          <label for="department" class="input-label">Отделение</label>
          <select
            v-model="staffData.department"
            id="department"
            class="input-field"
            required

          >
            <option value="Кардиологическое">Кардиологическое</option>
            <option value="Хирургическое">Хирургическое</option>
          </select>
        </div>

        <div v-if="role === 'doctor'" class="input-group">
          <label class="checkbox-label">
            <input
              type="checkbox"
              v-model="staffData.isHead"
              class="checkbox-input"
            />
            Заведующий отделением
          </label>
        </div>

        <div class="modal-actions">
          <button
            type="button"
            @click="closeModal"
            class="cancel-btn"
          >
            Отмена
          </button>
          <button
            type="submit"
            class="submit-btn"
          >
            {{ isEditing ? 'Сохранить изменения' : 'Добавить' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
  isVisible: Boolean,
  staffToEdit: Object,
  role: String,
});

const emit = defineEmits(['close', 'edit-staff', 'add-staff']);
const staffData = ref({
  id: null,
  name: '',
  department: '',
  isHead: false
});

const isEditing = computed(() => props.staffToEdit !== null);

const pageTitle = computed(() => {
  if (props.role === 'doctor') {
    return isEditing.value ? 'Редактировать врача' : 'Добавить врача';
  } else {
    return isEditing.value ? 'Редактировать информацию о медсестре' : 'Добавить медсестру';
  }
});

watch(() => props.staffToEdit, (newStaff) => {
  if (newStaff) {
    staffData.value = newStaff;
  } else {
    staffData.value = {
      id: null,
      name: '',
      department: '',
      isHead: false,
    };
  }
});
const closeModal = () => {
  emit('close');
};

const submitForm = () => {
  if (isEditing.value) {
    emit('edit-staff', staffData.value);
  } else {
    emit('add-staff', staffData.value);
  }
  closeModal();
};
</script>

<style scoped lang="scss">
.modal-overlay {
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  width: 24rem;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.3s ease-out;
}

.modal-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}

.input-group {
  margin-bottom: 1rem;
}

.input-field {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #4f8ef7;
  }
}

.input-label {
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #333;
}

.checkbox-label {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #333;
}

.checkbox-input {
  margin-right: 0.5rem;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.cancel-btn {
  background-color: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.3s;
  border: none;

  &:hover {
    background-color: #e0e0e0;
  }
}

.submit-btn {
  background-color: #4f8ef7;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3b73b8;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>

