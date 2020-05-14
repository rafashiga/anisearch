import { Form, Input } from '@rocketseat/unform';
import { shade } from 'polished';
import Switch from 'react-switch';
import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import * as Yup from 'yup';
import api from '../../services/api';
import history from '../../services/history';
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Switcher,
} from './styles';

const schema = Yup.object().shape({
  search: Yup.string().required('Input search is required'),
});

interface Props {
  toggleTheme(): void;
}

const Home: React.FC<Props> = ({ toggleTheme }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { colors, title } = useContext(ThemeContext);

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

    history.push('/list', {
      data: response.data,
      search,
    });
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

          <Button type="submit" disabled={loading}>
            {loading ? 'loading...' : 'search'}
          </Button>
        </Form>
        <Switcher>
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={20}
            width={40}
            handleDiameter={20}
            offColor={shade(0.5, colors.primary)}
            onColor={shade(0.1, colors.secondary)}
          />
        </Switcher>
      </CardBody>
    </Card>
  );
};

export default Home;
