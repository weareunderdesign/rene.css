# Contributing to Rene.css

A big welcome and thank you for considering contributing to Rene.css!

## Get Started

1. Fork the repository to your own Github account.
2. Now, let's clone this repository.

   ```
   git clone <https://github.com/rnbwdev/rene.css.git>
   ```

3. Create a branch locally with a succinct but descriptive name
4. Commit changes to the branch
5. Following any formatting and testing guidelines specific to this repo
6. Push changes to your fork.

## Bundle and Minify `rene.css`

Go to `rene.css` directory by running:

```
cd rene.css
```

And then run:

```
npm run rene.min
```

You’ll find the generated file at `/dist/rene.min.css`

> The bundled file stores the CSS in the same order you import inside the /src/index.css file.

## Publish a new package

To publish a new package version, follow these simple steps:
1. Update `package.json`: Increment the version number in your `package.json` file according to semantic versioning.
2. Commit Changes.
3. Push Changes in `main` branch.
4. GitHub Actions will automatically trigger the workflow to create a release based on the updated version in `package.json` and publish the new package version.

### GitHub Actions Workflow Overview

The workflow file [`release-on-version-change.yml`](https://github.com/rnbwdev/rene.css/blob/main/.github/workflows/release-on-version-change.yml) runs ***Version Check*** and ***Release Creation*** actions.
The workflow file [`publish-npm-package.yml`](https://github.com/rnbwdev/rene.css/blob/main/.github/workflows/publish-npm-package.yml) runs ***Publish NPM Package*** action.

1. ***Version Check***: Checks if the version in the `npm package.json` matches the version in the GitHub repository.
2. ***Release Creation***: Creates a GitHub release when the version in `npm package.json` is different from the version in the GitHub repository.
3. ***Publish NPM Package***: Publishes a new package version when a release is created.

## Code of Conduct

We take our open-source community seriously and hold ourselves and other contributors to high communication standards. You agree to uphold our [Code of Conduct](https://github.com/relateapp/rene.css/blob/main/CODE_OF_CONDUCT.md) by participating and contributing to this project.

## Getting Help

The Rene.css community can be found on [GitHub Discussions](https://github.com/rnbwdev/rene.css/discussions), where you can ask questions, voice ideas, and share your projects.

Contributions are always welcome and you can quickly get your fix or improvement slated for the next release. In general, PRs should:

- Address a single concern in the least number of changed lines as possible.
- Include documentation in the repo or on our docs site.
- Be accompanied by a complete Pull Request template (loaded automatically when a PR is created).

> For changes that address core functionality or would require breaking changes (e.g. a major release), it's best to open an Issue to discuss your proposal first. This is not required but can save time in creating and reviewing changes.

> Search for existing Issues and PRs before creating your own

> If you find an Issue that addresses your problem, please add your reproduction information to the existing issue rather than creating a new one. Adding a reaction can also help indicate to our maintainers that a particular problem is affecting more than just the reporter.
