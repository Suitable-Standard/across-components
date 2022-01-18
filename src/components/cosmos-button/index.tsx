import type { ComponentInterface } from '@stencil/core';

import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'cosmos-button',
  styleUrl: 'styles.scss',
  shadow: false,
})
export class Button implements ComponentInterface {
  // @Element() private element: HTMLButtonElement | HTMLAnchorElement;

  /**
   * Button type
   * @default normal
   */
  @Prop() public type: 'primary' | 'text' | 'normal' = 'normal';

  /**
   * Button shape
   * @default 'normal'
   */
  @Prop() public shape: 'round' | 'circle' | 'normal' = 'normal';

  public render() {
    return (
      <button
        class={{
          button: true,
          [`bg-${this.type}`]: true,
        }}
      >
        <div class="together-aniamtion"></div>
        <slot></slot>
      </button>
    );
  }
}
