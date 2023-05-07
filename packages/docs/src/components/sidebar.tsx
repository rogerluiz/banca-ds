import { ComponentPropsWithoutRef, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { styled } from '@banca-ds/ui';

export type SidebarItem = {
  slug: string;
  label: string;
  nav: string;
  path: string;
};

export interface LayoutProps extends ComponentPropsWithoutRef<'aside'> {
  menu: SidebarItem[];
}

export function Sidebar({ menu }: LayoutProps): JSX.Element {
  const router = useRouter();

  const renderLinks = useCallback(
    (items: SidebarItem[]) => {
      const filterByCategory = items.filter(({ nav }) => nav === 'components');
      return filterByCategory.map(({ label, slug, path }) => {
        return (
          <ListItem key={slug}>
            <Link href={path} passHref>
              <Achor active={router.asPath === path}>{label}</Achor>
            </Link>
          </ListItem>
        );
      });
    },
    [router.asPath],
  );

  return (
    <Container>
      <CategoryTitle>Components</CategoryTitle>
      <Aside>
        <List>{renderLinks(menu)}</List>
      </Aside>
    </Container>
  );
}

const Container = styled('div', {
  width: '100%',
  maxWidth: 300,
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100vh - 60px)',
  backgroundColor: '$white',
  borderRight: '1px solid $grayLight1',
  padding: '$12',
  gridArea: 'sidebar',
});

const Aside = styled('aside', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const List = styled('ul', {
  width: '100%',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '$24',
  listStyle: 'none',
});

const ListItem = styled('li', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
});

const Achor = styled('a', {
  padding: '$12 $8',
  width: '100%',
  fontSize: '$14',
  fontWeight: '$regular',
  textDecoration: 'none',
  color: '$blue1',
  display: 'flex',
  alignItems: 'center',

  variants: {
    active: {
      true: {
        fontWeight: '$bold',
        backgroundColor: '$grayLight3',
      },
      false: {
        '&:hover': {
          color: '$blue1',
          backgroundColor: '$grayLight4',
        },
      },
    },
  },
});

const CategoryTitle = styled('h2', {
  fontSize: '$13',
  fontWeight: '$bold',
  color: '$grayDark2',
  paddingLeft: '$12',
  marginBottom: '$16',
  textTransform: 'uppercase',
});
