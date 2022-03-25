<template>
  <template> {{ getStudentData($route.params.id) }} </template>

  <div class="card text-center">
    <div class="card-header"></div>
    <div class="card-body">
      <h3 class="card-title">Student Id : {{ studentId }}</h3>
      <p class="card-text">
        <h3>Student name: {{ studentName }}</h3>
        <h4>Student age: {{ studentAge }}</h4>
        <h4>Student city: {{ studentCity }}</h4>
      </p>
      <a href="/" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="card-footer text-muted"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      studentId: '',
      studentName: '',
      studentAge: '',
      studentCity: '',
    };
  },
  methods: {
    async getStudentData(id) {
      const response = await fetch(`http://localhost:5000/students/${id}`);
      const studentObj = await response.json();

      this.studentId = studentObj.id;
      this.studentName = studentObj.name;
      this.studentAge = studentObj.age;
      this.studentCity = studentObj.city;
    },
  },
};
</script>
