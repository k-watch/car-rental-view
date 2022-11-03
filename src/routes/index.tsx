import {
  BrowserRouter,
  Route,
  Routes /* , Navigate */,
} from 'react-router-dom';
import Layout from 'components/common/Layout';
import { NAVIGATE_URL } from 'types/enum';
import MainPage from 'pages/MainPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={NAVIGATE_URL.MAIN} element={<MainPage />} />
        </Route>
        {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
