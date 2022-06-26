import { html, LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement(`row-layout`)
export class RowLayout extends LitElement {
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
    --light-blue-bg: rgb(235,251,251);
    --div-margin: 10px; 
    --white: hsl(0, 0%, 100%);
}
body{
    font-family: 'Cera Pro';
}
.content-grid{
    margin: 30px 40px;
}
.custom-row{
    background-color: var(--white);  
}

  `;

    render() {
        return html`
    <div class="content-grid">
    <!-- your component here -->

        <h2>Size</h2>
        <div class="custom-row">
        <column-layout size="l">
        </column-layout>
        <column-layout size="m">
        </column-layout>
        <column-layout size="sm">
        </column-layout>

        <h2>State</h2>
        <div class="custom-row">
        <column-layout size="l" bgcolor="row_color-gray">
        </column-layout>
        <column-layout size="l" bgcolor="row_color-gray">
        </column-layout>
        <column-layout size="l" bgcolor="row_color-gray">
        </column-layout>

    </div>
  </div>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'row-layout': RowLayout;

    }
}
