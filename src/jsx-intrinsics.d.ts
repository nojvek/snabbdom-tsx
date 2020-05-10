// ts-eslint has a bug for type imports used in globals
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {JsxVNode, JsxVNodeProps} from './h';

declare global {
  /**
   * opt-in jsx intrinsic global interfaces
   * see: https://www.typescriptlang.org/docs/handbook/jsx.html#type-checking
   */
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    type Element = JsxVNode;
    // TODO: provide better typing for known DOM & SVG elements
    // perhaps autogenerated types from https://github.com/mdn/data like https://github.com/frenic/csstype
    interface IntrinsicElements {
      [elemName: string]: JsxVNodeProps;
    }
  }
}