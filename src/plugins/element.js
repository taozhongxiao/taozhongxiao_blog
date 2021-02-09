import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

import {
  Container,
  Header,
  Main,
  Footer,
  Aside,
  Row,
  Col,
  Input,
  Form,
  FormItem,
  Select,
  Option,
  Button,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Breadcrumb,
  BreadcrumbItem,
  TableColumn,
  Table,
  Dialog,
  Card,
  Pagination,
  Message,
  Switch,
  Upload,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Tooltip,
  DatePicker,
  Tag,
  MessageBox
} from 'element-ui'

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Aside)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(Button)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Menu)
Vue.use(BreadcrumbItem)
Vue.use(Breadcrumb)
Vue.use(TableColumn)
Vue.use(Table)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Card)
Vue.use(Pagination)
Vue.use(Switch)
Vue.use(Upload)
Vue.use(DropdownItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(Tooltip)
Vue.use(DatePicker)
Vue.use(Tag)

Vue.use(VueQuillEditor)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm

// const CryptoJS = require('crypto-js') // 引用AES源码js

// function encrypt(word, keyStr) {
//   // keyStr = keyStr ? keyStr : 'ABGHNJHGSHUYG12'
//   let key = CryptoJS.enc.Utf8.parse(keyStr)
//   let srcs = CryptoJS.enc.Utf8.parse(word)
//   let encrypted = CryptoJS.AES.encrypt(srcs, key, {
//     mode: CryptoJS.mode.ECB,
//     padding: CryptoJS.pad.Pkcs7
//   })
//   return encrypted.toString()
// }

// function decrypt(word, keyStr) {
//   // keyStr = keyStr ? keyStr : 'ABGHNJHGSHUYG12'
//   const key = CryptoJS.enc.Utf8.parse(keyStr)
//   const decrypt = CryptoJS.AES.decrypt(word, key, {
//     mode: CryptoJS.mode.ECB,
//     padding: CryptoJS.pad.Pkcs7
//   })
//   return CryptoJS.enc.Utf8.stringify(decrypt).toString()
// }

// export default {
//   decrypt
// }
