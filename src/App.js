import { Routes, Route } from 'react-router-dom';
import Header from './Components/header';
import Home from './Components/home';
import Quote from './Components/Quote';
import Calculator from './Components/calculator';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="*" element={<h1>Note Found</h1>} />
    </Routes>
  </>
);

export default App;
