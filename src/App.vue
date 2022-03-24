<template>
  <NavbarComponent />
  <ButtonComponent @add-student="addStudent" :studentInfo="studentInfo" />
  <TableComponent @remove-student="removeStudent" :stData="stData" :studentInfo="studentInfo" />
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
    async addStudent(student) {
      await fetch('http://localhost:5000/students', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(student),
      });
      // this.stData.push(student);

      // this.studentInfo.name = '';
      // this.studentInfo.age = '';
      // this.studentInfo.city = '';
    },
    removeStudent(student) {
      let removed = this.stData.indexOf(student);
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
