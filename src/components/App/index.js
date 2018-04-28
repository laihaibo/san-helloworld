import san, { Component } from 'san';
import styles from './index.css';

class App extends Component {
  static template = `<div class="{{styles.App}}">hello {{name}}</div>`;

  initData() {
    return {
      name: 'world',
      styles
    };
  }
}

export default App;
