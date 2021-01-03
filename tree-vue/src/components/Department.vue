<template>
  <li class="department-node">
      <div class="department">
        <p class="dept-name">{{ departmentName }}</p>
        <button v-show="isEditMode" class="button is-small is-info is-outlined add-dept">부서추가</button>
      </div>
      <ul>
        <Department v-for="department in childDepartments" :key="department.deptId" :dpeth="childDepth" />
      </ul>
  </li>
</template>

<script>
export default {
  name: 'Department',

  props: {
    department:{
      type: Object,
      default: null
    },

    depth: {
      type: String,
      default: '1'
    },

    mode: {
      type: String,
      default: 'view'
    }
  },

  computed: {
    departmentName() {
      return this.department?.name;
    },

    childDepartments() {
      return this.department?.childDepartments
    },

    childDepth() {
      return Number(this.depth) + 1;
    },

    isEditMode() {
      return this.mode === 'edit';
    }
  }
}
</script>

<style scoped>
.department-node {
  padding: 10px;
}

.department {
  display: flex;
  justify-content: space-between;
}
</style>