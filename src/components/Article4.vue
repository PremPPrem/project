<template>
  <div class="container">
    <h1 class="head">Article 4</h1>
  </div>
  <div id="con">
    <div class="form-warp">
      <h1>Form</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      <form action="">
        <div class="form-group">
          <label for="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            required
          />
        </div>
        <div class="form-group">
          <label for="lastname">Last Name</label>
          <input type="text" name="lastname" placeholder="Last Name" required />
        </div>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" name="username" placeholder="Username" required />
        </div>
        <div class="form-group">
          <label for="city">City</label>
          <input type="text" name="city" placeholder="City" required />
        </div>
        <div class="form-group">
          <label for="state">State</label>
          <input type="text" name="state" placeholder="State" required />
        </div>
        <div class="form-group">
          <label for="zip">Zip</label>
          <input type="text" name="zip" placeholder="Zip" required />
        </div>
        <button type="submit" class="submit">Submit Form</button>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          quas
        </p>
      </form>
    </div>
    <footer>
      <p>Lorem ipsum dolor sit amet</p>
    </footer>
  </div>
</template>

<script></script>

<style>
@import "@/assets/_container.scss";
@import "@/assets/_head.scss";
@import "@/assets/_article4.scss";
</style>
