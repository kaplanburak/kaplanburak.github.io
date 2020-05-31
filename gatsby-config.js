const path = require("path");

module.exports = {
    plugins: [
        {
            resolve: "gatsby-plugin-alias-imports",
            options: {
                alias: {
                    "@Components": path.resolve(__dirname, "src/components/index.js"),
                    "@Sketches": path.resolve(__dirname, "src/sketches/index.js"),
                },
            },
        },
    ],
};
