# Meteor Typescript Compiler

## Introduction

TypeScript is a statically typed superset of JavaScript that compiles to plain vanilla JavaScript. The language comes with many additions such as classes, scoping, modules and interfaces. See [http://www.typescriptlang.org](http://www.typescriptlang.org) for more information.

With this meteor plugin, TypeScript files (ending is .ts) are automatically compiled to JavaScript as you start the meteor server.

## What's included?

* Transparent compilation of Typescript assets on the Meteor platform.
* Libraries such as **meteor.d.ts** or **node.d.ts** are not bundled with the project (ie. ), please grab them from [https://github.com/meteor-typescript/meteor-typescript-libs](https://github.com/meteor-typescript/meteor-typescript-libs).
* Sample demos built around Meteor+TypeScript can be found in the **samples** folder.

## Install

This version of the module supports Meteor 1.2.x and forward.

* From your Meteor project, type `meteor add meteortypescript:compiler`.
* Add a `.tsconfig` at the top of your project (see below).
* Create a /typings/meteor/ folder at the root of your project, add **meteor.d.ts** ([https://github.com/meteor-typescript/meteor-typescript-libs](https://github.com/meteor-typescript/meteor-typescript-libs)) or any other ts description files you may be interested in.

That's it! From now on, all `*.ts` files are dynamically compiled into Javascript (client and server).

* Refer to the following [coding guidelines](https://github.com/meteor-typescript/meteor-typescript-libs#usage-collections) for more details about how to use Meteor and Typescript together.
* When working with an IDE such as WebStorm, be sure to disable typescript generation.

## tsconfig.json

Almost all options are supported from the [original list]((https://github.com/Microsoft/TypeScript/wiki/Compiler-Options)), except some exceptions.

For instance, a valid `tsconfig.json` looks like:

```json
 {
    compilerOprions: {
      "target": "es5",
      "sourceMap": true,
      "module": "system",
      "target": "es5"
    }
 }
 ```

There are some additional options are available for your convenience.
Check out them [here](https://github.com/barbatus/ts-compilers#typescript-config).

## Typings

There are two ways to add typings:

  - to reference a definition file using sugared syntax in any other `ts`-file:

```
  ///<reference path="typings/foo.d.ts" />
```

  - or add typings in the `files` section of the config:

```
  {
    compilerOptions: {
      ...
    },
    files: {
      "typings/foo.d.ts"
    }
  }
```

> Note: `files` section works only for typings, TypeScript files are just ignored
> since they are passed to the compiler by Meteor anyways.

## Credits

* This package is based on (`ts-compilers`)[[ts-compilers](https://github.com/barbatus/ts-compilers)] TypeScript compilers package.

## Updates
* **Nov 1st 2015** - Compiler module changed to support Meteor 1.2.x
* **Jul 8 2015** - fixed an issue on Windows where zzz.ts-compiler.ts would try and make itself on the C:\ drive if your project was located in My Documents. - Jacob Foster
* **Jul 8 2015** - fixed an issue where tsc could not be found on Windows (must install TypeScript for Visual Studio) - Jacob Foster
* **Feb 22 2015** - support for source maps. comments are now removed from generated files.
* **Feb 17 2015** - typescrypt-compiler v2, batch compilation using tsc - code merged from meteor-tsc, thanks to jason parekh.
* **Oct 26 2014** - Upgraded package to latest atmosphere, fixed issues with caching.
* **March 2014** - meteortypescript organization is now live. please join and contribute.
* **May 6 2014** - switched internal compiler to ts-compiler, full support for ts 1.0.
