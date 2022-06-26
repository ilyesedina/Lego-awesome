import { html, LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement(`column-layout`)
export class ColumnLayout extends LitElement {
    size="";
    static get properties() {
      return {
        size: {type: String},
      };
    }
    
    static styles = css`
  :host {
    --primary: hsl(39, 86%, 55%);
    --inactive: hsl(240, 6%, 90%);
    --secondary: rgb(208, 2, 27);
    --tertiary-bg: hsl(0, 0%, 98%);
    --btn-primary: hsl(216, 44%, 49%);
    --btn-secondary: hsl(210, 51%, 74%);
    --footer: rgb(32, 29, 72);
    --text-color: hsl(0, 0%, 0%); 
    --lighness: 50%;
    --light-blue-bg: rgb(235,251
        ,251);
    --div-margin: 10px; 
    --white: hsl(0, 0%, 100%);
}
body{
    font-family: 'Cera Pro';
}
.custom-column{
    background-color: var(--light-blue-bg);
    width: 33%;
    height: 170px;
    display: inline-block;
    margin: -1px;
    position: relative;
}
h2{
    margin: 10px 0px;
}
/* .number-ratting{
    color: var(--text-color);
    position: absolute;
    margin-top: 130px;
    left: 20%;
    font-size: 13px;
} */

  `;

    render() {
        return html`
    <!-- your component here -->
        <div class="custom-column">
            <case-rating size=${this.size}></case-rating>
        </div>
        <span class="number-ratting"></span>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'column-layout': ColumnLayout;

    }
}
