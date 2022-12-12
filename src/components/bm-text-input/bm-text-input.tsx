import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'hs-text-input',
  styleUrl: 'bm-text-input.css',
  shadow: false,
  scoped: true,
})
export class BmTextInput {

  @Element()
  hostElement: HTMLElement;

  @Prop({ reflect: true })
  fontStyle : 'normal' | 'italic' | 'oblique' | 'inherit';


  render() {

    // const Tag = `h${this.fontStyle}`;
    // className={`align-${this.fontStyle}`}

    return (
      <input type="text" >
        <slot></slot>
      </input>
    );
  }

}
