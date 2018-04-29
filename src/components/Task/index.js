import san, { Component, DataTypes } from 'san';

import styles from './index.css';

class Task extends Component {
  static template = `<div class="{{styles.Task}}">
  Task
  </div>`;

  static dataTypes = {
    items: DataTypes.array,
  };

  initData() {
    return {
      styles,
    };
  }

  static computed = {};

  created() {}
}

export default Task;
