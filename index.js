const esbuild = require("esbuild");

esbuild
  .serve(
    {
      servedir: "./public",
      port: 3000,
    },
    {
      entryPoints: ["./src/index.js"],
      bundle: true,
      outfile: "./public/bundle.js",
    }
  )
  .then((server) => {
    console.log(`Server is running on http://localhost:${server.port}`);
  });
