import { __decorate } from "tslib";
import { html, css, LitElement, property } from 'lit-element';
import '@material/mwc-button';
import '@material/mwc-list/mwc-list.js';
import '@material/mwc-list/mwc-list-item.js';
export class MyElement extends LitElement {
    constructor() {
        super(...arguments);
        this.title = 'Hey there';
        this.counter = 5;
    }
    __increment() {
        this.counter += 1;
    }
    render() {
        return html `
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
MyElement.styles = css `
    :host {
      display: block;
      padding: 25px;
      color: var(--my-element-text-color, #000);
    }
  `;
__decorate([
    property({ type: String })
], MyElement.prototype, "title", void 0);
__decorate([
    property({ type: Number })
], MyElement.prototype, "counter", void 0);
//# sourceMappingURL=MyElement.js.map