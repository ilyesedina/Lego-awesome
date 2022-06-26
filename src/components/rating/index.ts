import { html, LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement(`case-rating`)
export class CaseRating extends LitElement {
  size="";
  static get properties() {
    return {
      size: {type: String},
    };
  }
  
  static styles = css`
  :root {
    --primary: hsl(39, 86%, 55%);
    --inactive: hsl(240, 6%, 90%);
    --secondary: rgb(208, 2, 27);
  }
  .star_rating-s {
    font-size: 7px;
  }
  .star_rating-m {
    font-size: 9px;
  }
  .star_rating-l {
    font-size: 11px;
  }
  #star_rating svg {
    width: 1em;
    height: 1em;
    fill: currentColor;
    stroke: currentColor;
  }
  #star_rating label, #star_rating output {
    display: block;
    float: left;
    font-size: 2em;
    height: 1.2em;
    color: var(--primary);
    cursor: pointer;
      position: relative;
    /* Transparent border-bottom avoids jumping
       when a colored border is applied
       on :hover/:focus */
    border-bottom: 2px solid transparent;
  }
  #star_rating output {
    font-size: 1.5em;
    padding: 0 1em;
  }
  #star_rating input:checked ~ label {
    color: var(--inactive);
  }
  #star_rating input:checked + label {
    color: var(--primary);
    border-bottom-color: var(--primary);
  }
  #star_rating input:focus + label {
    border-bottom-style: dotted;
  }
  #star_rating:hover input + label {
    color: var(--primary);
  }
  #star_rating input:hover ~ label,
  #star_rating input:focus ~ label,
  #star_rating input[id="star0"] + label {
    color: var(--inactive);;
  }
  #star_rating input:hover + label,
  #star_rating input:focus + label {
    color: var(--primary);
  }
  #star_rating input[id="star0"]:checked + label {
    color: var(--secondary);
  }
  #star_rating [type="submit"] {
    float: none;
  }
  .visuallyhidden {
      display: table-column-group;
  }
  .hidden{
      /* display: table-column-group; 
      display: none; */
      position: absolute;
      margin-top: 12px;
      margin-left: 10px;
      width: 1px;
      height: 1px;
  }
  `;

  render() {
    console.log(this.size)
    switch (this.size) {
      case "sm":
        this.size = "star_rating-s"
        break;
        case "m":
          this.size = "star_rating-m"
          break;
          case "l":
            this.size = "star_rating-l"
            break;
      default:
        break;
    }

    return html`<div>
    <form action="#" id="star_rating" class=${this.size}>
    <input value="0" id="star0" checked
       type="radio" name="rating" class="hidden">
       <label for="star0">
           <span class="visuallyhidden">0 Stars</span>
           <svg viewBox="0 0 512 512">
               <g stroke-width="70" stroke-linecap="square">
                   <path d="M91.5,442.5 L409.366489,124.633512"></path>
                   <path d="M90.9861965,124.986197 L409.184248,443.184248"></path>
               </g>
           </svg>
       </label>
   
       <input value="1" id="star1"
           type="radio" name="rating" class="hidden">
       <label for="star1">
           <span class="visuallyhidden">1 Star</span>
           <svg viewBox="0 0 512 512"><path d="M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769z"></path></svg>
       </label>
   
       <input value="2" id="star2"
           type="radio" name="rating" class="hidden">
       <label for="star2">
           <span class="visuallyhidden">2 Stars</span>
           <svg viewBox="0 0 512 512"><path d="M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769z"></path></svg>
       </label>
   
       <input value="3" id="star3"
           type="radio" name="rating" class="hidden">
       <label for="star3">
           <span class="visuallyhidden">3 Stars</span>
           <svg viewBox="0 0 512 512"><path d="M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769z"></path></svg>
       </label>
   
       <input value="4" id="star4"
           type="radio" name="rating" class="hidden">
       <label for="star4">
           <span class="visuallyhidden">4 Stars</span>
           <svg viewBox="0 0 512 512"><path d="M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769z"></path></svg>
       </label>
   
       <input value="5" id="star5"
           type="radio" name="rating" class="hidden">
       <label for="star5">
           <span class="visuallyhidden">5 Stars</span>
           <svg viewBox="0 0 512 512"><path d="M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769z"></path></svg>
       </label>
   </form> </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'case-rating': CaseRating;
  }
}
