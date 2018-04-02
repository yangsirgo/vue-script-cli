import Pagination from '../components/Pagination.vue';
import tooltip from '../components/tooltip.vue';

const pagination={
  install:function (Vue) {
    Vue.component('vPagination',Pagination);
    Vue.component('vTooltip',tooltip);
  }
};
// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(pagination)
}
export default pagination;
