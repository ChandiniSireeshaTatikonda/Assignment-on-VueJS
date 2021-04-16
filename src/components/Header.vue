<template>
    <div class="header">
    <h1 class="headertext">Changing Habits</h1>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <form class="search" action="#" style="margin:auto;max-width:300px">
      <input type="text" placeholder="Search.." name="search2">
      <button type="submit"><i class="fa fa-search"></i></button>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="icon">
    <a href="https://www.facebook.com"><i class="fa fa-facebook"></i></a>
    <a href="https://www.instagram.com"><i class="fa fa-instagram"></i></a>
    <a href="https://twitter.com/?lang=en"><i class="fa fa-twitter"></i></a>
    <a href="https://www.youtube.com"><i class="fa fa-youtube-play"></i></a>
    </div>
    </form>
    </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins:ital,wght@1,600&display=swap");
$base-color: #c6538c;
$border-dark: rgba($base-color, 0.88);
$box-shadow: 1px 1px 2px $border-dark;
$background: linear-gradient(#cc2b5e,#753a88);
// $background: linear-gradient(#000428,#004e92);
$color:  #f1f1f1;

.header{
    background: $background;
    border-radius: 2px;
    box-shadow: $box-shadow;
    height: 80px;
    width:1550px;
    position: absolute;
}
.headertext{
    font-family: 'Poppins', sans-serif;
    color:$color;
    padding-top: 15px;
    margin-left: 10px;
}

form.search input[type=text] {
  padding: 6px;
 top:19px;
  font-size: 17px;
  float: left;
   position: absolute;
    border-radius: 3px;
  background: $color;
}

form.search button {
  float: left;
  margin-left: 211px;
  position: absolute;
 top:19px;
  padding: 6px;
 background: $background;
 color:$color;
  font-size: 17px;
  cursor: pointer;
}

form.search button:hover {
  background: $background;
}
.icon{
     position: absolute;
    float: left;
    top: 19px;
    right:40px;
    border-radius: 0.5px;
}
.icon .fa{
    right:10px;
  height: 35px;
  width: 35px;
    font-size: 17px;
  line-height: 35px;
   border-radius: 5px;
   margin-right: 5px;
  transition: 0.5s;
  text-align: center;
  cursor: pointer;
   background: $background;
    color:$color;
}
</style>
