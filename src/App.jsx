import './App.css';
import { Route, Routes } from 'react-router';
import { ViteExample } from './components/ViteExample';

const App = () => (
  <Routes>
    <Route path="/" element={<ViteExample />} />
  </Routes>
);

export default App;
