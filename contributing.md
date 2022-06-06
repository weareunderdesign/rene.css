# Contributing to Rene.css projects

A big welcome and thank you for considering contributing to Rene.css!

## Get Started
1. Fork the repository to your own Github account
2. Clone the project to your machine
3. Create a branch locally with a succinct but descriptive name
4. Commit changes to the branch
5. Following any formatting and testing guidelines specific to this repo
6. Push changes to your fork.

## Developing

Generate a `/dist/rene.css`:
```
npm run rene
```
> The bundled file store the CSS in the same order in which you import inside the `/src/index.css` file.

## Publishing
1. Generate a `/dist/rene.min.css`:
    ```
    npm run rene.min
    ```

### Releasing and Versioning a new package
1. Select any versioning convention. Ex: [Semver](https://zellwk.com/blog/semantic-versioning/) (used by React)
2. Update version in `package.json` according to your preferred versioning convention.
3. Create a git tag according to that version.
4. Push the package to GitHub.
5. Push the package to NPM.
6. Create release notes for every update.

## Code of Conduct

We take our open source community seriously and hold ourselves and other contributors to high standards of communication. By participating and contributing to this project, you agree to uphold our [Code of Conduct](https://github.com/relateapp/rene.css/blob/main/CODE_OF_CONDUCT.md).

## Getting Help
The Rene.css community can be found on [GitHub Discussions](https://github.com/relateapp/rene.css/discussions), where you can ask questions, voice ideas, and share your projects.

Contributions are always welcome and can be a quick way to get your fix or improvement slated for the next release. In general, PRs should:
- Address a single concern in the least number of changed lines as possible.
- Include documentation in the repo or on our docs site.
- Be accompanied by a complete Pull Request template (loaded automatically when a PR is created).

> For changes that address core functionality or would require breaking changes (e.g. a major release), it's best to open an Issue to discuss your proposal first. This is not required but can save time creating and reviewing changes.

> Search for existing Issues and PRs before creating your own

>If you find an Issue that addresses the problem you're having, please add your own reproduction information to the existing issue rather than creating a new one. Adding a [reaction](https://github.blog/2016-03-10-add-reactions-to-pull-requests-issues-and-comments/) can also help be indicating to our maintainers that a particular problem is affecting more than just the reporter.