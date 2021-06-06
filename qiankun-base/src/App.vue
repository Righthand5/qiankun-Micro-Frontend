<template>
  <div>
      <!--基座可以放自己的路由-->
      <router-link to="/">Home</router-link>
      <router-link to="/vue">Vue应用</router-link>
      <router-link to="/react">React应用</router-link>
      <!--三者有可能不可以同时显示后期需要加判断-->
      <!--用于默认切换-->
      <router-view></router-view>
      <!--用于切换Vue-->
      <div id="vue"></div>
      <!--用于切换React-->
      <div id="react"></div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
