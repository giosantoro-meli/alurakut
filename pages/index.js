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
  const [comunidades, setComunidades] = React.useState([{
    id: '13123123123',
    titulo: 'Eu odeio acordar cedo',
    image: 'https://img10.orkut.br.com/community/52cc4290facd7fa700b897d8a1dc80aa.jpg'
  },
  {
    id: '1312312324234123',
    titulo: 'Discografias',
    image: 'https://img10.orkut.br.com/community/f50f08c3f0acf3519578cbc92f81089c.jpg'
  },
  {
    id: '13123123132423443',
    titulo: 'Eu ofereço comida no MSN',
    image: 'https://img10.orkut.br.com/community/b0fbba9e4d7b601f153319e23818a106.jpg'
  },
  {
    id: '1312343232423123123',
    titulo: 'Anão vestido de palhaço mata 8',
    image: 'https://images-cdn.9gag.com/photo/aKVwG8Z_700b.jpg'
  }
  ]);
  const pessoasFavoritas = ['vivian-tanaka', 'matheusmeli', 'rsalewski','AlberAlmeida'];
  return (
  <>
  <AlurakutMenu githubUser={githubUser} />
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
              const dadosDoForm = new FormData(e.target);

              const comunidade = {
                id: new Date().toISOString,
                titulo: dadosDoForm.get('titulo'),
                image: dadosDoForm.get('image')
              };

              const comunidadesAtualizadas = [...comunidades, comunidade];
              setComunidades(comunidadesAtualizadas);
            }
          }>
            <div>
              <input 
                placeholder="Qual vai ser o nome da sua comunidade?" 
                name="titulo" 
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
            <li key={itemAtual}>
              <a href={`users/${itemAtual}`}>
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
            <li key={itemAtual.id}>
              <a href={`users/${itemAtual.titulo}`} key={itemAtual.titulo}>
                <img src={itemAtual.image} />
                <span>{itemAtual.titulo}</span>
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
