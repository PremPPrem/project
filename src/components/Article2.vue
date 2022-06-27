<template>
<div class="container">
    <h1 class="head">Article 2</h1>
    <div id="article2">
        <button class="btnshow" @click="showModal = true">
         Show Modal
        </button>
        <transition name="popup" appear>
         <div class="modalshow" v-if="(showModal = false)"></div>
        </transition>
        <transition name="slide" appear >
         <div class="modal" v-if="showModal">
        <button class="btnx" @click="showModal = false">
           &times;
          </button>
          <h1 class="read">Lorem, ipsum dolor.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, consectetur praesentium! Ex necessitatibus commodi ipsum porro iusto maiores beatae quasi quibusdam ea. Vel doloribus fugiat libero cumque, excepturi similique accusamus.</p>
          <button class="btnclose" @click="showModal = false">
           Close
          </button>
          <button class="btnsubmit"  @click="clickme('Thank you♥♥♥')">
           Submit
          </button>
         </div>
        </transition>
       </div>
</div>
</template>

<script>
export default {
 el: '#app',
 data () {
  return {
   showModal: true
  }
 },
 methods: {
    clickme(message){
        alert(message)
    }

 }
}

</script>

<style lang="scss" scoped>
 @import '@/assets/article2';
 @import '@/assets/container';
 @import '@/assets/head';
</style>
