import Pagination from '../components/Pagination.vue';
import Tooltip from '../components/tooltip.vue';
import Leftmenubar from '../components/leftMenuBar/left-menu-bar.vue';
import Valdate from '../components/valdate/valdate.vue';
import Form from '../components/form/form.vue';
import Table from '../components/table/table.vue';

const components={
  install:function (Vue) {
    Vue.component('gdPagination',Pagination);
    Vue.component('gdTooltip',Tooltip);
    Vue.component('gdLeftmenubar',Leftmenubar);
    Vue.component('gdValdate',Valdate);
    Vue.component('gdForm',Form);
    Vue.component('gdTable',Table);
  }
};
// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(components)
}
export default components;
