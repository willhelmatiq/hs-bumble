import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bm-tab-panels',
  shadow: true,
})
export class BmTabPanels {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
