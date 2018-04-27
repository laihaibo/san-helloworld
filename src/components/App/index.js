import san, { Component } from 'san';
import styles from './index.css';

import Operator from '../Operator';

class App extends Component {
  static components = {
    opreator: Operator
  };

  static template = `<div class="{{styles.App}}">hello {{name}}
  <opreator></opreator>
  </div>`;

  initData() {
    return {
      name: 'world',
      styles
    };
  }
}

export default App;
