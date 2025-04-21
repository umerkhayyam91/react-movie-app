# 🎬 Movie App

A simple and responsive movie browser built with React and Vite. This app allows users to browse popular movies, search for specific titles, and save their favorite movies locally using browser storage.

🌐 **Live Demo:** [react-movie-app-two-ecru.vercel.app](https://react-movie-app-two-ecru.vercel.app)

---

## 🚀 Features

- 🔍 **Search Movies** — Search for any movie using a public API (TMDb).
- 🌟 **Favorite Movies** — Add or remove movies from your favorites.
- 🏠 **Home Page** — Displays a grid of popular movies.
- ❤️ **Favorites Page** — View movies you've favorited.
- 💾 **LocalStorage Integration** — Favorites persist across page refreshes.

---

## 🛠 Technologies Used

- **React 18**
- **React Router DOM v6**
- **Vite** (for blazing-fast dev environment)
- **Context API** (for global state management)
- **TMDb API** (for movie data)
- **CSS** (custom styling)

---

## 📦 Installation

1. **Clone the repository:**
```bash
https://github.com/umerkhayyam91/react-movie-app.git
cd react-movie-app
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser:**
```
http://localhost:5173
```

---

## 🧩 Folder Structure

```
├── public
├── src
│   ├── components
│   │   └── MovieCard.jsx
│   │   └── NavBar.jsx
│   ├── contexts
│   │   └── MovieContext.jsx
│   ├── css
│   │   └── App.css
│   │   └── Favorites.css
│   │   └── Home.css
│   │   └── index.css
│   │   └── MovieCard.css
│   │   └── Navbar.css
│   ├── pages
│   │   ├── Home.jsx
│   │   └── Favorites.jsx
│   ├── services
│   │   └── api.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

---

## 📜 Scripts

- `npm run dev` — start development server
- `npm run build` — build the app for production
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint to check code quality

---

## 📝 License

This project is open-source and free to use for learning and development purposes.

---

## 🙌 Acknowledgments

- [TMDb API](https://www.themoviedb.org/documentation/api)
- [Tech With Tim's YouTube Tutorial](https://www.youtube.com/watch?v=G6D9cBaLViA)

Happy coding! 🎥🍿

