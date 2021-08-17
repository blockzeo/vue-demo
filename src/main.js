// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, ButtonGroup, Card, Dropdown, DropdownMenu, DropdownItem, Dialog, Form, FormItem, Tooltip, Table, TableColumn, Pagination, Switch, Scrollbar, Tree, Popover, Cascader, Checkbox, CheckboxGroup, Tabs, TabPane, Radio, RadioGroup, Select, Option, Upload, Input, Autocomplete, DatePicker, Menu, Submenu, MenuItem, Transfer } from 'element-ui'
Vue.use(Button)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tooltip)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Pagination)
Vue.use(Submenu)
Vue.use(Switch)
Vue.use(Scrollbar)
Vue.use(ButtonGroup)
Vue.use(Tree)
Vue.use(Cascader)
Vue.use(Popover)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Option)
Vue.use(Upload)
Vue.use(Autocomplete)
Vue.use(Transfer)
Vue.use(Card)

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
