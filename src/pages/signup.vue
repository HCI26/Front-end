<template>
  <body style="background-color: rgb(19, 109, 134);">
    
  <div class="mb-0 flex flex-col" style="background-color: aliceblue;
    height: 100vh;
    margin: 0px 300px;
    border-radius: 30px;">
  <header style="width: 100%; "> <div style="text-align: center;" class="heading"><h1  style="font-size: x-large ;margin-top: 20px ;color: rgb(19, 109, 134);" class="font-bold text-teal-700 mb-0">Welcome TO OBSERVA</h1></div></header>
  <div class="items-center flex flex-row h-screen">
    <div class="pt-12 w-6/12 ">
      <img class="w-full h-full" src="./observa.svg" alt="">
    </div><form class="pb-12 w-2/5" @submit.prevent="sign">
      <div v-if="!valid" class="error-message">
          already exit
          </div>
        <div class="flex justify-between">
        <div class="A">
        <label style=" ;color:rgb(19, 109, 134) ;margin-right: 60px;" class="block mt-1 font-bold text-teal-700" for="">Username</label>
        <input class="mt-1 p-2 w-4/5 border-teal-700 text-teal-700" type="text"  v-model="username" placeholder="Username" required>
        </div>
        <div class="A">
        <label style=" ;color:rgb(19, 109, 134) ;margin-right: 50px;" class="block mt-1 font-bold text-teal-700" for="">Full Name</label>
        <input class="mt-1 p-2 w-4/5 border-teal-700 text-teal-700" type="text"  v-model="fullName" placeholder="Full Name" required>
        </div>
        </div>
        <div class="flex justify-between">
        <div class="A">
        <label style=" ;color:rgb(19, 109, 134) ;margin-right: 30px;" class="block mt-1 font-bold text-teal-700" for="">Email Address</label>
        <input class="mt-1 p-2 w-4/5 border-teal-700 text-teal-700" type="email " v-model="emailaddress" placeholder="Email Address" required> 
        </div>
        <div class="A">
        <label style=" ;color:rgb(19, 109, 134) ;margin-right: 20px;" class="block mt-1 font-bold text-teal-700" for="">Phone Number</label>
        <input class="mt-1 p-2 w-4/5 border-teal-700 text-teal-700" type="text"  v-model="phonenumber" placeholder="Phone number" required>
        </div>
        </div>
        <label style=" ;color:rgb(19, 109, 134) ;margin-right: 240px;" class="block mt-1 font-bold text-teal-700" for="">Password</label>
        <input class="mt-1 p-2 w-4/5 border-teal-700 text-teal-700" style="width: 90%;" type="password" v-model="password" placeholder="Password" required>
        <div class="flex justify-between">
        <div class="A">
        <label style=" ;color:rgb(19, 109, 134) ;margin-right: 40px;" class="block mt-1 font-bold text-teal-700" for="">Birthday</label>
        <input class="mt-1 p-2 w-4/5 border-teal-700 text-teal-700" type="date"  v-model="birthdate"  required>
        </div>
        <div class="A">
        <label style=" ;color:rgb(19, 109, 134) ;margin-right: 10px;" class="block mt-1 font-bold text-teal-700" for="">Gender</label>  
        <select v-model="gender" style="margin-right: 20px; padding: 10px;">
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            
        </select>
        </div>
        </div>
        <div class="flex justify-between">
        <div class="A">
        <label style=" ;color:rgb(19, 109, 134) ;margin-right: 40px;" class="block mt-1 font-bold text-teal-700" for="">City</label>
        <select class="mt-1 p-2 w-4/5 border-teal-700 text-teal-700" v-model="city">
            <option value="">City</option>
            <option value="Alexandria">Alexandria</option>
            <option value="Cairo">Cairo</option>
            <option value="Aswan">Aswan</option>
            <option value="Tanta">Tanta</option>
        </select>
        </div>
        <div class="A">
        <label style=" ;color:rgb(19, 109, 134) ;margin-right: 90px;" class="block mt-1 font-bold text-teal-700" for="">Address</label>
        <input class="mt-1 p-2 w-4/5 border-teal-700 text-teal-700" style="marg in-right: 5px;" type="text" v-model="address" placeholder="Address" required>
        </div>
        </div>

        <input style="border-radius: 10px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
background-color: rgb(19, 109, 134);
color: aliceblue;
font-size: larger;" class="mt-1 p-2 w-4/5 border-teal-700 text-teal-700" @click="addNewUser"  type="submit" value="Sign Up"><br>
        <router-link style="color: rgb(19, 109, 134);" class="inline-block mt-5 font-bold text-teal-700" to="/login">already have an account?</router-link>
      </form>

  </div>
</div>
  
</body>
</template>

<script>
import VueCookies from 'vue-cookies';
export default {
  data() {
      return {
          // data of user to send to database
          username: '',
          fullName:'',
          emailaddress:'',
          phonenumber:'',
          password: '', 
          birthdate: '', // not sure of format of this
          address:'',
          gender:'',
          city : '',
          valid: true,
      }
  },
  methods: {
    async addNewUser() {
      console.log(this.birthdate)
      const userData = {
        username: this.username,
        full_name: this.fullName,
        email: this.emailaddress,
        phone_number: this.phonenumber,
        password: this.password,
        date_of_birth: this.birthdate,
        address:this.address,
        city: this.city,
        gender:this.gender,
        country: "Egypt"
      };

      try {
        console.log(this.password);
        console.log(JSON.stringify(userData));
        const response = await fetch('http://192.168.50.130:5000/api/users/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        if (response.ok) {
          // Handle successful response, such as redirection or displaying a message
          const dataResponse = await response.json();
          const token = dataResponse.token;
          VueCookies.set("token", token);
          console.log("Looged in sucssefuly")
          this.$router.push('/dashboard');
        } else {
          // Handle unsuccessful response (e.g., show error message)
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle any network or fetch-related errors
      }
      if (this.username=="aaa")
          this.$router.push('/dashboard');
      
    },
  },
  
}
</script>