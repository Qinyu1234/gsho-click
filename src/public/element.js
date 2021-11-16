import Vue from 'vue';
import { MessageBox,Message, } from 'element-ui';
Vue.component(MessageBox.name,MessageBox)
Vue.component(Message.name,Message)

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;