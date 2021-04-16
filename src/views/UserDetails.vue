<template>
    <div class="users">
     <div v-if="formData.length === 0">
      <h1>No data is available</h1>
    </div>
    <div v-else>
      <h1>Users Details</h1>
    <v-simple-table
    fixed-header
    height="300px"
    class="table"
  >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           <h2>Name</h2>
          </th>
          <th class="text-left">
            <h2>Email</h2>
          </th>
          <th class="text-left">
           <h2>Mobile Number</h2>
          </th>
          <th class="text-left">
           <h2>DOB</h2>
          </th>
        </tr>
      </thead>
      <tbody class="body">
        <tr v-for="(data,index) of formData" :key="index">
          <td>{{ data.name }}</td>
          <td>{{ data.email }}</td>
          <td>{{ data.mobileNumber }}</td>
          <td>{{ data.dateOfBirth }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    </div>
    </div>
</template>

<script>
export default {
  name: 'UserDetails',
  data() {
    return {
      sample: [],
    };
  },
  computed: {
    formData() {
      return this.$store.state.formData;
    },
  },
};
</script>

<style lang="scss" scoped>
h1{
  text-align: center;
   color:  #c6538c;
}
.users{
  padding-top: 200px;
}
.table{
  width: 50%;
   margin-left: 350px;
}
h2{
 color: black;
}
.body{
  color: #c6538c;
}
</style>
