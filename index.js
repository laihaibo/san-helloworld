import san from 'san';

class App extends san.Component {
  static template = `<div>hello {{name}}</div>`;

  initData() {
    return {
      name: san,
    };
  }
}

new App().attach(document.getElementById('root'));
