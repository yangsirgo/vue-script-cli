<template>
  <div style="position:relative;">

    <ToolTip
      type="type"
      placement="top">
      我是trigger
      <p slot="content">toolTip消息提示</p>
    </ToolTip>
  </div>
</template>

<script>
  import ToolTip from './tooltip.vue';


  export default {
    data:function(){
      return{
        type:'disable',

      }
    },
    components: {
      ToolTip
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
