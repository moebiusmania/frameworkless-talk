'use strict';

import styles from './ext.styles.js';

export default class Slide extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(){
    const title = this.getAttribute('title') || 'Title';

    this.root.innerHTML = /*html*/`
      ${styles.slide}
      <article>
        <h3>${title}</h3>
        <slot></slot>
      </article>
    `;
  }
}

customElements.define('regular-slide', Slide);