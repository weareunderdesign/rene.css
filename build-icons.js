const fs = require("fs");
const path = require("path");

const dir = path.resolve(__dirname, "icons");
const out = path.resolve(__dirname, "icons.svg");

const symbols = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith(".svg"))
  .sort()
  .map((f) => {
    const name = f.slice(0, -4);
    const svg = fs.readFileSync(path.join(dir, f), "utf8");
    const viewBox = svg.match(/viewBox="([^"]*)"/)[1];
    const inner = svg
      .replace(/^[\s\S]*?<svg[^>]*>/, "")
      .replace(/<\/svg>[\s\S]*$/, "")
      .trim();
    return `  <symbol id="${name}" viewBox="${viewBox}">${inner}</symbol>`;
  });

fs.writeFileSync(
  out,
  `<svg xmlns="http://www.w3.org/2000/svg">\n${symbols.join("\n")}\n</svg>\n`
);

console.log(`Built ${out} from ${symbols.length} icons`);
