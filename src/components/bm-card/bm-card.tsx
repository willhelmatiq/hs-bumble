import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'bm-card',
  styleUrl: 'bm-card.css',
  shadow: false,
})
export class BmCard {

  @Prop()
  variant = 'default';

  render() {
    return (
      <div class={`${this.variant}`}>
      <slot></slot>
    </div>
    );
  }

}
