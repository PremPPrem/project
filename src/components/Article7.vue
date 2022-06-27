<template>
  
<div class="container"><h1 class="head">Article 7</h1></div>

  <div class="slide">
    <button @click="back" type="button" class="btnslide left">
      <img src="../assets/back.png" class="icon" />
    </button>
    <div
      class="container-slide"
      :style="{
        transform: `translateX(${index}px)`,
        transition: `$transition`
      }"
    >
      <img src="@/assets/s1.jpg" class="imgslide" />
      <img src="@/assets/s2.jpg" class="imgslide" />
      <img src="@/assets/s3.jpg" class="imgslide" />
    </div>
    <button @click="next" type="button" class="btnslide right">
      <img src="../assets/next.png" class="icon" />
    </button>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      index: 0,
      transition: "transform 0.2s ease",
    };
  },
  methods: {
    next() {
       console.log(this.index);
      if (this.index === -1000) {
        this.transition = "none";
        this.index = 0;
      } else {
        this.Transition = "transform 0.2s ease";
        this.index -= 500;
      }
    },
    back() {
      if (this.index === 0) {
        this.transition = "none";
        this.index = -1000;
      } else {
        this.transition = "transform 0.2s ease";
        this.index += 500;
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/head";
@import "@/assets/container";
.slide {
  width: 500px;
  height: 400px;
  margin: 100px auto 0;
  overflow: hidden;
  position: relative;
}
.container-slide {
  display: flex;
}
.imgslide {
  width: 100%;
  height: auto;
}
.btnslide {
  outline: none;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: block;
  position: absolute;
  z-index: 1000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon {
  width: 15px;
}
.left {
  top: 45%;
  left: 5px;
  transform: translateY(-50%);
  opacity: 0.25;
}
.left:hover {
  background: gray;
  opacity: 1;
}
.right {
  top: 45%;
  right: 5px;
  transform: translateY(-50%);
  opacity: 0.25;
}
.right:hover {
  background: gray;
  opacity: 1;
}
</style>
