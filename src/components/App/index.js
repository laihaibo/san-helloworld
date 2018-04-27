import san, { Component } from 'san';
import styles from './index.css';

import Cycle from '../Cycle';
class App extends Component {
  static components = {
    opreator: Operator
  };

  static template = `<div class="{{styles.App}}">hello {{name}}</div>`;

  initData() {
    return {
      name: 'world',
      styles
    };
  }
}

// const App = san.defineComponent({
//   template: '<div>hello {{name}}!</div>',

//   initData: function() {
//     return {
//       name: 'world',
//     };
//   },
// });

export default App;
