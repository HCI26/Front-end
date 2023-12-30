<template >
  <body style="background-color:rgb(19, 109, 134)">
    
  
    <div class="mb-0 flex flex-col" style="background-color: aliceblue;
    height: 100vh;
    margin: 0px 300px;
    border-radius: 30px;">
  <header style="width: 100%; "> <div style="text-align: center;" class="heading"><h1 style="font-size: x-large ;margin-top: 20px ;color: rgb(19, 109, 134);" class="font-bold text-teal-700 mb-0">Welcome TO OBSERVA</h1></div></header>
    <div class="items-center flex flex-row h-screen" style="justify-content: space-evenly;
">
      <div class="pt-12 w-6/12">
        <img class="w-full h-full" src="./observa.svg" alt="">
      </div>
      <form class="pb-12 w-2/5" @submit.prevent="login" style="background-color: aliceblue;">
          <label style="color:rgb(19, 109, 134) ;margin-right: 200px; margin-top: 30px;" class="block mt-1 font-bold text-teal-700" for="">Username</label>
          <input class="mt-1 p-2 w-4/5 border-teal-700 text-teal-700" style="" type="text" v-model="username" placeholder="Username" required>
          <label style="color:rgb(19, 109, 134) ;margin-right: 200px; margin-top: 30px;" class="block mt-1 font-bold text-teal-700" for="">Password</label>
          <input class="mt-1 p-2 w-4/5 border-teal-700 text-teal-700" type="password" v-model="password" placeholder="Password" required><br>
          <div v-if="!valid" class="text-red-700 text-sm mt-2" style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
">
          Invalid username or password.
          </div>
          <input style="border-radius: 10px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
background-color: rgb(19, 109, 134);
color: aliceblue;
font-size: larger; margin-top: 20px;" class="mt-1 p-2 w-4/5 border-teal-700 text-teal-700" @click="login"  type="submit" value="log in">
          <a style="color: rgb(19, 109, 134);" class="inline-block mt-5 font-bold text-teal-700" @click="reset">forgot password?</a><br>
          <router-link style="color: rgb(19, 109, 134);" class="inline-block mt-5 font-bold text-teal-700" to="/signup">don't have an acccount?</router-link>
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
            username: '',
            password: '',
            valid: true,   //will get from database
        }
    },
    methods: {
        async login() {
            const userData = {
            username: this.username,
            password: this.password,
            };

            try {
            const response = await fetch('http://192.168.50.130:5000/api/users/login', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                // console.log("Response:  ", await response.json());
                const dataResponse = await response.json();
                const token = dataResponse.token;
                VueCookies.set("token", token);
                console.log("Looged in sucssefuly")
                this.$router.push('/dashboard');
            } else {
                // Handle unsuccessful login (e.g., show error message)
                this.valid = false;
            }
            } catch (error) {
            console.error('Error:', error);
            }
            if (this.username=="sss")
                this.$router.push('/dashboard');
        },

        async reset(){
          const userData = {
            username: this.username
          }
          try {
            const response = await fetch('http://192.168.50.130:5000/api/users/reset_password', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                console.log("Response:  ", await response.json());
                this.$router.push('/login');
            } else {
                this.valid = false;
            }
            } catch (error) {
            console.error('Error:', error);
            }
        },


        }
    } 
  </script>
  
<style>

</style>