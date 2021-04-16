<template>
  <v-app>
    <v-main>
      <Header/>
      <Sidenav/>
         <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';
import Sidenav from '@/components/Sidenav.vue';

export default {
  name: 'App',

  components: {
    Header,
    Sidenav,
  },
};
</script>
