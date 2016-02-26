Package.describe({
	name: "meteortypescript:compiler",
	summary: "TypeScript is a staticaly typed superset of JavaScript",
	git: "https://github.com/meteor-typescript/meteor-typescript-compiler.git",
	version: "3.1.0"
});

Package.registerBuildPlugin({
	name: 'compileTypescript',
	sources: [
		'plugin/compile-ts.js'
	],
	use: [
		'barbatus:ts-compilers@0.2.8_4',
		'ecmascript@0.1.4'
	]
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.0.1');
	api.use([
		'isobuild:compiler-plugin@1.0.0'
	], 'server');
});
