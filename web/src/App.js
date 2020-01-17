// import React, {useState} from 'react';
//O useState é usado pelo React para guardar estado
// import Header from './Header';


/**
 * 3 Conceitos principais do React
 * COMPONENTE - Função que retorna algum conteúdo html/css/javascript
 *    Bloco isolado de HTML, css e js, que não interfere no restante da aplicação.
 * 
 * ESTADO - Informações mantidas pelo componente (Lembrar: imutabilidade)
 * 
 * PROPRIEDADE - Passa uma propriedade para o nosso componente, colocar o title='Dashboard' no Header, por exemplo
 *    pega a propriedade passada através do PROPS. Informações que um componente PAI passa para o componente filho
 */


 //Primeira letra sempre maíuscula é o que vai mostrar que ele é um componente
// function App() { //Função que retorna conteúdo HTML
  
//   let [counter, setCounter] = useState(0); //O useState retorna dois elementos
//   //Retorna um vetor, então podemos atribur à um vetor (Desestruturação)

//   function incrementCounter(){
//     setCounter(counter + 1);
//   }

//   return ( //Colocar essa tag <> sem uma div facilita na hora de estilizar, para que não precise colocar sempre dentro de uma div
//     <> 
//       {/* <Header title="Titulo 1"></Header>
//       <Header title="Titulo 2"></Header>
//       <Header title="Titulo 4"></Header> USO DO PROPS*/}

//       <h1>Contador: {counter}</h1>
//       <button onClick={incrementCounter}>Incrementar</button>

//     </>
//   );
// }

import React, { useState, useEffect } from 'react';
import api from './services/api'
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem' //Colocando a pasta assim ele sempre pega o index.js
import DevForm from './components/DevForm'
/**
 * Aside: Tag no html para fazer a side bar
 * Main: conteúdo principal da aplicação
 */

//Acesso em tempo real no que o usuário digitou no input usando o useState

function App(){
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);
  
async function handleAddDev(data) { //Dispara essa função no submit do formulário
  const response = await api.post('/devs', data)

  setDevs([...devs, response.data]) //Adição em um array no JS

  console.log(response)
}

    return (
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>
          <DevForm onSubmit={handleAddDev}></DevForm>
        </aside>
        <main>

          <ul>
            {devs.map(dev => ( //Coloca parenteses ao invés de chaves pq é o retorno da função
                <DevItem key={dev._id} dev={dev}></DevItem>
            ))}
          </ul>

        </main>
        
      </div>
    );
}

export default App;
