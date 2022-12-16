import { Component, Host, h, Event, EventEmitter, Element, State, Method } from '@stencil/core';

@Component({
  tag: 'bm-tab',
  styleUrl: 'bm-tab.css',
  shadow: false,
})
export class BmTab {
  @State()
  isSelected = false;

  @Element()
  hostElement;

  @Event({ eventName: 'tabClick' })
  clickEventEmitter: EventEmitter;

  @Method()
  async toggleSelected(selected: boolean) {
    this.isSelected = selected;
  }

  tabClickHandler() {
    const tabs = this.hostElement.parentNode.children;

    for (let index = 0; index < tabs.length; index++) {
      if (tabs[index] === this.hostElement) {
        this.clickEventEmitter.emit(index);
      }
    }
  }

  render() {
    return (
      <Host>
        <div class={this.isSelected ? 'bm-tab--selected' : 'bm-tab'} onClick={this.tabClickHandler.bind(this)}>
          <slot />
        </div>
      </Host>
    );
  }

}
