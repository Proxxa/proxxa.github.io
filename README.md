# proxxa.github.io

A personal site, built using Svelte and Tailwind CSS

# Building/Running

The site comes with `npm` scripts to run and build the project. To view all scripts, run `npm run`.
```
$ npm run
Scripts available in proxxa.github.io@0.0.1 via `npm run-script`:
  dev
    vite dev
  build
    vite build
  preview
    vite preview
  check
    svelte-kit sync && svelte-check --tsconfig ./tsconfig.json
  check:watch
    svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch
```

- `npm run dev` will run the project with live reload capabilities, so your changes will be immediately reflected in the browser.
- `npm run build` will build the project and place the files in the `build` directory
- `npm run preview` will preview the fully-built project as it would be output by `npm run build`
- `npm run check` will check your svelte files for any errors.
- `npm run check:watch` checks your svelte files as you change them.
