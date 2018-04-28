import san, { Component, DataTypes } from 'san';

import rName from '../../utils/rName';

// import User from '../../Model/UserModel';

import styles from './index.css';

class Cycle extends Component {
  static template = `<div class="{{styles.Cycle}}">
    <div><button on-click="add">添加</button></div>
    <table>
      <thead>
        <tr>
          <th>姓名</th>
          <th>审核状态</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr s-for="item,index in items">
          <th>{{item.name}}</th>
          <th>{{item.status === true ? '合格' : item.status === false ? '不合格': '待审核'}}</th>
          <th><button on-click="operate(index)">{{(item.status === true || item.status === false) ? '删除': '审核'}}</button></th>
        </tr>
      </tbody>
    </table>
  </div>`;

  static dataTypes = {
    items: DataTypes.array
  };

  initData() {
    return {
      styles,
      items: []
    };
  }

  static computed = {};

  created() {
    this.init();
  }

  add(e) {
    const user = { name: rName(), status: null };
    this.data.push('items', user);
  }

  operate(index) {
    const items = this.data.get('items');
    const item = items[index];
    if (item.status === true || item.status === false) {
      this.data.removeAt('items', index);
    } else {
      this.data.set(`items[${index}].status`, true);
    }
  }

  init() {
    const items = [
      {
        name: '张三',
        status: true
      },
      {
        name: '李四',
        status: false
      },
      {
        name: '王五',
        status: null
      }
    ];
    this.data.set('items', items);
  }
}

export default Cycle;
