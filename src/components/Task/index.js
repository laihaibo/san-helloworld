import san, { Component, DataTypes } from 'san';

import styles from './index.css';

class Task extends Component {
  static template = `<div class="{{styles.Task}}">
  <div id="blockC" class="{{isBlue ? styles.BlockBlue : styles.Block}}"  on-click="onClickClass" />
  <div id="blockS" class="{{styles.Block}}" style="{{blockS}}" on-click="onClickStyle" />
  </div>`;

  static dataTypes = {
    styles: DataTypes.object,
  };

  initData() {
    return {
      styles,
      isBlue: false,
      blockS: '',
    };
  }

  static computed = {};

  created() {}

  onClickClass() {
    let isBlue = this.data.get('isBlue');
    this.data.set('isBlue', !isBlue);
  }

  onClickStyle() {
    this.data.set('blockS', 'background: yellow');
  }
}

export default Task;
