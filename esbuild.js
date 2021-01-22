require("esbuild")
	.build({
		bundle: true,
		define: {
			"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
		},
		entryPoints: ["src/index.js"],
		loader: {
			".js": "jsx",
		},
		outfile: "build/app.js",
		plugins: [require("esbuild-mdx")],
	})
	.catch(() => process.exit(1))
