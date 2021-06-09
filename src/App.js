import PaginaDado6 from './PaginaDado6';
import Cabecalho from './componentes/Cabecalho';
import Navegacao from './componentes/Navegacao';
import Conteudo from './componentes/Conteudo';
import CaixaTexto from './componentes/CaixaTexto';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Cabecalho/>
      <Navegacao/>
      <Switch>
        <Route exact path='/dadojs'>
          <Conteudo>
            <CaixaTexto>
              Um APP de dados
            </CaixaTexto>
          </Conteudo>
        </Route>
        <Route path='/dadojs/dado6'>
          <Conteudo>
            <CaixaTexto>Clique para jogar!</CaixaTexto>
            <PaginaDado6/>
          </Conteudo>
        </Route>
      </Switch>
    </Router>  
  );
}

export default App;
