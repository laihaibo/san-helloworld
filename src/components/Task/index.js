import san, { Component, DataTypes } from 'san';
import Parent from '../Parent';

import styles from './index.css';

class Task extends Component {
  static components = {
    parent: Parent
  };

  static template = `<div class="{{styles.Task}}">
  <parent></parent>
  <p>我是更高层父组件：{{info}}</p>
  </div>`;

  static dataTypes = {
    info: DataTypes.string
  };

  initData() {
    return {
      styles,
      info: '我也静静等待用户输入'
    };
  }

  static computed = {};

  created() {}

  static messages = {
    'CHILD:updateInfo'(args) {
      let { value } = args;
      if (value) {
        this.data.set('info', value);
      }
      return;
    }
  };
}

export default Task;
