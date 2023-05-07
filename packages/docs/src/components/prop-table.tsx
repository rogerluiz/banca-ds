import React, { useCallback } from 'react';
import { styled } from '@banca-ds/ui';

type TableItemType = {
  name: string;
};

interface PropTableItemProps {
  name?: string;
  type?: TableItemType;
  description?: string;
  defaultValue?: any;
  color?: 'white' | 'gray' | 'blue';
}

export function PropTable({ of }: any) {
  const component = of;
  console.log({ component: component.render() });
  const { props } = component.__docgenInfo || { props: '' };
  const keys = Object.keys(props);

  const renderRows = useCallback(() => {
    return keys.map((key, i) => {
      const { defaultValue, description, name, type } = props[key];

      return (
        <PropTableItem
          key={name}
          color={i % 2 === 0 ? 'gray' : 'white'}
          defaultValue={defaultValue}
          description={description}
          name={name}
          type={type}
        />
      );
    });
  }, [props, keys]);

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Type</Th>
          <Th>Default</Th>
          <Th>Description</Th>
        </Tr>
      </Thead>
      <Tbody>{renderRows()}</Tbody>
    </Table>
  );
}

function PropTableItem({
  name = '',
  type = { name: '' },
  description = '',
  defaultValue = { value: '' },
  color = 'gray',
}: PropTableItemProps) {
  return (
    <Tr color={color}>
      <Td css={{ maxWidth: 120 }}>{name}</Td>
      <Td css={{ maxWidth: 200 }}>{type.name}</Td>
      <Td css={{ maxWidth: 120 }}>{defaultValue?.value || ''}</Td>
      <Td>{description}</Td>
    </Tr>
  );
}

const Table = styled('table', {
  width: '100%',
  captionSide: 'bottom',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$grayLight2',
  borderSpacing: 0,
  marginBottom: '$6',
  borderRadius: '$xs',
});

const Thead = styled('thead', {
  width: '100%',
  height: 50,
  backgroundColor: '$light',
  verticalAlign: 'bottom',
});
const Tr = styled('tr', {
  height: 40,

  variants: {
    color: {
      white: {
        backgroundColor: '$white',
      },
      gray: {
        backgroundColor: '$grayLight4',
      },
      blue: {
        backgroundColor: '$blue1',
      },
    },
  },
});

const Th = styled('th', {
  textAlign: 'left',
  verticalAlign: 'middle',
  px: '$8',
  fontSize: '$14',
});

const Tbody = styled('tbody', {});
const Td = styled('td', {
  textAlign: 'left',
  verticalAlign: 'middle',
  px: '$8',
  fontSize: '$2',
  color: '$grayDark5',
});
