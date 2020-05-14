import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { MdClose, MdStar } from 'react-icons/md';
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  Anime,
  AnimeInfo,
  CardClose,
  CardHeader,
  PageTitle,
} from './styles';
import history from '../../services/history';

interface Props {
  location: any;
}

interface State {
  last_page: 20;
  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
  results: object;
}

interface Results {
  airing: boolean;
  end_date: string;
  episodes: number;
  image_url: string;
  mal_id: number;
  members: number;
  rated: string;
  score: number;
  start_date: string;
  synopsis: string;
  title: string;
  type: string;
  url: string;
}

const List: React.FC<Props> = ({ location }) => {
  const { state } = location as any;
  const { colors } = useContext(ThemeContext);

  const handleClose = () => {
    history.push('/');
  };

  return (
    <>
      <PageTitle>anisearch</PageTitle>
      <Card>
        <CardHeader>
          <div>
            <CardTitle>results for:</CardTitle>
            <CardSubtitle>{state?.search}</CardSubtitle>
          </div>
          <CardClose aria-label="close" onClick={handleClose}>
            <MdClose color={colors.text} size={28} />
          </CardClose>
        </CardHeader>
        <CardBody>
          {state?.data?.results?.map((result: Results) => (
            <Anime key={result.mal_id}>
              <img src={result.image_url} alt={result.title} />
              <AnimeInfo>
                <h3>{result.title}</h3>
                <p>{result.synopsis}</p>
                <p>
                  <strong>episodes:</strong> {result.episodes}
                </p>
                <p>
                  <MdStar color="yellow" size={14} /> {result.score}
                </p>
                <p>
                  <a href={result.url}>show more</a>
                </p>
              </AnimeInfo>
            </Anime>
          ))}
        </CardBody>
      </Card>
    </>
  );
};

export default List;
