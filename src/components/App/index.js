import san, { Component } from 'san';
import styles from './index.css';

import Task from '../Task';

class App extends Component {
  static components = {
    task: Task
  };

  static template = `<div class="{{styles.App}}"><task /></div>`;

  initData() {
    return {
      styles
    };
  }
}

export default App;
