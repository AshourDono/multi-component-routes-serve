<template>
  <NavbarComponent />
  <ButtonComponent @add-student="addStudent" :stData="stData" :studentInfo="studentInfo" />
  <TableComponent :stData="stData" :studentInfo="studentInfo" />
  <FooterComponent />
</template>

<script>
import { studentData } from './studentData';
import NavbarComponent from './components/NavbarComponent.vue';
import TableComponent from './components/TableComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import ButtonComponent from './components/ButtonComponent.vue';

export default {
  name: 'App',
  data() {
    return {
      stData: studentData,
      studentInfo: {
        id: studentData.length + 1,
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
  methods: {
    addStudent() {
      this.stData.push({
        id: this.stData.length + 1,
        name: this.studentInfo.name,
        age: this.studentInfo.age,
        city: this.studentInfo.city,
      });

      this.studentInfo.name = '';
      this.studentInfo.age = '';
      this.studentInfo.city = '';
    },
  },
  emits: ['add-student'],
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
