import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'bm-badge',
  styleUrl: 'bm-badge.css',
  shadow: false,
})
export class BmBadge {
  
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
