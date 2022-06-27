<template>
<div class="container">
    <h1 class="head">Article 6</h1>
</div>
 <div id="home-info">
    <div class="info-img"></div>
     
    <div class="info-content">
      <h2>Lorem ipsum dolor sit amet.</h2>
      <img class="caard" src="../assets/s2.jpg" alt="">
      <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          aliquam dolor alias 
      </p>
      <br>
      <button class="butn"><router-link  to="/Slider">See more</router-link></button>
    </div>
  </div>
  
</template>

<script>

</script>

<style>
.caard {
    width: 286px;
  height: 180px;
}
#home-info {
    margin-left: 41%;
    text-align: center;
    width: 290px;
    height: 180px;
}
.info-content {
    border-style: solid;
}
.butn {
    cursor: pointer;
    color: #212529;
    background-color: #ffc107;
    border-color: #ffc107;
    padding: 6px 12px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 0.25rem;
    margin-left: 0.25rem;
    margin: 3px;

}
.butn:hover {
     color: #212529;
    background-color: #e0a800;
    border-color: #d39e00;
}
a {
    text-decoration: none;
}
</style>
