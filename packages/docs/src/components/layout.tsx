import { styled } from '@banca-ds/ui';

import { Header } from './header';
import { Sidebar, SidebarItem } from './sidebar';

interface LayoutProps {
  children: JSX.Element;
}

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <Container className="banca-main">
      <Header />
      {children}
    </Container>
  );
}

interface LayoutDocsProps extends LayoutProps {
  menu: SidebarItem[];
}

export function LayoutDocs({ children, menu }: LayoutDocsProps): JSX.Element {
  return (
    <Main>
      <Sidebar menu={menu} className="banca-sidebar" />
      <Content className="banca-content">{children}</Content>
    </Main>
  );
}

const Container = styled('div', {
  display: 'grid',
  gridTemplateRow: '60px 1fr',
  gridTemplateAreas: `
    "nav"
    "main"
  `,
});

const Main = styled('main', {
  gridArea: 'main',
  display: 'flex',
});

const Content = styled('section', {
  flex: 1,
  gridArea: 'content',
  padding: '$32',
});
