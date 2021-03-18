import { Component, h, Method } from '@stencil/core';
import { Name } from './resources';

@Component({
  tag: 'my-pupper',
  shadow: true,
})
export class MyPupper {
  @Method()
  saySomething(name: Name): void {
    console.log(name);
  }

  render() {
    return <div>🐶</div>;
  }
}
