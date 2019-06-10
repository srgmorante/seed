import { LitElement, html, css } from 'lit-element';
import { CustomStyles } from '../utils/custom-styles';


class VaadinView extends LitElement {

  static get styles() {
    return [
      CustomStyles,
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
        <h1>VaadinView</h1>
        <p>Lorem ipsum with RollUp custom configuraiton, LitElement library, Vaadin Routing and Redux</p>
        <a href="/rollup" class="custom-link">Quick start</a>
      </section>
    `;
  }
}

window.customElements.define('vaadin-view', VaadinView);
