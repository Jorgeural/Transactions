<template>
  <nav id="header">
    <div class="navigation-left">
      <img src="https://www.payvision.com/sites/all/themes/payvision/images/payvision-logo-300.png" width="100%" alt="Payvision" class="logo">
    </div>
    <div class="navigation-right">
      <router-link to="/" tag="a" active-class="active" exact>Home</router-link>
      <router-link to="/transactions" tag="a" active-class="active">Transactions</router-link>
    </div>
  </nav>
</template>

<style>
#header {
  width: 100%;
  min-height: 100px;
  background-color: #f6f7fb;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);
}

.navigation-left {
  display: flex;
  justify-content: center;
}

.navigation-right {
  min-width: 20%;
  display: flex;
  justify-content: center;
}

.navigation-right > a {
  padding: 10px 25px;
  text-decoration: none;
  color: #213d8f;
  font-size: 18px;
  font-weight: 600;
}

.navigation-right > a:hover {
  background-color: #e8ebf3;
}

.active {
    background-color: #e8ebf3;
}

.logo{
  flex-basis: 250px;
  padding: 15px;
}

/* Media query for phone devices */
@media (max-width: 599px) {
  .navigation-left {
    min-width: 100%;
  }
  .navigation-right {
    min-width: 100%;
    margin-bottom: 15px;
  }
}
</style>
