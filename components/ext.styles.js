'use strict';

const slide = /*html*/`
  <style>
    :host {
      display: block;
    }
    
    article{
      background-color: white;
      border-radius: 5px;
      padding: 20px 50px;
      box-shadow: 0px 0px 30px rgba(0,0,0,0.3);
      min-height: 100%;
    }

    article h3{
      text-transform: uppercase;
      font-size: 1.5em;
    }
  </style>
`;

const styles = { slide };

export default styles;