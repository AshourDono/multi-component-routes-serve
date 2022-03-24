<template>
  <div class="row justify-content-center">
    <div class="col-4">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dolore voluptatem sed
      aspernatur magnam ad earum perspiciatis. Ut doloribus nulla consequatur delectus
      exercitationem quos est obcaecati nisi illum eum autem libero, et odit dolores non, cupiditate
      animi blanditiis ratione debitis praesentium voluptates voluptatum
    </div>

    <div class="col-8">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">City</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in stData || []" :key="student.id">
            <th scope="row">{{ student.id }}</th>
            <td>{{ student.name }}</td>
            <td>{{ student.age }}</td>
            <td>{{ student.city }}</td>
            <td>
              <i class="fa-solid fa-trash-can fa-xl" @click="removeStudent"></i> |
              <i
                class="fa-solid fa-pen-to-square fa-xl"
                data-bs-toggle="modal"
                data-bs-target="#editModal"
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        class="modal fade"
        id="editModal"
        tabindex="-1"
        aria-labelledby="editModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editModalLabel">Update student</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="editStudent">
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
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
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" class="btn btn-warning">Edit Student</button>
                </div>
              </form>
            </div>
          </div>
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
    removeStudent(student) {
      this.$emit('remove-student', student);
    },
    editStudent(student) {
      console.log(student);
    },
  },
  props: {
    stData: {
      type: Array,
    },
    studentInfo: {
      type: Object,
    },
  },
  emits: ['remove-student'],
};
</script>
<style scoped>
.fa-trash-can {
  color: red;
}
.fa-pen-to-square {
  color: green;
}
.fa-solid {
  cursor: pointer;
}
</style>
