<template>
  <div class="sideNav">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/dashboard">Dashboard</router-link>
      </li>
      <li>
        <router-link to="/register">Register</router-link>
      </li>
      <li>
        <router-link to="/userdetails">User Details</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidenav',
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins:ital,wght@1,600&display=swap");
$color:  #f1f1f1;
$background: linear-gradient(#cc2b5e,#753a88);

.sideNav{
position: fixed;
top: 70px;
right:0;
text-align: center;
 }
 .sideNav ul{
display: block;
list-style: none;
 }
.sideNav ul li{
background: $background;
border-radius: 3px;
padding: 15px;
margin:20px;
}
.sideNav ul li a{
text-decoration: none;
color:$color;
font-family: 'Poppins', sans-serif;
 }
</style>
