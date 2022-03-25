<template>
  <NavbarComponent />
  <ButtonComponent @add-student="addStudent" :studentInfo="studentInfo" />
  <TableComponent
    @remove-student="removeStudent"
    :stData="stData"
    :studentInfo="studentInfo"
  />
  <FooterComponent />
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';
import TableComponent from './components/TableComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import ButtonComponent from './components/ButtonComponent.vue';

export default {
  name: 'App',
  data() {
    return {
      stData: [],
      studentInfo: {
        name: '',
        age: '',
        city: '',
      },
    };
  },
  components: {
    NavbarComponent,
    TableComponent,
    FooterComponent,
    ButtonComponent,
  },
  async created() {
    const response = await fetch('http://localhost:5000/students');
    this.stData = await response.json();
  },
  methods: {
    clearStudentFields() {
      this.studentInfo.name = '';
      this.studentInfo.age = '';
      this.studentInfo.city = '';
    },
    async addStudent(student) {
      // this.clearStudentFields();
      await fetch('http://localhost:5000/students', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(student),
      });
      console.log('before:', this.stData, student);
      this.stData.push(student);
      console.log('after:', this.stData, student);
      this.clearStudentFields();
    },
    async removeStudent(id) {
      await fetch(`http://localhost:5000/students/${id}`, {
        method: 'DELETE',
      });
      let removed = this.stData.indexOf(id);
      this.stData.splice(removed, 1);
    },
  },
  emits: ['add-student', 'remove-student'],
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
