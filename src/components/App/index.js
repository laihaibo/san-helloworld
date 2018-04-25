import san, { Component } from 'san';
import styles from './index.css';

// class App extends Component {
//   static template = `<div class="{{styles.App}}">hello {{name}}</div>`;

//   initData() {
//     return {
//       name: 'world',
//       styles,
//     };
//   }
// }

const App = san.defineComponent({
  template: '<div>hello {{name}}!</div>',

  initData: function() {
    return {
      name: 'world',
    };
  },
});

export default App;
