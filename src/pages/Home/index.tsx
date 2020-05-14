import { Form, Input } from '@rocketseat/unform';
import { shade } from 'polished';
import Switch from 'react-switch';
import React, { useContext, useState } from 'react';
import { useSpring, animated } from 'react-spring';
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
  const [animate, setAnimate] = useState<boolean>(false);
  const { x } = useSpring({
    from: { x: 0 },
    x: animate ? 1 : 0,
    config: { duration: 1000 },
  });
  const [loading, setLoading] = useState<boolean>(false);
  const { colors, title } = useContext(ThemeContext);

  async function handleSubmit(data) {
    setAnimate(!animate);

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

          <animated.div
            style={{
              transform: x
                .interpolate({
                  range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                  output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                })
                .interpolate((x) => `scale(${x})`),
              width: '100%',
            }}
          >
            <Button type="submit" disabled={loading}>
              {loading ? 'loading...' : 'search'}
            </Button>
          </animated.div>
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
