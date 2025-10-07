# React Router Demo (Vite + Tailwind v4 + DaisyUI)

Modern, responsive demo showcasing React Router v7 features (nested routes, loaders, Suspense, dynamic params) with Tailwind v4 and DaisyUI.

## 🚀 Features

- Routing & Layout

  - Root layout with `Header`, `Footer`, and `<Outlet />`
  - Nested routes with clean URL structure
  - Hydration fallback via `HydrateFallback` on `RouterProvider`

- Pages

  - Home: modern hero, stats, features, CTA sections (responsive)
  - About: mission, values, team, and CTA sections (responsive)
  - Blog Archive: grid of posts fetched with Suspense + `use()`
  - Single Post: dynamic route `/blogs/:blogId` using `loader` + `useLoaderData`

- Data Loading

  - Blogs list: `blogsPromise` fetched upfront, consumed via React `use()` inside Suspense
  - Single post: route `loader` fetches `https://jsonplaceholder.typicode.com/posts/:blogId`

- UI/Styling

  - Tailwind CSS v4 with DaisyUI components
  - Mobile-first responsive design for header, pages, and grids
  - Accessible buttons/links, clean typography, consistent spacing

- Cleanup
  - Removed Portfolio and Users pages, routes, nav links, and files
  - Blog archive simplified (removed category tabs and non-working pagination)

## 🧭 Routes

- `/` → Home
- `/about` → About
- `/blogs` → Blog archive
- `/blogs/:blogId` → Single post details

## 📦 Tech Stack

- React 18
- React Router v7 APIs
- Vite 5
- Tailwind CSS v4 + DaisyUI

## 🛠️ Setup

1. Install dependencies

   - `npm install`

2. Start dev server

   - `npm run dev`
   - Note: Vite requires Node.js 20.19+ or 22.12+

3. Build
   - `npm run build`

## 📁 Project Structure (key files)

```
src/
  main.jsx                # RouterProvider + routes
  index.css               # Tailwind v4 + DaisyUI + custom utilities
  components/
    Root/Root.jsx         # Layout with Header/Footer and <Outlet />
    Header/Header.jsx     # Responsive navbar
    Footer/Footer.jsx     # Responsive footer
    Home/Home.jsx         # Landing page
    About/About.jsx       # About page
    Blogs/Blog.jsx        # Blog archive (Suspense + use())
    SinglePost/SinglePost.jsx # Dynamic post page with loader
```

## 🔗 APIs

- Posts: `https://jsonplaceholder.typicode.com/posts`
- Single Post: `https://jsonplaceholder.typicode.com/posts/:id`

## ✨ Notes

- Portfolio and Users have been fully removed by design.
- Blog archive lists all posts; categories and pagination were intentionally removed for clarity.

---

Made with ❤️ using React, React Router, Tailwind, and DaisyUI.
