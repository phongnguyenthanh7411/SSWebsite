Có 1 vài issue như sau trong file 'D:\sswebsite\tsconfig.json' là :


1. Option 'target=ES5' is deprecated and will stop functioning in TypeScript 7.0. Specify compilerOption '"ignoreDeprecations": "6.0"' to silence this error. Modern browsers support all ES6 features, so ES6 is a good choice. You might choose to set a lower target if your code is deployed to older environments, or a higher target if your code is guaranteed to run in newer environments.

The target setting changes which JS features are downleveled and which are left intact. For example, an arrow function () => this will be turned into an equivalent function expression if target is ES5 or lower.

Changing target also changes the default value of lib. You may "mix and match" target and lib settings as desired, but you could just set target for convenience.

For developer platforms like Node there are baselines for the target, depending on the type of platform and its version. You can find a set of community organized TSConfigs at tsconfig/bases, which has configurations for common platforms and their versions.

The special ESNext value refers to the highest version your version of TypeScript supports. This setting should be used with caution, since it doesn't mean the same thing between different TypeScript versions and can make upgrades less predictable.

As of TypeScript 6.0, the default is es2025, which advances alongside the ECMAScript standard.


2. Option 'baseUrl' is deprecated and will stop functioning in TypeScript 7.0. Specify compilerOption '"ignoreDeprecations": "6.0"' to silence this error.
  Visit https://aka.ms/ts6 for migration information., Sets a base directory from which to resolve bare specifier module names. For example, in the directory structure:

project
├── ex.ts
├── hello
│ └── world.ts
└── tsconfig.json

With "baseUrl": "./", TypeScript will look for files starting at the same folder as the tsconfig.json:

import { helloWorld } from "hello/world";

console.log(helloWorld);

This resolution has higher priority than lookups from node_modules.

This feature was designed for use in conjunction with AMD module loaders in the browser, and is not recommended in any other context. As of TypeScript 4.1, baseUrl is no longer required to be set when using paths.