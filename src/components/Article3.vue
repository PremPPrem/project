<template>
   <div class="container">
    <h1 class="head">Article 3</h1>
   </div>
   <div class="article3">
    <slot></slot>
    <button @click="previous" class="btn-3">previous</button>
    <button @click="one" class="btn-3">1</button>
    <button @click="two" class="btn-3">2</button>
    <button @click="three" class="btn-3">3</button>
    <button @click="next" class="btn-3">Next</button>
  </div>
</template>

<script>
export default {
data() {
    return {};
  },
  methods: {
    previous() {
      this.$emit("previous");
    },
    one() {
      this.$emit("one");
    },
    two() {
      this.$emit("two");
    },
    three() {
      this.$emit("three");
    },
    next() {
      this.$emit("next");
    },
  },

}
</script>

<style scoped>
@import '@/assets/_container.scss';
@import '@/assets/_article3.scss';
@import '@/assets/_head.scss';
</style>
