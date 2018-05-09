import san, { Component, DataTypes } from 'san';

import styles from './index.css';

class Task extends Component {
  static template = `<div class="{{styles.Task}}">
  <div>
    <button on-click="toggle">TOGGLE</button>
    <span s-if="show" s-transition="hook">
      Transition Layer
    </span>
  </div>
  </div>`;

  static dataTypes = {
    show: DataTypes.bool
  };

  initData() {
    return {
      styles,
      show: true
    };
  }

  static computed = {};

  created() {}

  toggle() {
    console.log(this.data.get('show'));
    this.data.set('show', !this.data.get('show'));
  }

  hook = {};
}

export default Task;
