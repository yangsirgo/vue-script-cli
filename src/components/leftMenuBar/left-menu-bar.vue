<template>
  <div class="gd-left-menu" @mouseenter="spreadHandler" @mouseleave="shrinkHandler" ref="menuBar">
    <div class="gd-left-menu-logo" :style="styleObj"></div>
    <ul class="gd-left-menu-body">
      <li class="gd-left-menu-item"
          v-for="(item,$index) in barData"
          @mouseenter="item.sub&&(menuShow=true)"
          @mouseleave="item.sub&&(menuShow=false)"
          @click="item.href&&(window.location.href=item.href)">
        <div class="gd-left-menu-content gd-left-menu-text"
             :class="liActive(item.href)">
          <i class="gd-left-menu-icon"
             :class="[item.icon]"></i>
          <span>{{item.name}}</span>
          <i class="gd-left-menu-next icon-right"
             v-if="item.sub"></i>
        </div>
        <template v-if="item.sub">
          <transition name="fade">
            <leftbar-sub-com
              :subData=item.sub
              v-show=menuShow></leftbar-sub-com>
          </transition>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
  import leftbarSubCom from './left-menu-sub-bar.vue';


  export default {
    props: {
      jsonData: {
        type: Array,
        require: true
      },
      bgcUrl: {
        type: String,
        require: true
      }
    },
    components:{
      leftbarSubCom
    },
    data(){
      return {
        barData: this.jsonData,
        delayTimer: '',
        menuShow: false
      }
    },
    mounted(){

    },
    methods: {
      liActive(href){
        if(!href)return;
        var isActive = false;
        if(location.href.indexOf(href) > -1 ||
          location.pathname === '/' && (location.origin + '/index.html').indexOf(href) > -1){
          isActive = true;
        }
        return {
          'gd-active':isActive
        }
      },
      spreadHandler(){
        var _t = this;
        var self = this.$refs.menuBar;
        $(self).stop().animate({width: 170}, 100, function () {
          _t.delayTimer = setTimeout(function () {//浏览器渲染速度跟不上，延迟一下
            $(self).css('overflow-x', 'visible');
          }, 200);
        });
      },
      shrinkHandler(){
        var _t = this;
        var self = this.$refs.menuBar;
        clearTimeout(_t.delayTimer);
        $(self).css('overflow-x', 'hidden');
        $(self).stop().animate({width: 56}, 100);
      }
    },
    computed: {
      window(){
        return window;
      },
      styleObj(){
        return {
          backgroundImage: "url(" + this.bgcUrl + ")"
        }
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

  @import "../../../static/style/gd_left_menu.less";
</style>
