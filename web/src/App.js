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

import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
/**
 * Aside: Tag no html para fazer a side bar
 * Main: conteúdo principal da aplicação
 */

function App(){
    return (
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>
          <form>
            <div class="input-block">
              <label htmlFor="github_username">Usuário do Github</label>
              <input name="github_username" id="github_username" required></input>
            </div>

            <div class="input-block">
              <label htmlFor="techs">Tecnologias</label>
              <input name="techs" id="techs" required></input>
            </div>

          <div className="input-group">

            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required></input>
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required></input>
            </div>

          </div>

            <button type="submit">Salvar</button>

          </form>
        </aside>
        <main>

          <ul>
            <li className="dev-item">
              <header>
                <img src="https://avatars3.githubusercontent.com/u/17099024?s=460&v=4" alt="Tiago Marinho"></img>
                <div className="user-info">
                  <strong>Tiago Marinho</strong>
                  <span>ReactJS, React Native, Node.JS</span>
                </div>
              </header>
              <p>Teste teste teste teste teste teste teste teste</p>
              <a href="github.com/tiagomariinhoo">Acessar perfil no github</a>
            </li>

            <li className="dev-item">
              <header>
                <img src="https://avatars3.githubusercontent.com/u/17099024?s=460&v=4" alt="Tiago Marinho"></img>
                <div className="user-info">
                  <strong>Tiago Marinho</strong>
                  <span>ReactJS, React Native, Node.JS</span>
                </div>
              </header>
              <p>Teste teste teste teste teste teste teste teste</p>
              <a href="github.com/tiagomariinhoo">Acessar perfil no github</a>
            </li>

            <li className="dev-item">
              <header>
                <img src="https://avatars3.githubusercontent.com/u/17099024?s=460&v=4" alt="Tiago Marinho"></img>
                <div className="user-info">
                  <strong>Tiago Marinho</strong>
                  <span>ReactJS, React Native, Node.JS</span>
                </div>
              </header>
              <p>Teste teste teste teste teste teste teste teste</p>
              <a href="github.com/tiagomariinhoo">Acessar perfil no github</a>
            </li>

            <li className="dev-item">
              <header>
                <img src="https://avatars3.githubusercontent.com/u/17099024?s=460&v=4" alt="Tiago Marinho"></img>
                <div className="user-info">
                  <strong>Tiago Marinho</strong>
                  <span>ReactJS, React Native, Node.JS</span>
                </div>
              </header>
              <p>Teste teste teste teste teste teste teste teste</p>
              <a href="github.com/tiagomariinhoo">Acessar perfil no github</a>
            </li>
          </ul>

        </main>
        
      </div>
    );
}

export default App;
