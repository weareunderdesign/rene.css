# René

## A utility-first CSS framework for building clean, simple and lightweight interfaces, fully customizable with variables, themes, and icons. Easy syntax to quickly "get it" and create any design in any framework. No weird stuff.

## How to create a rene.css and rene.min.css for all your css

1. Firstly put all your css inside the `styles` directory present inside `src`.
2. Then import your css files in the index.css file present in the `src` directory.
3. Then run `npm run build-dev` to create the `rene.css` file which you can find inside the `dist` directory present in the root directory of the project.

#### To generate minified css with no comments

1. Follow the step 1 and step 2 above.
2. Run `npm run build-prod` to create the `rene.min.css` file which you can find inside the `dist` directory present in the root directory of the project.

> The bundled css holds the css in the same sequence in which you import the css files inside `index.css` file. So if you import `a.css` before `b.css` then the bundled css will hold `a.css` before `b.css`. The CSS will be applied on the basis of the specificity of the css.
