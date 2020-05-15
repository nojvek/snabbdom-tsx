# snabbdom-jsx-lite

[![Build](https://github.com/nojvek/snabbdom-jsx-lite/workflows/build/badge.svg?branch=master)](https://github.com/nojvek/snabbdom-jsx-lite/actions?query=workflow%3Abuild)
[![NPM version](https://img.shields.io/npm/v/snabbdom-jsx-lite.svg)](https://www.npmjs.com/package/snabbdom-jsx-lite)

Write snabbdom templates in .tsx with Typescript or via Babel in .jsx files.

[JSX](https://facebook.github.io/jsx/) is an XML-like syntax extension to JavaScript (ECMAScript).

[Typescript support for JSX](https://www.typescriptlang.org/docs/handbook/jsx.html) supports embedding, type checking,
and compiling JSX directly to JavaScript.

Instead of using snabbdom's `h` (hyperscript function `h(tag, data, children)`) to define the virtual tree,
with `snabbdom-jsx-lite`, you get an similar `h` function that is JSX compatible with Babel and Typescript.

Top level props can be any of the the [initialized snabbdom modules](https://github.com/snabbdom/snabbdom#modules-documentation)
such as `class`, `attrs`, `props`, `on`, `style`, `hooks` e.t.c.

### JSX with Typescript

Install: `yarn add snabbdom-jsx-lite`

tsconfig.json

```json
{
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "jsx"
  }
}
```

NOTE: `jsxFragmentFactory` compiler option is still being worked on in Typescript. See [Typescript PR #35392](https://github.com/microsoft/TypeScript/pull/35392)

profile.tsx

```tsx
import {jsx} from 'snabbdom-jsx-lite';

const profile = (
  <div>
    {/* `sel` is css selector shorthand, <img sel=".profile" /> is same as <img class={profile: true} /> */}
    <img sel=".profile" attrs={{src: 'avatar.png'}} />
    <h3>{[user.firstName, user.lastName].join(' ')}</h3>
  </div>
);
```

### JSX with Babel

Install: `yarn add snabbdom-jsx-lite @babel/plugin-transform-react-jsx`

.babelrc

```json
{
  "plugins": [
    [
      "@babel/plugin-transform-react-jsx",
      {
        "pragma": "jsx",
        "pragmaFrag": "Frag"
      }
    ]
  ]
}
```

profile.jsx

```jsx
import {jsx} from 'snabbdom-jsx-lite';

const profile = (
  <div>
    <img sel=".profile" attrs={{src: 'avatar.png'}} />
    <h3>{[user.firstName, user.lastName].join(' ')}</h3>
  </div>
);
```

## Example & Demo

A Clock App example is in provided in the repo that uses Functional Components and Fragments.
See [example/app.tsx](example/app.tsx)

Demo is available at [nojvek.github.io/snabbdom-jsx-lite](https://nojvek.github.io/snabbdom-jsx-lite/)

![snabbdom-jsx-lite demo](https://user-images.githubusercontent.com/1018196/81493451-4ecaa400-9255-11ea-9c57-1dcefff519ea.png)

### Performance

`snabbdom-jsx-lite`'s `jsx` function is as performant as `snabbdom`'s `h` function.
It avoids expensive string manipulation like other snabbdom-jsx libraries.

### JSX examples

- [TSX Clock](http://snabbdom.github.io/snabbdom/examples/tsx-clock/)
- [TSX Clock source](examples/tsx-clock/)

### Third party JSX modules

These notable third party modules support an optional flattened flavor of jsx.

- [snabbdom-pragma](https://github.com/Swizz/snabbdom-pragma)
- [snabbdom-jsx](https://github.com/snabbdom-jsx/snabbdom-jsx)
