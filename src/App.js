import styled from 'styled-components';
import Header from './componentes/Header'
import Pesquisa from './componentes/Pesquisa';

const AppConteiner = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`

function App() {
  return (
    <AppConteiner>
        <Header/>
        <Pesquisa/>
    </AppConteiner>
  );
}

export default App;