import styles from './movieList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as farFaBookmark } from '@fortawesome/free-regular-svg-icons';

import { IMovie } from 'types/movie';
import NoPoster from 'components/common/noPoster/NoPoster';
import store from 'storejs';

import { useState } from 'react';

interface Props {
  item: IMovie[];
}

const MovieList = ({ item }: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [fovoriteList, setFavoriteList] = useState<IMovie[]>();
  const onClickMovie = () => {
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
                  <NoPoster />
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
              {isClicked && <FontAwesomeIcon icon={farFaBookmark} className={styles.bookmark} onClick={onClickMovie} />}
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
