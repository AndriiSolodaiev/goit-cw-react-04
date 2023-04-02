import { Add } from 'pages/AddUserPage';
import { Home } from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="add" element={<Add />} />
      </Route>
    </Routes>
  );
};
