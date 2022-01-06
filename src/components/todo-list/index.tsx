import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'todo-list',
  styleUrl: 'todo-list.css',
  shadow: false,
})
export class TodoList {
  @Prop() public todoTitle: string;

  render() {
    return (
      <div>
        A TodoList here.
        {this.todoTitle && <h3 class="specialTitle">special property: {this.todoTitle}</h3>}
      </div>
    );
  }
}
