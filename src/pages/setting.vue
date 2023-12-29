<template>
  <div class="container-xl px-4 mt-4">
    <!-- Account page navigation-->
    
    <div  class="row">
        
        <div class="col-xl-8">
            <!-- Account details card-->
            <div class="card mb-4">
                <div class="card-body">
                    <form>
                        <!-- Form Group (username)-->
                        <div class="m-3">
                            <label class="small m-1" for="inputUsername">Username </label>
                            <div v-if="!edit" class="A">{{ userData.username }}</div>
                            <input v-if="edit" class="form-control" id="inputUsername" type="text" placeholder="Enter your username">
                        </div>
                        <!-- Form Row-->
                        <div class="m-3">
                            <label class="small m-1" for="inputUsername">Full Name </label>
                            <div v-if="!edit" class="A">{{ userData.fullname }}</div>
                            <input v-if="edit" class="form-control" id="inputUsername" type="text" placeholder="Enter your Fullname">
                        </div>
                        <!-- Form Row        -->
                        <div class="row gx-3 m-3">
                            
                            <!-- Form Group (phonenumber)-->
                            <div class="col-md-6">
                                <label class="small m-1" for="inputPhone">Phone number </label>
                                <div v-if="!edit" class="A">{{ userData.phonenumber }}</div>
                                <input v-if="edit" class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number">
                            </div>
                           
                        </div>
                        <!-- Form Group (email address)-->
                        <div class="m-3">
                            <label class="small m-1" for="inputEmailAddress">Email address </label>
                            <div v-if="!edit" class="A">{{ userData.email }}</div>
                            <input v-if="edit" class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address">

                        </div>
                        <div class="m-3">
                            <label class="small m-1" for="inputEmailAddress">Password</label>
                            <div v-if="!edit" class="A">***</div>
                            <input v-if="edit" class="form-control" id="inputEmailAddress" type="password" placeholder="Enter your password">
                            
                        </div>
                        <!-- Form Row-->
                        <div  class="row gx-3 m-3">
                            <!-- Form Group (location)-->
                            <div style="display: flex; justify-content: space-between  ; " class="col-md-6">
                                <div class="col-md-6">
                                <label class="small m-1" for="inputBirth">bithday </label>
                                <div class="form-control" id="inputBirth" style="border: none ; padding-left: 5px ;background-color: rgb(243 244 246);">19/1/2003</div>
                                </div>
                                <div style="margin-right: 750px;" class="col-md-6" >
                                <label class="small m-1" for="inputGender">Gender </label>
                                <div class="form-control" id="inputGender" style="border: none  ; padding-left: 5px;  background-color: rgb(243 244 246);">{{userData.gender}}</div>
                                </div>
                            </div>
                          </div> 
                        <div  class="row gx-3 m-3">
                            <div style="display: flex; justify-content: space-between  ; " class="col-md-6">
                                <div class="col-md-6">
                                <label class="small m-1" for="inputCity">City </label>
                                <div v-if="!edit" class="A">{{ userData.city }}</div>
                                <input v-if="edit" class="form-control" id="inputCity" type="text" placeholder="Enter your location">
                                </div>
                                <div style="margin-right: 603px;" class="col-md-6" >
                                <label class="small m-1" for="inputLocation">Address </label>
                                <div v-if="!edit" class="A">{{ userData.address }}</div>
                                <input v-if="edit" style="width: 100%;" class="form-control" id="inputLocation" type="text" placeholder="Enter your location">
                                </div>
                            </div>
                          </div> 
                        
                        <!-- Save changes button-->
                        <button v-if="!edit" @click="editProfile" style="font-weight: bold; background-color: rgb(31 41 55);; color: aliceblue; padding: 5px; border-radius: 10px; margin-top: 50px;" class="btn btn-primary m-3" type="button">Edit &#9998;</button>
                        <button v-if="edit" @click="edit=false" style="font-weight: bold; background-color: rgb(31 41 55);; color: aliceblue; padding: 5px; border-radius: 10px; margin-top: 50px;" class="btn btn-primary m-3" type="button">Save changes</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      edit: false,
    };
  },
  methods: {
    editProfile() {
      this.edit = true;
    },
    saveProfile() {
      this.edit = false;
    },
  },
};
</script>

<style>

label
{
  display: block; 
  color: #0e1b2e;
  text-align: left;
  margin-left: 5px;
  margin-top: 20px;
  font-weight: bold;
}
.B
{
    color:#0061f2;
}
.img-account-profile {
    height: 10rem;
}
.rounded-circle {
    border-radius: 50% !important;
}
.card {
    box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
}
.card .card-header {
    font-weight: 500;
}
.card-header:first-child {
    border-radius: 0.35rem 0.35rem 0 0;
}
.card-header {
    padding: 1rem 1.35rem;
    margin-bottom: 0;
    background-color: rgba(33, 40, 50, 0.03);
    border-bottom: 1px solid rgba(33, 40, 50, 0.125);
}
.row
{
  background-color: rgb(243 244 246);

}
.A
{
    margin: 12px;
    color:#69707a;
    text-align: start;
}
.form-control, .dataTable-input {
    display: block;
    width: 50%;
    padding: 0.5rem 1.125rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1;
    color: #69707a;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #c5ccd6;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.35rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.nav-borders .nav-link.active {
    color: #0061f2;
    border-bottom-color: #0061f2;
}
.nav-borders .nav-link {
    color: #69707a;
    border-bottom-width: 0.125rem;
    border-bottom-style: solid;
    border-bottom-color: transparent;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0;
    padding-right: 0;
    margin-left: 1rem;
    margin-right: 1rem;
}
</style>