<template>
<div class="footer">
    <h1>Visit today</h1>
<h1>Opening Hours</h1>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<p><i class="fa fa-clock-o"></i>Monday to Friday - 9am to 9pm</p>
<p><i class="fa fa-clock-o"></i>Saturday and Sunday - 8am to 11pm</p>
  <p>Copyright ChaanduJoyC</p>
</div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins:ital,wght@1,600&display=swap");
$background:  #f1f1f1;
$color: #cc2b5e;

.footer {
font-family: 'Poppins', sans-serif;
background: $background;
width:100%;
// height:40%;
padding-top: 30px;
// margin: 0 auto;
text-align: center;
color: $color;
}
</style>
