import Vue from 'vue';
import { MessageBox,Message,Pagination } from 'element-ui';
Vue.component(MessageBox.name,MessageBox)
Vue.component(Message.name,Message)
Vue.component(Pagination.name,Pagination)

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;