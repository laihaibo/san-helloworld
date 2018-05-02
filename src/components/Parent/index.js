import san, { Component, DataTypes } from 'san';
import Child from '../Child';
import styles from './index.css';

class Parent extends Component {
  static components = {
    child: Child
  };

  static template = `<div class="{{styles.Parent}}">
  <child info="{{info}}"></child>
  <p>我是父组件：<input value="{= info =}" /></p>
  </div>`;

  static dataTypes = {
    info: DataTypes.string
  };

  initData() {
    return {
      styles,
      info: '静静等待用户输入'
    };
  }

  static computed = {};

  created() {}

  static messages = {
    'CHILD:updateInfo'(args) {
      let { value } = args;
      console.log(args);
      if (value) {
        this.data.set('info', value);
        this.dispatch('CHILD:updateInfo', value); //消息将沿着组件树向上传递，直到遇到第一个处理该消息的组件，则停止
      }
      return;
    }
  };
}

export default Parent;
