# transactions

> Recruitment challenge

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


### CANDIDATE

**Jorge Urosa Alonso**
Self taught Front-end Developer based in Madrid, Spain. 
Graduated in Business Administration by Rey Juan Carlos University, with experience in related positions for more than 7 years, in 2017 I started a new path in the world of software development. 
Currently I work as a FullStack developer, realizing, web pages using .Net, SQL, AngularJS technologies. Constantly learning, I collaborate as a "Guilder" in Open Source Weekends, technology-loving community that meets periodically in Campus Madrid, to hold workshops, talks and collaborate on open source projects with technologies such as Vue, Vuetify, Firebase, etc.

### TECHNOLOGIES USED
**VueJS** 
Vue is a javascript progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries. 
Why Vue? 
In terms of modern component-based javascript frameworks Vue is the "new kid on the block", compared with some of their "rivals" (Angular, React), vue it's quite easy to learn, has a detailed, comprehensive and extense documentation, it's flexible and allows two-way communication. In addition with these libraries and tools that I have used, it becomes a really powerful choice.
 - [VueX](https://vuex.vuejs.org/): A state management library that serves as a centralized store for all the components in an application.
 - [Vue Router](https://router.vuejs.org/): The official router for Vue. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze.
 - [Vue Cli](https://cli.vuejs.org/): Tool for rapid Vue.js development, offering scafolding and configurations for webpack, linter, babes, test tooling and much more.
 - [Axios](https://github.com/axios/axios): Promise based HTTP client for the browser and node.js.
And let's be honest, this is the framework i've been studying for the past months, so this is the best tool in my drawer.


**CSS3** 
Cascading Style Sheets (CSS): is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. 
Why PURE CSS? 
For this project I didn't want to use third party front end frameworks such as [Vuetify](https://vuetifyjs.com/en/), [Bootstrap](https://getbootstrap.com/), [Materialize](https://materializecss.com/) nor any other. Despite for my personal projects I usually use them to quickstart the styles and focus on other topics. 
I know that using any kind of CSS processor such as [SASS](https://sass-lang.com/) , [Stylus](http://stylus-lang.com/) or [LESS](http://lesscss.org/) would have been a +100, but I haven´t got enought experience nor knowledge of this tecnologies to feel confortable creating this project with them, of course this is in my to-do list, and i'm really impacient to start using these technologies.


**Other Specifications**
Of course, in this project I used HTML5, Javascript using +ES6 specs (Vue allows Typescript and I got experience with typescript used with AngularJS). 
Simple animations and transitions done using CSS and Vue transition directive. 
All this code is able in a github repository.

### APPROACH
**The Chanllege**
As a payment gateway, Payvision offers multiple APIs to process payments and credits (also known as transactions). In this code challenge, you will be in charge of creating a stunning view for rendering transactions. Use the technology and/or frameworks that make you feel comfortable. Don't hesitate to contact us if you have any questions regarding this challenge.
- Create a web project where the user consume the transactions endpoint.
- The app should render the information from the transactions endpoint described below.
- Your code should be maintainable and extensible as possible.
- Here you have the design that you have to apply. See our [zeplin](https://scene.zeplin.io/project/5aba58ec2ad5c9a98d97c76e) page!
- Responsive is mandatory.
- Use the technology that you consider more useful.
- Create a readme with the explanation of how to start the project.
- Package the solution and send to jobs.spain@payvision.com

**My Solution** 
I was pretty sure about the stack to use, mainly because Vue is a framework that I've been studying recently, it's quite new, I really love to work with it and this would be a great opportunity to test acquired knowledge throught the courses I am doing. 
I know that not using a CSS procesor will play against me, but I want to emphasize my will and desire to learn these technologies, nonetheless I didn't want to user pre-build front end components, so I stick with plain CSS for all the app, using Flexbox and media querys for responsive designs, and Vue's transition directive with simple CSS for animations and transitions. 
Style for the grid following (with some changes) the [zeplin](https://scene.zeplin.io/project/5aba58ec2ad5c9a98d97c76e) designs provided. 
Home styles according to [payvision](https://www.payvision.com/es).com/ 
I use [Fontaswesome](https://fontawesome.com/) and [Google](https://fonts.google.com/) Fonts for icons, and fonts respectively. 
Filters are dynamic, options are mapped from the data received, so if you introduce a new transaction with a new currency or type, you will be able to filter it too. 
Redirecting, if you try to navigate to a route that it is not mapped, you will be redirected to the home page (could have been a Not Foung page) 
If an error occurs when requesting the info a console.log() will show the error.message and the user will see a "Ups, something went wrong screen". 
AJAX request to the endpoint is made using Axios, I really want to focus on this, because my approach is to make a single asynchronous request to the server when the app first loads, all the transactions get loaded and stored in the Vuex store. and the treatment of the data (filters) relies on the front end, using the .filter() Javascript method.


**Pros**
- Loading the data when the app first loads, and it being an async request, will start downloading the data just immediately so by time you go to Transactions, the data might be loaded yet
- Reduces the calls to the server, when using a cloud server, that charges for transit or calls this is great (not even the filters make a call to server)
- Makes the navigation much faster and satisfactory

**Cons**
 - This only works when we are sure that we are not loading a huge amount of data, otherwise rely in the front end for data manipulation might end in performing issues
 - Data refreshing by explicit request of the user (refresh button) or re-loading the page. This can be solved with realtime databases (done it before with Firebase)

**Comments**
When I first saw the challenge I hoped to have enought time to make this solution, and a v2 requesting the info to the server, loading the data in the TransitionGrid component, And sending new requests with params to the server for filtered info. But I won´t have enought time. Please, if this is an issue, let me know and propably in a few days (as I can reuse most of the app) I will elaborate that idea.