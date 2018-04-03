<template>
  <div id="app">
    <leftbar-component
      :json-data="leftBardData"
      :bgc-url="imgUrl"></leftbar-component>
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>

  import leftbarComponent from './components/leftMenuBar/left-menu-bar.vue';

  export default {
    name: 'App',
    data(){
      return {
        leftBardData:[
          {
            "name": "首页",
            "icon": "icon-home",
            "href": "index.html"
          },
          {
            "name": "表单",
            "icon": "icon-log",
            "href": "form.html"
          },
          {
            "name": "验证",
            "icon": "icon-access",
            "href": "valdate.html"
          },
          {
            "name": "系统",
            "icon": "icon-system",
            "href": "",
            "sub": [
              {
                "name": "组织架构",
                "icon": "",
                "href": "",
                "sub": [
                  {
                    "name": "用户",
                    "icon": "",
                    "href": "user.html"
                  },
                  {
                    "name": "部门",
                    "icon": "",
                    "href": "index.html"
                  },
                  {
                    "name": "权限",
                    "icon": "",
                    "href": "index.html"
                  }
                ]
              },
              {
                "name": "关于",
                "icon": "",
                "href": "about.html"
              }
            ]
          }
        ],
        imgUrl:"/images/tsa_menu_logo.png"
      }
    },
    components: {
      "leftbar-component":leftbarComponent
    },
    mounted(){
//      this.$route.path = window.location.pathname
      console.log(this.$route.path)
    }
  }
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
