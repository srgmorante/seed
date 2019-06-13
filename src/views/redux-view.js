import { LitElement, html, css } from 'lit-element';
import { CustomStyles, ViewStyle } from '../utils/custom-styles';

class ReduxView extends LitElement {

  static get styles() {
    return [
      CustomStyles,
      ViewStyle,
      css`
        :host{
          background-image: url('assets/backgrounds/keyboard.jpg');
        }
      `,
    ];
  }

  constructor() {
    super();  
  }

  render() {
    return html`
      <section>
        <h1>Redux</h1>
        <hr>
        <h3>A predictable state container for JavaScript apps.</h3>
        <p>Redux is a predictable state container for JavaScript apps.It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.
        You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.</p>
        <a href="https://redux.js.org/" class="custom-link red" target="_blank">Learn more about Redux</a>
      </section>
    `;
  }
}

window.customElements.define('redux-view', ReduxView);
