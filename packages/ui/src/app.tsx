import { styled } from './themes/config';

export function App() {
  return (
    <>
      <div>
        <Row>
          <Palette css={{ backgroundColor: '#03045e' }}>1</Palette>
          <Palette css={{ backgroundColor: '#0077b6' }}>2</Palette>
          <Palette css={{ backgroundColor: '#00b4d8' }}>3</Palette>
          <Palette css={{ backgroundColor: '#90e0ef' }}>4</Palette>
          <Palette css={{ backgroundColor: '#caf0f8' }}>5</Palette>
        </Row>

        <Row>
          <Palette css={{ backgroundColor: '#F7DC6F' }}>1</Palette>
          <Palette css={{ backgroundColor: '#edc531' }}>2</Palette>
          <Palette css={{ backgroundColor: '#c9a227' }}>3</Palette>
          <Palette css={{ backgroundColor: '#a47e1b' }}>4</Palette>
          <Palette css={{ backgroundColor: '#805b10' }}>5</Palette>
        </Row>

        <Row>
          <Palette css={{ backgroundColor: '#A6A6A6' }}>1</Palette>
          <Palette css={{ backgroundColor: '#737373' }}>2</Palette>
          <Palette css={{ backgroundColor: '#4D4D4D' }}>3</Palette>
          <Palette css={{ backgroundColor: '#262626' }}>4</Palette>
          <Palette css={{ backgroundColor: '#000000' }}>5</Palette>
        </Row>

        <Row>
          <Palette css={{ backgroundColor: '#C2C2C2' }}>1</Palette>
          <Palette css={{ backgroundColor: '#D6D6D6' }}>2</Palette>
          <Palette css={{ backgroundColor: '#EBEBEB' }}>3</Palette>
          <Palette css={{ backgroundColor: '#F5F5F5' }}>4</Palette>
          <Palette css={{ backgroundColor: '#FFFFFF' }}>5</Palette>
        </Row>

        <Row>
          <Palette css={{ backgroundColor: '#48E68B' }}>1</Palette>
          <Palette css={{ backgroundColor: '#27AE60' }}>2</Palette>
          <Palette css={{ backgroundColor: '#1E8449' }}>3</Palette>
          <Palette css={{ backgroundColor: '#186A3B' }}>4</Palette>
          <Palette css={{ backgroundColor: '#0E4623' }}>5</Palette>
        </Row>

        <Row>
          <Palette css={{ backgroundColor: '#FFA500' }}>1</Palette>
          <Palette css={{ backgroundColor: '#FFC107' }}>2</Palette>
          <Palette css={{ backgroundColor: '#F39C12' }}>3</Palette>
          <Palette css={{ backgroundColor: '#D35400' }}>4</Palette>
          <Palette css={{ backgroundColor: '#E74C3C' }}>5</Palette>
        </Row>
        <Row>
          <Palette css={{ backgroundColor: '#3498DB' }}>1</Palette>
          <Palette css={{ backgroundColor: '#2980B9' }}>2</Palette>
          <Palette css={{ backgroundColor: '#2C3E50' }}>3</Palette>
          <Palette css={{ backgroundColor: '#1F3A93' }}>4</Palette>
          <Palette css={{ backgroundColor: '#154360' }}>5</Palette>
        </Row>
        <Row>
          <Palette css={{ backgroundColor: '#E74C3C' }}>1</Palette>
          <Palette css={{ backgroundColor: '#C0392B' }}>2</Palette>
          <Palette css={{ backgroundColor: '#922B21' }}>3</Palette>
          <Palette css={{ backgroundColor: '#641E16' }}>4</Palette>
          <Palette css={{ backgroundColor: '#B03A2E' }}>5</Palette>
        </Row>

        <div>
          <p>
            {' '}
            1: É uma boa escolha para botões de ação, ícones ou títulos de
            seções de alerta.
          </p>
          <p>
            {' '}
            2: É uma boa escolha para fundos de seções, botões e ícones de
            alerta.
          </p>
          <p>
            {' '}
            3: É uma boa escolha para elementos de destaque, como botões de ação
            ou ícones de alerta.
          </p>
          <p>
            {' '}
            4: É uma boa escolha para fundos de seções, títulos e botões de
            alerta.
          </p>
          <p>
            {' '}
            5: É uma boa escolha para botões de call to action ou títulos de
            seções de alerta.
          </p>
        </div>
      </div>

      <div></div>
    </>
  );
}

const Row = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  marginBottom: 15,
});

const Palette = styled('div', {
  display: 'flex',
  size: 80,
});
