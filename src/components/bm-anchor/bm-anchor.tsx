import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'bm-anchor',
  styleUrl: 'bm-anchor.css',
  shadow: false,
})
export class BmAnchor {

  @Prop()
  variant = 'default';

  render() {
    return (
      <a class={`${this.variant}`}>
        <slot></slot>
      </a>
    );
  }

}
