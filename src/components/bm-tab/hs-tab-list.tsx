import { Component, h } from '@stencil/core';
import { css } from '@emotion/css';

@Component({
  tag: 'bm-tab-list',
  shadow: false,
})
export class BmTabList {
  render() {
    const tabListStyles = css`
      box-shadow: inset 0px -18px 0px -17px #CCC;
    `;

    return (
      <div class={tabListStyles}>
        <bm-stack orientation="horizontal" gap="small">
          <slot />
        </bm-stack>
      </div>
    )
  }
}
