import styles from './routes.module.scss';
import { Routes, Route } from 'react-router-dom';
import LadingPage from './LandingPage/LadingPage';

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<LadingPage />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;