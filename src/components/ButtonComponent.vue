<template>
  <button
    type="button"
    class="btn btn-info col-2 my-2"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Add Students
  </button>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addStudent">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                aria-describedby="emailHelp"
                v-model="studentInfo.name"
                required
              />
            </div>
            <div class="mb-3">
              <label for="age" class="form-label">Age</label>
              <input
                type="text"
                class="form-control"
                id="age"
                v-model.number="studentInfo.age"
                required
              />
            </div>
            <div class="mb-3">
              <label for="city" class="form-label">City</label>
              <input
                type="text"
                class="form-control"
                id="city"
                v-model="studentInfo.city"
                required
              />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
                Add Student
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    addStudent() {
      this.$emit('add-student', this.studentInfo);
    },
  },
  emits: ['add-student'],
  props: {
    studentInfo: {
      type: Object,
    },
  },
};
</script>
<style scoped></style>
