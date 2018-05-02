import san, { Component, DataTypes } from 'san';

import styles from './index.css';

class Child extends Component {
  static template = `<div class="{{styles.Child}}">
  <label>子组件：<input value="{= info =}"  /></label><button on-click="goBoard">通知父组件</button>
  </div>`;

  static dataTypes = {
    info: DataTypes.string
  };

  initData() {
    return {
      styles,
      info: ''
    };
  }

  static computed = {};

  created() {}

  goBoard() {
    let info = this.data.get('info');
    this.dispatch('CHILD:updateInfo', info);
  }
}

export default Child;
