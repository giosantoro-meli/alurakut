import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'

function ProfileSideBar(prop){
  return (
      <Box >
        <img src={`https://github.com/${prop.githubUser}.png`} style={{borderRadius: "8px"}}/>
      </Box>
  )
}

export default function Home() {
  const githubUser = "giosantoro-meli";
  return (
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
        Bem vindo
      </Box>
      <Box>
        O que você vai fazer?
      </Box>
    </div>
    <div className="profileRelationsArea" style={
      {
        gridArea: "profileRelationsArea"
      }
    }>
      <Box>
        Amigos
      </Box>
      <Box>
        Comunidades
      </Box>
    </div>
    
  </MainGrid>
  )
}
