const mix = require("laravel-mix");


mix.ts("resources/js/app.ts", "public/js").vue({ version: 3 });
mix.postCss("resources/js/assets/app.css", "public/css", [
	require("tailwindcss"),
   ]);

mix.webpackConfig({
    output: {
        filename:'[name].js',
        chunkFilename: 'js/chunks/[name].js',
    },
});