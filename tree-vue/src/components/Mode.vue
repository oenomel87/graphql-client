<template>
  <div class="buttons has-addons is-right">
    <button class="button is-small" :class="viewButtonClass" data-mode="view" @click="changeMode">View</button>
    <button class="button is-small" :class="editButtonClass" data-mode="edit" @click="changeMode">Edit</button>
  </div>
</template>

<script>
export default {
  name: 'Mode',

  props: {
    mode: {
      type: String,
      default: 'view'
    }
  },

  computed: {
    viewButtonClass() {
      const isActive = this.mode === 'view';
      return {
        'is-selected': isActive,
        'is-info': isActive
      }
    },

    editButtonClass() {
      const isActive = this.mode === 'edit';
      return {
        'is-selected': isActive,
        'is-info': isActive
      }
    }
  },

  methods: {
    changeMode(evt) {
      const target = evt.target;
      const targetMode = target.dataset?.mode;
      if(targetMode != null && target.dataset.mode === this.mode) {
        return;
      }

      this.$emit('change-mode', targetMode == null ? 'view' : targetMode);
    }
  }
}
</script>

<style>

</style>