<template>
  <div class="data-row">
    <div @click="expand = !expand">
      <slot name="data"></slot>
    </div>
    <transition name="accordion">
        <slot name="details" v-if="expand"></slot>
    </transition>
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
/* ANIMATIONs/TRANSITIONS */
.accordion-enter-active, .accordion-leave-active {
  transition: all 0.25s;
}

.accordion-enter {
  transform: translateY(-25px);
  /* opacity: 0; */
}

.accordion-leave-to {
  transform: translateY(-25px);
  /* opacity: 0; */
}

</style>
