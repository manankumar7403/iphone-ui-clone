# iPhone Clone

A modern, responsive iPhone-themed landing page built with **React**, **Vite**, **Tailwind CSS**, **GSAP**, and **Three.js**. This project delivers a smooth and immersive web experience with 3D models and animations, inspired by Apple’s clean and elegant product presentations.

---

## Features

- Blazing fast with [Vite](https://vitejs.dev/)
- Utility-first styling via [Tailwind CSS](https://tailwindcss.com/)
- Modular React component structure
- Smooth animations using [GSAP](https://greensock.com/gsap/)
- 3D model rendering with [Three.js](https://threejs.org/)
- Responsive and mobile-friendly
- Reusable and organized codebase

---

## Tech Stack

| Tech        | Description                           |
|-------------|---------------------------------------|
| React       | Component-based UI library            |
| Vite        | Lightning-fast frontend build tool    |
| Tailwind CSS| Utility-first CSS framework           |
| GSAP        | JavaScript animation platform         |
| Three.js    | 3D rendering engine                   |

---

## Project Structure

```
src/
├── components/        # All UI components (Hero, Footer, etc.)
├── constants/         # Reusable constants
├── utils/             # Helper functions (e.g., animations)
├── App.jsx            # Main app component
├── main.jsx           # Entry point
├── index.css          # Tailwind imports & global styles
```

---

## Installation

```bash
# Clone the repo
git clone https://github.com/manankumar7403/iphone-ui-clone.git
```

```bash
# Navigate to the project
cd iphone-ui-clone
```

```bash
# Install dependencies
npm install
```

---

## Development

```bash
npm run dev
```

The app will be running at `http://localhost:5173/`.

---

## Build for Production

```bash
npm run build
```

Output will be generated in the `dist/` directory.

To preview locally:

```bash
npm run preview
```

---

## Deployment

This project works seamlessly on platforms like **Vercel**, **Netlify**, or **GitHub Pages**. For Vercel:

* Framework preset: `Vite`
* Build command: `npm run build`
* Output directory: `dist`

---

## Screenshots
### Home page
![Hero Screenshot](/public/screenshots/ss1.png)

### Highlights
![Model Screenshot](/public/screenshots/ss2.png)

---

## Acknowledgments

* [GSAP](https://greensock.com/gsap/)
* [Three.js](https://threejs.org/)
* [Vite](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/)

---

## License
This project is licensed under the [MIT License](LICENSE).