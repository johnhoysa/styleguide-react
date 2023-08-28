import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Layout File
import Layout from './Layout';
// Route to page
import Buttons from './styleguide/Buttons';
import Colors from './styleguide/Colors';
import Forms from './styleguide/Forms';
import Typography from './styleguide/Typography';

import NoPage from './404';
import './tailwind.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="buttons" element={<Buttons />} />
          <Route path="colors" element={<Colors />} />
          <Route path="forms" element={<Forms />} />
          <Route path="typography" element={<Typography />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
