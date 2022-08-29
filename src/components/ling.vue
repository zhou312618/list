<template>
  <div>
    <input type="text" @input="bian" :value="value" />
  </div>
</template>
<script>
export default {
  props: ['value'],
  name: 'ling',
  data() {
    return {}
  },
  methods: {
    bian(e) {
      console.log('1')
      this.$emit('input', e.target.value)
    },
  },
}
</script>