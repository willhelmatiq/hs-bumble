import { Component, h } from '@stencil/core';

@Component({
  tag: 'bm-card',
  styleUrl: 'bm-card.css',
  shadow: false,
})
export class BmCard {

  render() {
    return (
      <div class='card'>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec imperdiet arcu non erat eleifend congue. 
        Phasellus pretium accumsan risus scelerisque dictum.
        Nulla mollis quam non arcu sagittis tincidunt. 
        Fusce vitae dapibus erat. Suspendisse porttitor euismod scelerisque. 
        Praesent viverra dapibus euismod. Donec sed nisl mauris. Quisque ac turpis sem.
        </p>
    </div>
    );
  }

}
