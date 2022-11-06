Thank you 🙏 for your interest in helping develop this package. Here is some helpful information to get you started.

---

### Tooling

- [pnpm](https://pnpm.io/) - to manage packages
- [Storybook](https://storybook.js.org/) - for quick visualization, easy examples and testing MultiModal's variants
- [Testing Library](https://testing-library.com/) - for testing code

### Commands

`pnpm i`: symlinks all dependencies

`pnpm storybook`: starts storybook server

`pnpm test`: run tests

`pnpm build`: run build

`pnpm format:check`: run prettier checks

`pnpm format:write`: run prettier format in files that failed on prettier check

`pnpm lint`: run eslint

### Commit convention

Before you create a Pull Request, please check whether your commits comply with the [commit conventions](https://www.conventionalcommits.org/en/v1.0.0/) used in this repository.

When you create a commit I kindly ask you to follow the convention `category(scope): message` in your commit message while using one of the following categories:

- `feat / feature`: all changes that introduce completely new code or new features
- `fix`: changes that fix a bug (ideally you will additionally reference an issue if present)
- `refactor`: refactor: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation
- `build`: all changes regarding the build of the software, changes to dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e. github actions)
- `style`: all changes regarding to styling
- `chore`: all changes to the repository that do not fit into any of the above categories

### Steps to PR

1. Fork this repository and clone your fork
2. Create a new branch out of the `main` branch following convention `type/scope`. For example `fix/switching-sections` or `docs/usage-typo`. `type` should follow the above commit convention and `scope` is a short description of the work's scope.
3. Make and commit changes following [commit convention](#commit-convention)

### License

By contributing your code to this repository, you agree to license your contribution under the MIT license.
