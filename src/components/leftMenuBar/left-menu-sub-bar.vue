<template>
  <ul class="gd-left-menu-sub" style="bottom: auto; top: 0px; display: block">
    <li
      v-for="subIterm in subData"
      @mouseenter="subIterm.sub&&(menuShowSub=true)"
      @mouseleave="subIterm.sub&&(menuShowSub=false)"
      @click="subIterm.href&&(window.location.href=subIterm.href)">
                                <span class="gd-left-menu-text ">
                                    {{subIterm.name}}
                                    <i class="gd-left-menu-next icon-right"
                                       v-if="subIterm.sub"></i>
                                </span>
      <transition name="fade">
        <leftbar-subComponent
          :subData=subIterm.sub
          v-show="menuShowSub"
          transiton="fade">
        </leftbar-subComponent>
      </transition>
    </li>
  </ul>
</template>
<script>
  export default{
      name:"leftbar-subComponent",
      props:['subData'],
      data(){
        return {
          menuShowSub:false
        }
      },
      computed:{
        window(){
          return window;
        }
      }
  }
</script>
