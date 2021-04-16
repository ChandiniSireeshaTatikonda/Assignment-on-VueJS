<template>
<div class="form">
  <h1>Register Here....</h1>
  <v-form ref="form" class="mx-auto" v-model="valid" >
  <v-text-field v-model="name" :counter="10"
  :rules="nameRules" label="Name" required></v-text-field>
  <v-text-field v-model="email" :rules="emailRules"
   label="E-mail" required></v-text-field>
  <v-text-field v-model="mobileNumber" :counter="10"
   :rules="mobileNumberRules" label="PhoneNumber" required></v-text-field>
  <v-text-field v-model="dateOfBirth" :rules="dateRules" type="date" label="Date">
  </v-text-field>
  <router-link to="/userDetails"  style="text-decoration: none">
  <v-btn :disabled="!valid" @click="submit" class="mr-4" color="success">
  Register</v-btn></router-link>
    <v-btn class="clear" @click="clear" color="primary">Clear</v-btn>
  </v-form>
</div>
</template>
<script>
export default {
  data: () => ({
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 20) || 'Name must be less than 20 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    mobileNumber: '',
    mobileNumberRules: [
      (v) => !!v || 'Phone Number is required',
      (v) => (v && v.length === 10) || 'Phone Number must contain 10 Numbers',
    ],
    dateOfBirth: '',
    dateRules: [
      (v) => !!v || 'Date is required',
    ],
    valid: true,
  }),
  computed: {
    userDetails() {
      return this.$store.state.formData;
    },
  },
  methods: {
    clear() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    submit() {
      const details = {
        name: this.name,
        email: this.email,
        mobileNumber: this.mobileNumber,
        dateOfBirth: this.dateOfBirth,
      };
      this.userDetails.push(details);
    },
  },
};
</script>

<style lang="scss" scoped>
h1{
  padding-top: 200px;
  color:  #c6538c;
  text-align: center;
}
.form{
  width:40%;
  margin-left: 430px;
}
</style>
