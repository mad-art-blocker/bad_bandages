

* * *

<figure class="image"><img style="aspect-ratio:800/679;" src="preview.webp" width="800" height="679"></figure>

Bad Bandages is a simple HTML and CSS framework for testing or creating simple static web pages.

## Installation

Create a **named project folder** on your desktop or somewhere else and open it up with a terminal. Download this repo last or set it aside.

Use a package manager  to install [Vite](https://vite.dev/guide/#scaffolding-your-first-vite-project).

```sh
# I use Deno:

deno init --npm vite .
```

1. Choose Vanilla as a Framework

2. Vanilla JavaScript

3. deno install

4. deno run dev

5. If you see the logos you're good to go. Now in the project folder delete the following:
* public folder

* src folder

* index.html
6. Download this repo. Copy or replace this repo's folders, index.html, index.js, vite.config.js and the home.css file inside your project.

```plain
// It should look like this:

| package.json or deno.json
| vite.config.js
| index.html
| index.js
| home.css
| src folder
| public folder
| about folder
| grid-page folder
| node_modules folder

```

## Optional Deno Scripts

// Skip this if you're using another package manager.

// Place below the other scripts inside your package.json or deno.json (Delete the comments.):

```json
  "scripts": {

// Opens firefox/chrome broswer or change it to another. dev script opens up the default browser or take it out.
    "dev": "vite",
    "devchrome": "BROWSER=chrome vite",
    "devfirefox": "BROWSER=firefox vite",
  ...,
  ...,
  ...,

  // Deno Scripts:

    "upgradeDepend": "deno outdated --update --latest", // Updates all dependencies.
    "formatter": "deno fmt --single-quote", // Formatting and to change double to single qoutes.
    "denolintfix": "deno lint --fix", // Linting
    "delete": "rm -rf dist", // Deletes the "dist" folder after previewing the build.
    "deletepackages": "npx npkill" // deletes node_modules folder (packages).
  },
```

Read more about Multi-Page App [Vite Config](https://vite.dev/guide/build.html#multi-page-app)

And your done…

```sh
deno task dev
```

// Or:

```sh
npm run dev
```



## License

[MIT](https://choosealicense.com/licenses/mit/)
