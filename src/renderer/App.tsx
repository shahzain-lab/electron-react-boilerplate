import { useEffect, useState } from 'react';
import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import Todo from './Todo';

const Hello = () => {
  const [photos, setPhotos] = useState([{title: '', thumbnailUrl: ''}])

  useEffect(() => {
    const getPhotos = async ()  => {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data = await res.json();
      console.log("AWAIT", data);
      setPhotos(data)
    }

    getPhotos()
  }, [])

  return (
    <div>
      <div className="Hello">
        <div className="photos">
          {
            photos.map((p: {title: string; thumbnailUrl: string}) => (
              <div className="photo">
                <h3>{p.title}</h3>
                {/* <img src={p?.thumbnailUrl} alt={p.title} /> */}
              </div>
            ))
          }
        </div>
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              🙏
            </span>
            Read our docs
          </button>
        </a>
        <Link
          to={'/todo'}
          // target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              🙏📚
            </span>
            Todo
          </button>
        </Link>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
  );
}
