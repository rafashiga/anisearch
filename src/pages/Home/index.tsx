import React, { useState } from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { Card, CardTitle, CardSubtitle, CardBody, Button } from './styles';
import history from '../../services/history';
import api from '../../services/api';

const schema = Yup.object().shape({
  search: Yup.string().required('Input search is required'),
});

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSubmit(data) {
    const { search } = data;
    setLoading(true);
    const response = await api.get('search/anime', {
      params: {
        q: search,
        limit: 10,
        page: 1,
      },
    });

    setLoading(false);

    history.push('/list', response.data);
  }

  return (
    <Card>
      <CardBody>
        <CardTitle>anisearch</CardTitle>
        <CardSubtitle>
          search for information about your favorite anime
        </CardSubtitle>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input type="text" name="search" placeholder="search" />

          <Button type="submit">{loading ? 'loading...' : 'search'}</Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default Home;
