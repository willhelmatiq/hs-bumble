import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'bm-list',
  styleUrl: 'bm-list.css',
  shadow: false,
})
export class BmList {

  @Prop()
  variant='unordered';

  render() {
    return (
        <ul>
          <li>List</li>
          <li>List</li>
        </ul>
    );
  }

}
