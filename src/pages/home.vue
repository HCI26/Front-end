
<template>
  <div id="app">
    <section class="home-section">
      <div class="background-image">
        <div class="overlay"></div>
        <div class="content">
          <div class="text">
            Welcome to OBSERVA
          </div>
          <div class="links-column">
            <div class="link">
              <router-link to="/signup" class="get-started-btn">Get Started</router-link>
            </div>
            <div class="link" style="margin-top: 10px;">
              <router-link to="/login" class="login-link">
                Already have an account?
                <p style="color: rgb(99, 215, 227);">Login</p>
              </router-link>
            </div>
          </div>
        </div>
        <div class="about-us">
          <div class="aboutus-title">
            About us
          </div>
          <div class="aboutus-text">
            OBSERVA is a smart system that uses face recognition to detect the identity of the visitor and
            display his/her information on the screen. The system also detects the visitor’s emotions and
            displays them on the screen. The system is designed to be user-friendly and easy to use. The
            system is also designed to be cost-effective and affordable for everyone.
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import homeLogo from './assets/homeLogo2.png';

export default {
  data() {
    return {
      projectName: 'Your Project Name',
      logoPath: homeLogo,
    };
  },
  mounted() {
    document.querySelector('.content').classList.add('fade-in');
  }
};
</script>


<style>
.home-section, .about-us-section, .features-section {
  position: relative;
}

.background-image {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('~@/assets/homeLogo.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Parallax effect */
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(28, 27, 27, 0.6);
  z-index: 1;
}

.content {
  z-index: 2;
  text-align: center;
  color: #ffffff;
  padding: 20px;
  margin-bottom: 20px;
  opacity: 0;
  transition: opacity 2s ease;
}

.content.fade-in {
  opacity: 1;
}

.text {
  font-size: 50px;
  font-weight: bold;
  color: #afd0d4;
  text-decoration: dashed;
  text-align: center;
  margin-bottom: 20px;
}

.link {
  text-align: center;
  z-index: 2;
}

.get-started-btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #3498db;
  color: #ffffff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.5s ease, transform 0.2s ease;
}
.login-link{
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.5s ease, transform 0.2s ease;
}

.get-started-btn:hover, .login-link:hover {
  transform: scale(1.05);
  background-color: #2980b9;
}

.about-us {
  position: relative;
  margin-top: 400px;
  margin-left: 550px;
  width: 10cm;
  z-index: 1;
}

.aboutus-title {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 10px;
  text-align: left;
}

.aboutus-text {
  font-size: 16px;
  color: #ffffff;
  text-align: left;
  line-height: 1.5;
}
</style>
