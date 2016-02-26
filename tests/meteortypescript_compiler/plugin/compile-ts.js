'use strict';

Plugin.registerCompiler({
  extensions: ['ts','tsx'],
  filenames: ['tsconfig.json']
}, () => new TsCompiler());
