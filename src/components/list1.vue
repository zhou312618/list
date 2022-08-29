<template>
  <div class="list1">
    <div class="li">dianji</div>
    <div class="tan"></div>
    <!-- <list @cuan="bushi" /> -->
    <list v-model="text" />
    {{ text }}
  </div>
</template>
<script>
import list from './ling.vue'

export default {
  name: 'list1',
  data() {
    return {
      text: 'text123',
    }
  },
  components: { list },
  methods: {},
}
</script>
<style>
.li {
  background: pink;
}
</style>