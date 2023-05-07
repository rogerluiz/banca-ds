import { styled } from '@banca-ds/ui';
import { Tabs } from './tabs';

interface PageProps {
  legend?: JSX.Element;
  page?: string;
  title: string;
  children: JSX.Element;
}

export function Page({ page, legend, title = '', children }: PageProps) {
  return (
    <Container id={`component-${page}`}>
      <Header>
        <Title>{title}</Title>
        <Legend>{legend}</Legend>
      </Header>
      <Content>
        <Tabs>
          <Tabs.Panel tabId="example" title="Example">
            {children}
          </Tabs.Panel>
          <Tabs.Panel tabId="code" title="Code">
            this is the page for code
          </Tabs.Panel>
        </Tabs>
      </Content>
    </Container>
  );
}

const Container = styled('div', {
  width: '100%',
  maxWidth: 1100,
  display: 'flex',
  flexDirection: 'column',
});

const Content = styled('div');

const Header = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '$32',
});

const Title = styled('h1', {
  fontSize: '$32',
  fontWeight: '$medium',
  color: '$blue1',
  textTransform: 'uppercase',
});

const Legend = styled('p', {
  color: '$grayDark3',
  fontSize: '$16',
  fontWeight: '$regular',
});
