<template>
  <div class="home"></div>
 <div class="article1">
  <Article1 />
 </div>
 <div class="article2">
  <Article2 />
 </div>
 <div class="article3">
  <Article3 />
 </div>
 <div class="article6">
  <Article6 />
 </div>
</template>

<script>
// @ is an alias to /src

import Article1 from '../components/Article1.vue'
import Article2 from '../components/Article2.vue'
import Article3 from '../components/Article3.vue'
import Article6 from '../components/Article6.vue'
export default {
  name: 'Home',
  components: {
    Article1,
    Article2,
    Article3,
    Article6
  }
}
</script>

