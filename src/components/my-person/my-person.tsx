import { Component, h, Method } from '@stencil/core';
import { Name } from './resources';

@Component({
  tag: 'my-component',
  shadow: true,
})
export class MyPerson {
  @Method()
  saySomething(name: Name): void {
    console.log(name);
  }

  render() {
    return <div>😄</div>;
  }
}
