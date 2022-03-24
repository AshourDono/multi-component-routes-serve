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
          </tr>
        </thead>
        <tbody>
          <tr v-for="datum in stData" :key="datum.id">
            <th scope="row">{{ datum.id }}</th>
            <td>{{ datum.name }}</td>
            <td>{{ datum.age }}</td>
            <td>{{ datum.city }}</td>
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
  methods: {},
  props: {
    stData: {
      type: Array,
    },
    studentInfo: {
      type: Object,
    },
  },
};
</script>
<style scoped></style>
