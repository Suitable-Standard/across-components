import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'cosmos-select',
  shadow: false,
})
export class Select {
  @Prop() public todoTitle: string;

  render() {
    return (
      <div class="m-5">
        <span class="mr-2">{this.todoTitle}</span>

        <button type="submit">Buy now</button>
      </div>
    );
  }
}
