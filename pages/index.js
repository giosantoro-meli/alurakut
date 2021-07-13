import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'

export default function Home() {
  return (
  <MainGrid>
    <div className="profileArea" style={
      {
        gridArea: "profileArea"
      }
    }>
      <Box >
        <img src="https://github.com/giosantoro-meli.png"/>
      </Box>
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
