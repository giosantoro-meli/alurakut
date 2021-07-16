import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar(prop){
  return (
      <Box as="aside">
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
  const token = '037a036d149c2bf27ce0397376ff7f';
  const githubUser = "giosantoro-meli";
  const [comunidades, setComunidades] = React.useState([]);
  const pessoasFavoritas = ['vivian-tanaka', 'matheusmeli', 'rsalewski','AlberAlmeida'];
  const [seguidores, setSeguidores] = React.useState([]);
    React.useEffect(function(){
      fetch('https://api.github.com/users/giosantoro-meli/followers')
    .then(function(resposta){
      return resposta.json();
      })
    .then(function(respostaCompleta){
      setSeguidores(respostaCompleta);
      })

      //API GraphQL
      fetch('https://graphql.datocms.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          query: `query{
            allCommunities {
              id
              title
              imageUrl
              creatorSlug
            }
          }` 
        })
        ,
      }).then(function(resp){
        return resp.json();
      }).then((respCompleta) => {
        const comunidadesVindasDaApi = respCompleta.data.allCommunities;
        setComunidades(comunidadesVindasDaApi);
      })
    }, []) //this empty array makes this function execute only once

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
          Amigos ({seguidores.length})
        </h2>
        <ul>
        { seguidores.map((itemAtual) => {
          return (
            <li key={itemAtual.id}>
              <a href={`https://github.com/${itemAtual.login}`} target="_blank">
                <img src={`https://github.com/${itemAtual.login}.png`} />
                <span>{itemAtual.login}</span>
            </a>
            </li>
          )
        })}
        </ul>
      </ProfileRelationsBoxWrapper>
        
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          Comunidades ({comunidades.length})
        </h2>
        <ul>
        { comunidades.map((itemAtual) => {
          return (
            <li key={itemAtual.id}>
              <a href={`communities/${itemAtual.id}`}>
                <img src={itemAtual.imageUrl} />
                <span>{itemAtual.title}</span>
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
