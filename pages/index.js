import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar(prop){
  return (
      <Box >
        <img src={`https://github.com/${prop.githubUser}.png`} style={{borderRadius: "8px"}}/>

        <hr />

        <p>
          <a className="boxLink" href={`https://github.com/${prop.githubUser}`}>
              @{prop.githubUser}
          </a>
        </p>
        <hr />

        <AlurakutProfileSidebarMenuDefault/>
      </Box>
  )
}

export default function Home() {
  const githubUser = "giosantoro-meli";
  // useState has a 
  const [comunidades, setComunidades] = React.useState(["Alurakut"]);
  const pessoasFavoritas = ['vivian-tanaka', 'matheusmeli', 'rsalewski','AlberAlmeida'];
  return (
  <>
  <AlurakutMenu />
  <MainGrid>
    <div className="profileArea" style={
      {
        gridArea: "profileArea"
      }
    }>
      <ProfileSideBar githubUser={githubUser}/>
    </div>
    <div className="welcomeArea" style={
      {
        gridArea: "welcomeArea"
      }
    }>
      <Box>
          <h1 className="title">
            Bem vindo(a)
          </h1>
          <OrkutNostalgicIconSet />
      </Box>
      <Box>
          <h2 className="subTitle">
            O que você vai fazer?
          </h2>
          <form onSubmit={(e) => {
              e.preventDefault();

              const comunidadesAtualizadas = [...comunidades, 'Alura Stars'];
              setComunidades(comunidadesAtualizadas);
            }
          }>
            <div>
              <input 
                placeholder="Qual vai ser o nome da sua comunidade?" 
                name="title" 
                aria-label="Qual vai ser o nome da sua comunidade?"
                type="text" />
            </div>
            <div>
              <input 
                placeholder="Coloque uma URL para usarmos de capa" 
                name="image" 
                aria-label="Coloque uma URL para usarmos de capa"
                />
            </div>

            <button>
              Criar comunidade
            </button>
          </form>
      </Box>
    </div>
    <div className="profileRelationsArea" style={
      {
        gridArea: "profileRelationsArea"
      }
    }>
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          Amigos ({pessoasFavoritas.length})
        </h2>
        <ul>
        { pessoasFavoritas.map((itemAtual) => {
          return (
            <li>
              <a href={`users/${itemAtual}`} key={itemAtual}>
                <img src={`https://github.com/${itemAtual}.png`} />
                <span>{itemAtual}</span>
            </a>
            </li>
          )
        })}
        </ul>
      </ProfileRelationsBoxWrapper>
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          Comunidades
        </h2>
        <ul>
        { comunidades.map((itemAtual) => {
          return (
            <li>
              <a href={`users/${itemAtual}`} key={itemAtual}>
                <img src={`http://placehold.it/300x300`} />
                <span>{itemAtual}</span>
            </a>
            </li>
          )
        })}
        </ul>  
      </ProfileRelationsBoxWrapper>
    </div>
    
  </MainGrid>
  </>
  )
}
