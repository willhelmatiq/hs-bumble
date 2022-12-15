import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
import { SpacingBottom22, SpacingBottom6 } from '../../design-tokens/js/variables.js';

@Component({
  tag: 'bm-stack',
  styleUrl: 'bm-stack.css',
  shadow: false,
  scoped: true,
})
export class BmStack {

  @Prop({reflect: true})
  orientation: Orientation = 'vertical'

  @Prop({ reflect: true })
  gap: 'large' | 'small' | 'none' = 'small';

  stackStyle = css`
    gap: ${this.gap === 'large' ? SpacingBottom22.bottom : this.gap === 'small' ? SpacingBottom6.bottom : 0}px;
    flex-direction: ${this.orientation === 'horizontal' ? 'row' : 'column'};
  `;

  render() {
    return (
      <div class={this.stackStyle}>
        <slot></slot>
      </div>
    );
  }

}
