import React, { useState } from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { Card, CardTitle, CardBody, Button } from './styles';

const schema = Yup.object().shape({
  search: Yup.string().required('Input seach is required'),
});

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  function handleSubmit() {
    return '';
  }

  return (
    <Card>
      <CardTitle>anisearch</CardTitle>
      <CardBody>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="search" type="text" placeholder="search" />
          <Button type="submit">{loading ? 'Carregando...' : 'search'}</Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default Home;
