import san, { Component, DataTypes } from 'san';

import styles from './index.css';

class Task extends Component {
  static template = `<div class="{{styles.Task}}">
  <div>
    <button on-click="toggle">TOGGLE</button>
    <span s-if="show" s-transition="hook">
      Transition Layer
    </span>
  </div>
  </div>`;

  static dataTypes = {
    show: DataTypes.bool
  };

  initData() {
    return {
      styles,
      show: true
    };
  }

  static computed = {};

  created() {}

  toggle() {
    this.data.set('show', !this.data.get('show'));
  }

  hook = {
    enter(el, done) {
      const steps = 20;
      let curStep = 0;

      function goStep() {
        if (curStep >= steps) {
          el.style.opacity = 1;
          done();
          return;
        }

        el.style.opacity = 1 / steps * curStep++;
        requestAnimationFrame(goStep);
      }

      goStep();
    },
    leave(el, done) {
      const steps = 20;
      let curStep = 0;

      function goStep() {
        if (curStep >= steps) {
          el.style.opacity = 0;
          done();
          return;
        }

        el.style.opacity = 1 - 1 / steps * curStep++;
        requestAnimationFrame(goStep);
      }

      goStep();
    }
  };
}

export default Task;
