import { Routes, Route } from 'react-router-dom';
import Search from './search/Search';
import Favorite from './favorite/Favorite';
import Header from '../components/_template/header/Header';
import GNB from '../components/_template/footer/GNB';
import styles from './route.module.scss';
import NotFound from './notFound/NotFound';

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.movieContainer}>
        <Header />
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/search' element={<Search />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <GNB />
      </div>
    </div>
  );
};

export default App;
