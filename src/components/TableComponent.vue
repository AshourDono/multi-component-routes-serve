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
          <tr v-for="datum in stData" :key="datum.id">
            <th scope="row">{{ datum.id }}</th>
            <td>{{ datum.name }}</td>
            <td>{{ datum.age }}</td>
            <td>{{ datum.city }}</td>
            <td>
              <i class="fa-solid fa-trash-can fa-xl" @click="removeStudent"></i> |
              <i class="fa-solid fa-pen-to-square fa-xl" @click="editStudent"></i>
            </td>
          </tr>
        </tbody>
      </table>
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
    editStudent(student) {},
  },
  props: {
    stData: {
      type: Array,
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
