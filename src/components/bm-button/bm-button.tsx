import { Component, h, Prop, Event } from '@stencil/core';

@Component({
  tag: 'bm-button',
  styleUrl: 'bm-button.css',
  shadow: false, // Disable Shadow DOM to benefit from global styles defined in Design Tokens
})
export class BmButton {

  @Prop()
  variant = "primary";

  @Prop()
  size = "medium";

  // @Prop()
  // state = "active";

  @Event({})
  clicked;

  clickHandler(e) {
    this.clicked.emit(e);
  }

  render() {
    return (
      <button class={`${this.variant} ${this.size}`} onClick={(e) => this.clickHandler(e)}>
        <slot></slot>
      </button>
    );
  }

}
