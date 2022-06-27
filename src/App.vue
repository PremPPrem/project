<template>
 <header>  
        <nav id="navbar">
            <div class="container">
                <h1 class="logo"><router-link  to="/">Navbar</router-link></h1>
                <ul>
                    <li><router-link  to="/">Home</router-link></li>
                     <li><router-link  to="/Slider">Slider</router-link></li>
                     <li><router-link  to="/Form">Form</router-link></li>
                </ul>
            </div>
        </nav>
    
      </header>
  <router-view/>
</template>

<style lang="scss">
@import '@/assets/variables';
@import '@/assets/container';
* {
  margin: 0;
  padding:0;
  box-sizing: border-box;
}
body{
	
}

#navbar {
  background: $black;
  color: $white;
  overflow: auto;
}
#navbar a{
  text-decoration: none;
  cursor: pointer;
  color: $white;
}
#navbar h1 {
    float: left;
    padding-top: 15px ;
}
#navbar ul {
    list-style: none;
    float: right;
}
#navbar ul li {
    float: left;
}
#navbar ul li a {
    display: block;
    padding: 20px;
    text-align: center;
}

#navbar ul li a:hover,#navbar ul  li a.current{
    background: $gray;
    color: $orange;
    
}
@media (max-width:720px) {
  #navbar .logo {
  float: none;
  text-align: center;
}

#navbar ul, #navbar ul li {
  float: none;
}

#navbar ul li a {
  padding: 5px;
  border-bottom: $gray dotted 1px;
}

}
</style>
