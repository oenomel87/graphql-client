<template>
  <div class="container main-container">
    <input class="input" type="text" v-model="departmentName" placeholder="input department">
    <div>
      <ul>
        <li v-for="department in departments" :key="department.deptId">{{ department.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import graphQLClient from '../../util/graphql-client.js';

export default {
  name: 'Main',

  data() {
    return {
      departmentName: '',
      departments: []
    }
  },

  beforeMount() {
    this.fetchDepartments();
  },

  methods: {
    async fetchDepartments() {
      const query = {
        query: `
          query {
            departments {
              deptId
              name
              deptPathId
              parentDeptId
              fromDate
              toDate
              childDepartments {
                deptId
                name
                deptPathId
                parentDeptId
                fromDate
                toDate
              }
            }
          }
        `,
      }

      const res = await graphQLClient(query);
      if(res.data.error && res.data.error.length > 0) {
        console.error('Cannot fetch departments');
        this.departments = [];
        return;
      }
      this.departments = res.data.data.departments;
      console.dir(res);
    }
  }
}
</script>

<style>
.main-container {
  width: 450px;
}
</style>