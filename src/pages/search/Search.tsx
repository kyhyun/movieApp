import cx from 'classnames';
import styles from './search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { FormEvent, ChangeEvent, useEffect, useState } from 'react';
import { getMovieApi } from 'services/movie';

import { movieState } from 'states/movie';
import { useRecoilState } from 'recoil';

import MovieList from 'pages/search/movieList/MovieList';

const Search = () => {
  const [inputData, setInputData] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useRecoilState(movieState);

  useEffect(() => {
    if (inputData.length) return;
    setMovies([]);
  }, [inputData, setMovies]);

  useEffect(() => {
    getMovieApi({
      s: inputData,
      page: currentPage,
    }).then((res) => {
      console.log(res.data.Search);
      setMovies(res.data.Search);
    });
  }, [setMovies, inputData, currentPage]);

  const onChangeInputData = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputData(evt.currentTarget.value);
    setCurrentPage(1);
  };

  const onSubmitFormData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputData('');
  };

  return (
    <main className={cx(styles.wrap)}>
      <h2 className={styles.title}>Search</h2>
      <form onSubmit={onSubmitFormData}>
        <input type='text' className={styles.searchInput} value={inputData} onChange={onChangeInputData} />
        <button type='submit'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={cx(styles.faviconSearch)} />
        </button>
      </form>
      <div className={cx(styles.content)}>
        <MovieList item={movies} />
      </div>
    </main>
  );
};

export default Search;
