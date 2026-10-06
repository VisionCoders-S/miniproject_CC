# Future Engineers — Student Showcase

A small portfolio showcase built with Next.js. The homepage introduces the students, and each student has a profile page with their bio, skills, projects, and social links.

## Requirements

- [Node.js](https://nodejs.org/) 20.9 or newer
- npm (included with Node.js)

Check your installed versions:

```bash
node --version
npm --version
```

## Run locally

1. Open a terminal in the project folder.
2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

The development server refreshes the page as you edit files. Press `Ctrl+C` in the terminal to stop it.

If port 3000 is already in use, Next.js will offer another local URL in the terminal.

## Build for deployment

Create an optimized static site:

```bash
npm run build
```

The generated website is written to the `out/` directory. Because this project uses Next.js static export (`output: "export"` in `next.config.js`), deploy the contents of `out/` to a static hosting provider that serves the generated HTML, CSS, and JavaScript files. You do not need a Node.js server to host the exported site.

## Deploy to GitHub Pages

The repository includes a GitHub Actions workflow that builds and deploys the site whenever changes are pushed to `main`. In the repository settings, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. Once the workflow completes successfully, the site will be available at:

<https://visioncoders-s.github.io/miniproject_CC/>

The GitHub Actions build automatically sets the repository subpath so links and assets work on GitHub Pages. Local development continues to use `http://localhost:3000`.

## Add or update a student

Edit the `students` array in [`src/data/students.ts`](./src/data/students.ts). Each student entry includes:

- `slug` — URL-safe identifier used for the profile route, such as `abhishek` in `/portfolio/abhishek`
- `name`, `role`, and `bio`
- `github` and `linkedin` profile URLs
- `skills` — list of skill names
- `projects` — list of project names and descriptions

After adding a student, save the file. The homepage card and static profile route are generated from this data.

## Useful project files

```text
src/
  app/
    page.tsx                  Homepage
    layout.tsx                Shared document layout and page metadata
    globals.css               Global styles and responsive layout
    portfolio/[slug]/page.tsx Student portfolio page
  data/
    students.ts               Student profiles and project content
next.config.js                Static export configuration
```
