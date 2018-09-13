<template>
  <div>
    <!-- INTRO -->
    <div class="column-center challenge-container bg-2">
      <h1>Frontend Software Engineer Challenge</h1>
      <h2>Rendering transactions</h2>
      <!-- <router-link tag="a" to="/transactions">Go to solution</router-link> -->
    </div>

    <!-- CANDIDATE -->
    <div class="column-center home-headline">
      <h1>CANDIDATE</h1>
    </div>
    <div class="section-container bg-1">
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

    <!-- TECHNOLOGIES -->
    <div class="column-center home-headline">
      <h1>TECHNOLOGIES USED</h1>
    </div>
    <div class="section-container bg-2 ">
      <div class="avatar-wrapper">
        <i class="fab fa-vuejs"></i>
      </div>
      <div>
        <p>
          <strong>VueJS</strong>
          <br>
          <a href="https://vuejs.org/" target="_blank">Vue</a> is a javascript progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.
          <br>
          <strong>Why Vue?</strong>
          <br>
            In terms of modern component-based javascript frameworks Vue is the "new kid on the block", compared with some of their "rivals" (Angular, React), vue it's quite easy to learn, has a detailed, comprehensive and extense documentation, it's flexible, allows two-way communication, in addition with libraries and tools such as :
            <br>
            <a href="https://vuex.vuejs.org/" target="_blank">VueX:</a> A state management library that serves as a centralized store for all the components in an application
            <br>
            <a href="https://router.vuejs.org/" target="_blank">Vue Router:</a> The official router for Vue. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze.
            <br>
            <a href="https://cli.vuejs.org/" target="_blank">Vue Cli:</a> Tool for rapid Vue.js development, offering scafolding and configurations for webpack, linter, babes, test tooling and much more.
            <br>
            <a href="https://github.com/axios/axios" target="_blank">Axios: </a> Promise based HTTP client for the browser and node.js.
            <br>
            And let's be honest, this is the framework i've been studying for the past months, so this is the best tool in my drawer.
         </p>
      </div>
    </div>
    <div class="section-container bg-1">
      <div class="avatar-wrapper">
        <i class="fab fa-css3-alt"></i>
      </div>
      <div>
        <p>
          <strong>CSS3</strong>
          <br>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">Cascading Style Sheets (CSS): </a>is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.
          <br>
          <strong>Why PURE CSS?</strong>
          <br>
          For this project I didn't want to use third party front end frameworks such as <a href="https://vuetifyjs.com/en/" target="_blank">Vuetify</a>, <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a>, <a href="https://materializecss.com/" target="_blank">Materialize</a> nor any other. Despite for my personal projects of course learning  y usually use them to quickstart the styles and focus on other topics.
          <br>
          I know that using any kind of CSS processor such as <a href="https://sass-lang.com/" target="_blank">SASS</a>, <a href="http://stylus-lang.com/" target="_blank"> Stylus</a> or <a href="http://lesscss.org/" target="_blank">LESS</a> would have been a +100, but i haven´t got enought experience nor knowledge of this tecnologies to feel confortable creating this project with them, of course this is in my to-do list, and i'm really impacient to start using these technologies.
          </p>
      </div>
    </div>
    <div class="section-container bg-2">
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
          All this code is able in a <a href="https://github.com/Jorgeural/Transactions" target="_blank">github</a> repository.
          </p>
      </div>
    </div>

    <!-- APPROACH -->
    <div class="column-center home-headline">
      <h1>APPROACH</h1>
    </div>
    <div class="section-container bg-1">
      <div class="avatar-wrapper">
        <i class="far fa-flag"></i>
      </div>
      <div>
        <p>
          <strong>The Chanllege </strong>
          <br>
            As a payment gateway, Payvision offers multiple APIs to process payments and credits (also known as transactions).
            In this code challenge, you will be in charge of creating a stunning view for rendering transactions.
            Use the technology and/or frameworks that make you feel comfortable. Don't hesitate to contact us if you have any questions regarding this challenge.
            <ul>
              <li>Create a web project where the user consume the transactions endpoint.</li>
              <li>The app should render the information from the transactions endpoint described below.</li>
              <li>Your code should be maintainable and extensible as possible.</li>
              <li>Here you have the design that you have to apply. See our <a href="https://scene.zeplin.io/project/5aba58ec2ad5c9a98d97c76e" target="_blank">zeplin</a> page!</li>
              <li>Responsive is mandatory.</li>
              <li>Use the technology that you consider more useful.</li>
              <li>Create a readme with the explanation of how to start the project.</li>
              <li>Package the solution and send to jobs.spain@payvision.com</li>
            </ul>
          </p>
      </div>
    </div>
    <div class="section-container bg-2">
      <div class="avatar-wrapper">
        <i class="far fa-lightbulb"></i>
      </div>
      <div>
        <p>
          <strong>My Solution</strong>
          <br>
            I was pretty sure about the stack to use, mainly because Vue is a framework that i've been studying recently, it's quite new,
            i really love to work with it and this would be a great opportunity to test acquired knowledge throught the courses i am doing.
            <br>
            I know that not using a CSS procesor will play against me, but i want to emphasize my will and desire to learn these technologies,
            nonetheless i didn't want to user pre-build front end components, so i stick with plain CSS for all the app, using Flexbox and media querys for responsive designs,
             and Vue's transition directive with simple CSS for animations and transitions.
            <br>
            Style for the grid following (with some changes) the <a href="https://scene.zeplin.io/project/5aba58ec2ad5c9a98d97c76e" target="_blank">zeplin</a>  designs provided.
            <br>
            Home styles according to <a href="https://www.payvision.com/es" target="_blank">payvision.com/</a>
            <br>
            I use <a href="https://fontawesome.com/" target="_blank"> Fontaswesome </a>and <a href="https://fonts.google.com/" target="_blank"> Google Fonts</a> for icons, and fonts respectively.
            <br>
            Filters are dynamic, options are mapped from the data received, so if you introduce a new  transaction with a new currency or type, you'll be able to filter it too.
            <br>
            Redirecting, if you try to navigate to a route that it is not mapped, you will be redirected to the home page (could have been a Not Foung page)
            <br>
            If an error occurs when requesting the info a console.log() will show the error.message and the user will see a "Ups, something went wrong screen".
            <br>
            AJAX request to the endpoint is made using <a href="https://github.com/axios/axios" target="_blank">Axios</a>, I really want to focus on this, because <strong>my approach</strong> is to make <strong>a single asynchronous  request</strong>
            to the server when the app first loads, all the transactions get loaded and stored in the Vuex store. and the treatment of the data (filters) relies on the front end, using the .filter() Javascript method.
          </p>
      </div>
    </div>
    <div class="section-container bg-1">
      <div class="avatar-wrapper">
        <i class="far fa-smile"></i>
      </div>
      <div>
        <p>
          <strong>Pros</strong>
          <br>
          <ul>
            <li>Loading the data when the app first loads, and it being an async request, will start downloading the data just immediately so by time you go to Transactions, the data might be loaded yet </li>
            <li>Reduces the calls to the server, when using a cloud server, that charges for transit or calls this is great (not even the filters make a call to server) </li>
            <li>Makes the navigation much faster and satisfactory</li>
          </ul>
          </p>
      </div>
    </div>
    <div class="section-container bg-2">
      <div class="avatar-wrapper">
        <i class="far fa-frown"></i>
      </div>
      <div>
        <p>
          <strong>Cons</strong>
          <br>
            <ul>
              <li>This only works when we are sure that we are not loading a huge amount of data, otherwise rely in the front end for data manipulation might end in performing issues</li>
              <li>Data refreshing by explicit request of the user (refresh button) or re-loading the page. This can be solved with realtime databases (done it before with Firebase)</li>
            </ul>
          </p>
      </div>
    </div>
    <div class="section-container bg-1">
      <div class="avatar-wrapper">
        <i class="far fa-comment-alt"></i>
      </div>
      <div>
        <p>
          <strong>Comments</strong>
          <br>
          When i fisrt saw the challenge i hoped to have enought time to make this solution, and a v2 requesting the info to the server, loading the data in the TransitionGrid component,
           And sending new requests with params to the server for filtered info. But i won´t have enought time. Please, if this is an issue, let me know and propably in a few days (as i can reuse most of the app) i will elaborate that idea.
          </p>
      </div>
    </div>

    <!-- Footer -->
    <div class="column-center footer">
      <p>2018 - Made by Jorge Urosa</p>
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
a {
  color: #3fa8f4;
  text-decoration: none;

}

a:hover {
  text-decoration: underline;
}

.bg-1 {
  background-color: #f2f2f2;
}

.bg-2 {
  background-color: #fff;
}

.column-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.challenge-container {
  color: #4a4a4a;
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
  padding: 2.5%;
}

.section-container p {
  padding: 0 15px;
  text-align: justify;
  margin: 0px;
}

.section-container i {
  font-size: 100px;
  color: #3fa8f4;
}

.avatar-wrapper {
  min-width: 200px;
  text-align: center;
  vertical-align: center;
}

.avatar-wrapper > img {
  border-radius: 50%;
}

.footer{
  background-color: #333;
  color: #fff
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
