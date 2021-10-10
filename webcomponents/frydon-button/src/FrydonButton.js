import { html, css, LitElement } from 'lit';

export class FrydonButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 5px;
        color: var(--frydon-button-text-color, #000);
        /* background-color: red; */
        width: fit-content;
      }
      /* button {
        background-color: gray;
        width:100%


      } */

      button {
        align-items: center;
        appearance: none;
        background-clip: padding-box;
        background-color: initial;
        background-image: none;
        border-style: none;
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        flex-direction: row;
        flex-shrink: 0;
        font-family: Eina01, sans-serif;
        font-size: 16px;
        font-weight: 800;
        justify-content: center;
        line-height: 14px;
        margin: 0;
        min-height: 34px;
        outline: none;
        overflow: visible;
        padding: 19px 26px;
        pointer-events: auto;
        position: relative;
        text-align: center;
        text-decoration: none;
        text-transform: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: middle;
        width: auto;
        word-break: keep-all;
        z-index: 0;
      }

      @media (min-width: 768px) {
        button {
          padding: 19px 32px;
        }
      }

      button:before,
      button:after {
        border-radius: 80px;
      }

      button:before {
        /* background-image: linear-gradient(92.83deg, #ff7426 0, #f93a13 100%); */
        background-image: linear-gradient(92.83deg, #ff7426 0, #ff7426 100%);
        content: '';
        display: block;
        height: 100%;
        left: 0;
        overflow: hidden;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -2;
      }

      button:after {
        background-color: initial;
        /* background-image: linear-gradient(#541a0f 0, #0c0d0d 100%); */
        background-image: linear-gradient(#000000 0, #000000 100%);
        bottom: 4px;
        content: '';
        display: block;
        left: 4px;
        overflow: hidden;
        position: absolute;
        right: 4px;
        top: 4px;
        transition: all 100ms ease-out;
        z-index: -1;
      }

      button:hover:not(:disabled):before {
        background: linear-gradient(
          92.83deg,
          rgb(255, 116, 38) 0%,
          rgb(249, 58, 19) 100%
        );
      }

      button:hover:not(:disabled):after {
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
        transition-timing-function: ease-in;
        opacity: 0;
      }

      button:active:not(:disabled) {
        color: #ccc;
      }

      button:active:not(:disabled):before {
        background-image: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0.2)
          ),
          linear-gradient(92.83deg, #ff7426 0, #ff7426 100%);
      }

      button:active:not(:disabled):after {
        background-image: linear-gradient(#000000 0, #000000 100%);
        bottom: 4px;
        left: 4px;
        right: 4px;
        top: 4px;
      }

      button:disabled {
        cursor: default;
        opacity: 0.24;
      }
    `;
  }

  static get properties() {
    return {
      text: { type: String },
    };
  }

  constructor() {
    super();
    this.text = 'Hellow World';
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html` <button @click=${this.__increment}>${this.text}</button> `;
  }
}
