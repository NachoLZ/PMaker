import { html, css, LitElement, property } from 'lit-element';

import '@material/mwc-button';
import '@material/mwc-list/mwc-list.js';
import '@material/mwc-list/mwc-list-item.js';

export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--my-element-text-color, #000);
    }
  `;

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h1>HOLA<h1>
      <h2>${this.title} Nr. ${this.counter}!</h2>
      
      <mwc-button @click=${this.__increment}>increment</mwc-button>

      <mwc-list>
        <mwc-list-item>Item 0</mwc-list-item>
        <mwc-list-item>Item 1</mwc-list-item>
        <mwc-list-item>Item 2</mwc-list-item>
        <mwc-list-item>Item 3</mwc-list-item>
      </mwc-list>
    `;
  }
}
