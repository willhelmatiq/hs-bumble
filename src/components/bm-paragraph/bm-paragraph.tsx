import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'bm-paragraph',
  styleUrl: 'bm-paragraph.css',
  shadow: true,
})
export class BmParagraph {

  @Prop({ reflect: true })
  textAlign: 'left' | 'right' | 'center' = 'left';

  @Prop({ reflect: true })
  fontSize: 'small' | 'medium' | 'large' = 'medium';
  render() {
    return (
      <p class={`align-${this.textAlign} ${this.fontSize}`}>
        <slot></slot>
      </p>
    );
  }

}
