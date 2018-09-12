<template>
  <div>
    <div @click="expand = !expand">
      <slot name="data"></slot>
    </div>
    <slot name="details" v-if="expand"></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      expand: false
    }
  }
}
</script>

<style>

</style>
