<template>
<div class="home">
  <div class="img">
     <img alt="Vue logo" src="../assets/fruit.jpg" width="1550px" height="700vh">
  </div>
    <div v-if="loading"><h2>Please wait while we load the data.....</h2></div>
    <div v-else>
    <div v-if="users.length === 0">No Data Available</div>
    <div v-else>
    <div>
     <v-simple-table dark class="table">
    <template v-slot:default>
      <thead class="tableheader">
        <tr>
          <th class="text-left">
            ID
          </th>
          <th class="text-left">
            Name
          </th>
            <th class="text-left">
            User Name
          </th>
           <th class="text-left">
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user,index) of users" :key="index">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

    </div>
    </div>
    </div>
  <div class="foot">
    <Footer/>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Footer,
  },
  data() {
    return {
      loading: false,
      users: [],
    };
  },
  mounted() {
    this.getData();
    console.log(this.$store.state.usersData);
    this.users = this.$store.state.usersData;
  },
  methods: {
    async getData() {
      this.loading = true;
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        window.console.log(this.loading);
        this.users = response.data;
        this.$store.state.usersData = response.data;
        window.console.log(response.data);
        this.loading = false;
        window.console.log(this.loading);
      } catch (error) {
        window.console.log(error);
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.img{
  text-align: center;
  padding-top: 50px;
  padding-bottom: 30px;
}
.table{
  width: 60%;
  margin-left: 250px;
}
.foot{
  padding-top: 10px;
}
</style>
