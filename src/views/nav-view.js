import { LitElement, html, css } from 'lit-element';
import { GlobalStyles } from '../utils/global-styles';

class NavView extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      GlobalStyles,
      css`
        :host {
          display: flex;
          justify-content: center;
          background-color: black;
        }
        .nav-list {
          display: flex;
          align-items: center;
          flex-flow: row wrap;
          justify-content: center;
        }

        a {
          padding:10px;
          text-decoration: none;
          color: white;
          transform: all 1s;
          cursor: pointer;
        }

        a:hover {
          color: var(--app-color-blue-light);
        }

        

        .active {
          border-bottom: 1px solid #929191;
          border-top-right-radius: 10px;
          color: var(--app-color-blue-light);
          animation: all 1s;
        }


        @media (min-width: 768px) {
          .nav-list {
            flex-direction: column;
          }

          a {
            padding:20px;
          }
        }
      `,
    ];
  }

  constructor() {
    super();

    this.navList = [
      {
        route: '/',
        name: 'Home'
      },
      {
        route: '/rollup',
        name: 'RollUp'
      },
      {
        route: '/123',
        name: 'Lit-Element'
      },
      {
        route: '/123',
        name: 'Vaadin'
      },
      {
        route: '/redux',
        name: 'Redux'
      },
    ];
  }

  firstUpdated(){
    this.setActiveViaPath();
  }

  render() {
    return html`
     <div class="nav-list">
        ${this.navList.map((x, i) => html `
          <a href="${x.route}" @click="${() => this.setActive(i)}">${x.name}</a>
        `)}
     </div>
    `;
  }

  setActiveViaPath() {
    this.navList.forEach((x, i) => {
      if (x.route === location.pathname) this.setActive(i);
    }); 
  }

  setActive(index){
    const navList = this.shadowRoot.querySelectorAll('a');

    navList.forEach((x, i) => {
      x.className = (x.className === 'active' && i !== index) ? '' : (i == index) ? 'active' : '';
    }); 
  } 
}

window.customElements.define('nav-view', NavView);