import styles from './movieList.module.scss';

import { IMovie } from 'types/movie';
import NotFound from 'components/common/notFound/NotFound';

interface Props {
  item: IMovie[];
  setIsClicked: Function;
}

const MovieList = ({ item, setIsClicked }: Props) => {
  const onClickMovie = (idx: number) => {
    setIsClicked((prev: boolean) => !prev);
  };

  return (
    <div className={styles.wrap}>
      {item ? (
        <ul>
          {item.map((movie, idx) => (
            <li key={movie.imdbID} value={idx} className={styles.contents}>
              <div className={styles.imageContent}>
                {item[idx].Poster === 'N/A' ? (
                  <NotFound />
                ) : (
                  <img className={styles.poster} src={item[idx].Poster} alt='movie poster' />
                )}
              </div>
              <div className={styles.textContent}>
                <h3>{item[idx].Title}</h3>
                <div className={styles.desc}>
                  <span>{`Year :${item[idx].Year}`}</span>
                  <span>{`Type : ${item[idx].Type}`}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        '검색 결과가 없습니다.'
      )}
    </div>
  );
};

export default MovieList;
