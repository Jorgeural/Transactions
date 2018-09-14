<template>
  <div class="select-style">
    <select :title="title" :disabled="disabled" name="selected" v-model="selectedOption">
      <option value=""><slot name="all-value-label"></slot></option>
      <option v-for="(item, index) in options" :key="index" :value="item">{{ item | capitalize }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      required: false
    },
    options: {
      required: true,
      type: Array
    },
    disabled: {
      type: Boolean
    },
    title: {
      type: String
    }
  },
  data () {
    return {
      selectedOption: this.value
    }
  },
  watch: {
    selectedOption () {
      this.$emit('input', this.selectedOption)
    }
  }
}
</script>

<style>
.select-style {
  display: inline-block;
  min-width: 150px;
  margin-left: 10px;
}

.select-style select {
  cursor: pointer;
  width: 100%;
  background-color: #fff;
  color: #213d8f;
  font-size: 14px;
  padding: .5em;
  padding-right: 2.5em;
  border: 0;
  margin: 0;
  border-radius: 3px;
  text-align: center;
  font-weight: 600;
  outline: none;
}

.select-style select[disabled] {
  color: rgba(0,0,0,.3);
}

option {
  cursor: pointer;
  font-weight: 400;
}

option:checked {
   font-weight: 600;
}

</style>
