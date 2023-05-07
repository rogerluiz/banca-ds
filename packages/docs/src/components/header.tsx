import { styled, Logo } from '@banca-ds/ui';

export function Header(): JSX.Element {
  return (
    <Nav className="banca-header">
      <Content>
        <Logo size="sm" color="primary" />
      </Content>
    </Nav>
  );
}

const Nav = styled('nav', {
  gridArea: 'nav',
  width: '100%',
  height: 60,
  borderBottom: '1px solid $grayLight1',
});

const Content = styled('div', {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  px: '$12',
});
