<template>
  <div>
    <div class="column-center challenge-container">
      <h1>Frontend Software Engineer Challenge</h1>
      <h2>Rendering transactions</h2>
      <!-- <router-link tag="a" to="/transactions">Go to solution</router-link> -->
    </div>
    <div class="column-center home-headline">
      <h1>CANDIDATE</h1>
    </div>
    <div class="section-container candidate">
      <div class="avatar-wrapper">
          <img src="@/assets/avatar.jpg" alt="Jorge Urosa Alonso" title="Jorge Urosa Alonso">
      </div>
      <div>
        <p>
          <strong>Jorge Urosa Alonso</strong>
          <br>
          Self taught Front-end Developer based in Madrid, Spain.
          <br>
          Graduated in Business Administration by Rey Juan Carlos University, with experience in related positions for more than 7 years, in 2017 I started a new path in the world of software development.
           <br>
          Currently I work as a FullStack developer, realizing, web pages using .Net, SQL, AngularJS technologies.
          Constantly learning, I collaborate as a "Guilder" in Open Source Weekends, technology-loving community that meets periodically in Campus Madrid, to hold workshops, talks and collaborate on open source projects with technologies such as Vue, Vuetify, Firebase, etc.
          </p>
      </div>
    </div>
    <div class="column-center home-headline">
      <h1>TECHNOLOGIES USED</h1>
    </div>
    <div class="section-container">
      <div class="avatar-wrapper">
        <i class="fab fa-vuejs"></i>
      </div>
      <div>
        <p>
          <strong>VueJS</strong>
          <br>
          <a href="https://vuejs.org/">Vue</a> is a javascript progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.
          <br>
          <strong>Why Vue?</strong>
          <br>
            In terms of modern component-based javascript frameworks Vue is the "new kid on the block", compared with some of their "rivals" (Angular, React), vue it's quite easy to learn, has a detailed, comprehensive and extense documentation, it's flexible, allows two-way communication, in addition with libraries and tools such as :
            <br>
            <a href="https://vuex.vuejs.org/">VueX:</a> A state management library that serves as a centralized store for all the components in an application
            <br>
            <a href="https://router.vuejs.org/">Vue Router:</a> The official router for Vue. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze.
            <br>
            <a href="https://cli.vuejs.org/">Vue Cli:</a> Tool for rapid Vue.js development, offering scafolding and configurations for webpack, linter, babes, test tooling and much more.
            <br>
            <a href="https://github.com/axios/axios">Axios: </a> Promise based HTTP client for the browser and node.js.
            <br>
            And let's be honest, this is the framework i've been studying for the past months, so this is the best tool in my drawer.
         </p>
      </div>
    </div>
    <div class="section-container">
      <div class="avatar-wrapper">
        <i class="fab fa-css3-alt"></i>
      </div>
      <div>
        <p>
          <strong>CSS3</strong>
          <br>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">Cascading Style Sheets (CSS): </a>is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.
          <br>
          <strong>Why PURE CSS?</strong>
          <br>
          For this project I didn't want to use third party front end frameworks such as <a href="https://vuetifyjs.com/en/">Vuetify</a>, <a href="https://getbootstrap.com/">Bootstrap</a>, <a href="https://materializecss.com/">Materialize</a> nor any other. Despite for my personal projects of course learning  y usually use them to quickstart the styles and focus on other topics.
          <br>
          I know that using any kind of CSS processor such as <a href="https://sass-lang.com/">SASS</a>, <a href="http://stylus-lang.com/"> Stylus</a> or <a href="http://lesscss.org/">LESS</a> would have been a +100, but i haven´t got enought experience nor knowledge of this tecnologies to feel confortable creating this project with them, of course this is in my to-do list, and i'm really impacient to start using this technologies.
          </p>
      </div>
    </div>
    <div class="section-container">
      <div class="avatar-wrapper">
        <i class="fas fa-code"></i>
      </div>
      <div>
        <p>
          <strong>Other Specifications</strong>
          <br>
          Of course, in this project I used HTML5, Javascript using +ES6 specs (Vue allows Typescript and I got experience with typescript used with AngularJS).
          <br>
          Simple animations and transitions done using CSS and Vue transition directive.
          <br>
          All this code is able in a <a href="https://github.com/Jorgeural/Transactions">github</a> repository.
          </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  }
}
</script>

<style>
.column-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.challenge-container {
  color: #4a4a4a;
  background-color: #fff;
  min-height: 20vh;
}

.home-headline {
  background-color: #4a4a4a;
  color: #d1d2d4;
  -moz-box-shadow: 0 5px 15px #333;
  -webkit-box-shadow: 0 5px 15px #333;
  box-shadow: 0 5px 15px #333;
}

.section-container {
  display: flex;
  padding: 3.5%;
}

.section-container p {
  padding: 0 15px;
  text-align: justify;
  margin: 0px;
}

.section-container i {
  font-size: 100px;
}

.candidate {
  background-color: #f2f2f2;
}

.avatar-wrapper {
  min-width: 200px;
  text-align: center;
  vertical-align: center;
}

.avatar-wrapper > img {
  border-radius: 50%;
}

/* Media query for small devices */
@media (max-width: 599px) {
  .section-container {
    flex-wrap: wrap;
  }
  .avatar-wrapper {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
