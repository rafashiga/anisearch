import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardTitle,
  CardBody,
  Anime,
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

  console.log(state);

  function handleClose(): void {
    history.push('/');
  }

  return (
    <>
      <PageTitle>anisearch</PageTitle>
      <Card>
        <CardHeader>
          <CardTitle>result:</CardTitle>
          <CardClose aria-label="close" onClick={handleClose}>
            X
          </CardClose>
        </CardHeader>
        <CardBody>
          {state?.results?.map((result: Results) => (
            <Anime key={result.mal_id}>
              <img src={result.image_url} alt={result.title} />
              <h3>{result.title}</h3>
            </Anime>
          ))}
        </CardBody>
      </Card>
    </>
  );
};

List.propTypes = {
  location: PropTypes.element.isRequired,
};

export default List;
