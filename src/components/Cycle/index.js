import san, { Component, DataTypes } from 'san';
import styles from './index.css';

class Cycle extends Component {
  static template = `<div class="{{styles.Cycle}}">
    <div>
      <input type="text" value="{= name =}" placeholder="姓名（string）" />
      <input id="age" type="number" value="{= age =}" placeholder="年龄（number）" min="{{1}}" />
      <input type="text" value="{= desc =}" placeholder="简介（string）"  />
    </div>
    <div>
      <button on-click="clear">移除信息</button>
    </div>
    <div>
      <p>姓名：{{name}}</p>
      <p>年龄：{{getAge}}</p>
      <p>简介：{{desc}}</p>
    </div>
  </div>`;

  static dataTypes = {
    name: DataTypes.string,
    age: DataTypes.number,
    desc: DataTypes.string
  };

  initData() {
    return {
      styles,
      name: '',
      age: 1,
      desc: ''
    };
  }

  static computed = {
    getAge() {
      const age = this.data.get('age');
      return age ? age : '';
    }
  };

  clear() {
    this.data.set('name', '');
    this.data.set('age', 1);
    this.data.set('desc', '');
  }
}

export default Cycle;