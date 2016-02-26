
TsBatchCompiler = class TsBatchCompiler extends TsBasicCompiler  {
  constructor(tsconfig) {
    super(tsconfig);
  }

  processFilesForTarget(files) {
    let tsFiles = this.processFilesForTargetInternal(files);

    TypeScript.transpileFiles(tsFiles, {
      compilerOptions: this.tsconfig.compilerOptions,
      typings: this.tsconfig.typings,
      filePath: file => this.getAbsoluteImportPath(file),
      moduleName: file => this.getAbsoluteImportPath(file, true)
    }, (file, referencedPaths, diagnostics, result) => {
      this.processDiagnostics(file, diagnostics);

      var result2 = {bare: true};
      for (var k in result)
        result2[k] = result[k];

      file.addJavaScript(result2);
    });
  }
}
