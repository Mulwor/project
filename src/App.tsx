import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { About } from './pages/About/About';
import { Home } from './pages/Home/Home';
import { Error } from './pages/Error/Error';
import { Form } from './pages/Forms';

export class App extends React.Component {
  render = () => (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
