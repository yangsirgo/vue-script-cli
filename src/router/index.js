import Vue from 'vue';
import Router from 'vue-router';
import Form from '@/components/form/form.vue';
import Table from '@/components/table/table.vue';
import Valdate from '@/components/valdate/valdate.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/form.html',
      name: 'Form',
      component: Form
    },
    {
      path: '/index.html',
      name: 'Table',
      component: Table
    },
    {
      path: '/valdate.html',
      name: 'Valdate',
      component: Valdate
    }
  ]
})
