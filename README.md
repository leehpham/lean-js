# lean-js

A very lean Node.js boilerplate.
This can be used for different project purposes.

## Features

- Clean architecture.
- Minimum numbers of external packages.

## Getting Started

### Prerequisites

- **Node.js**: Latest LTS version.
- **npm**: should follow the version of Node.js.

### Installation

1. Clone the repository:

    ```bash
    git clone git@github.com:leehpham/lean-js.git <project-folder-name>
    ```

2. Remove `.git`:

    ```bash
    rm -rf .git
    ```

3. Remove `package-lock.json`:

    ```bash
    rm package-lock.json
    ```

4. Rename `"name"` field in `package.json` to your `<project-folder-name>`.

5. Install packages:

    ```bash
    npm install
    ```

6. Update packages and set their versions in `package.json` (if needed):

    ```bash
    npm update --save
    ```

7. Run tests to make sure everything is working:

    ```bash
    npm run test
    ```

8. Update the content of `README.md` and documentation in `docs` folder to your liking.

## Scripts

- `npm run start`: Start the application.
- `npm run start:watch`: Start the application in watch mode.
  Use it when you're developing.
- `npm run lint`: Lint files in `src` folder.
- `npm run lint:fix`: Fix linting issues for files in `src` folder.

## Documentation

- [Dependencies](./docs/DEPENDENCIES.md)
- [Backlog](/docs/BACKLOG.md)

## License

This project is licensed under the ISC License.
