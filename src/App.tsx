import { Link, Outlet, Route, Routes } from 'react-router-dom';
import About from './pages/about';
// import { About } from './pages/about';
import Home from './pages/home';

// import './App.css'

function App() {
  return (
    <div className="text-center my-10 font-semibold text-2xl">
      <h1>React项目工程模板</h1>
      <p>
        Vite + React + Ant Design + Tailwind CSS + ESLint + Prettier +
        TypeScript.
      </p>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div className="mt-4 mb-4">
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li className="inline-block mr-4">
            <Link to="/home">首页</Link>
          </li>
          <li className="inline-block">
            <Link to="/about">关于</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

export default App;
