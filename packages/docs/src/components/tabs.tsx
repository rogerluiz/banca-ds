import {
  Children,
  ReactElement,
  ReactNode,
  useMemo,
  useState,
  cloneElement,
} from 'react';

import { styled } from '@banca-ds/ui';

interface TabItemProps {
  title: string;
  id: number;
  active?: boolean;
  tabId: string;
  setSelectedTab: (index: number) => void;
}

interface TabPanelProps {
  title: string;
  children: ReactNode;
  tabId: string;
  active?: boolean;
}

interface TabsProps {
  children: ReactElement[];
}

export function Tabs({ children }: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(0);

  const renderChildren = useMemo(() => {
    return Children.map(children, (child, i) => {
      return cloneElement(child, {
        active: activeTab === i,
        key: child.props.tabId,
      });
    });
  }, [children]);

  return (
    <Container>
      <List role="tablist" aria-label="List of Tabs">
        {children.map((child, index) => (
          <TabItem
            key={child.props.tabId}
            id={index}
            active={activeTab === index}
            title={child.props.title}
            tabId={child.props.tabId}
            setSelectedTab={setActiveTab}
          />
        ))}
      </List>

      {renderChildren[activeTab]}
    </Container>
  );
}

function TabItem({
  id,
  title,
  tabId,
  active,
  setSelectedTab,
}: TabItemProps): JSX.Element {
  return (
    <ListItem role="presentation">
      <Button
        role="tab"
        active={active}
        aria-selected={active}
        aria-controls={tabId}
        onClick={() => setSelectedTab(id)}
      >
        {title}
      </Button>
    </ListItem>
  );
}

function TabPanel({ children, tabId, active }: TabPanelProps): JSX.Element {
  return (
    <Painel
      aria-labelledby={tabId}
      aria-hidden={!active}
      role="tabpanel"
      tabIndex={0}
    >
      {children}
    </Painel>
  );
}

Tabs.Panel = TabPanel;
Tabs.Item = TabItem;

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const List = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '$16',
  borderBottom: '2px solid $grayLight2',
});

const ListItem = styled('li', {
  marginRight: '$8',
});

const Button = styled('button', {
  all: 'unset',
  px: '$4',
  py: '$8',
  color: '$grayDark3',
  fontWeight: '$regular',
  fontSize: '$16',
  borderBottomWidth: 2,
  borderBottomColor: 'transparent',
  borderBottomStyle: 'solid',
  marginBottom: -2,
  cursor: 'pointer',

  variants: {
    active: {
      true: {
        color: '$blue1',
        fontWeight: '$medium',
        borderBottomColor: '$blue1',
      },
      false: {
        '&:hover': {
          borderBottomColor: '$grayDark1',
        },
      },
    },
  },
});

const Painel = styled('div');
