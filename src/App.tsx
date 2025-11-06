import { Button, Grid, GridItem, Show } from '@chakra-ui/react'
function App() {
  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`,
  }}>
    <GridItem area="nav" bg="coral" p={4}>Nav</GridItem>
    <Show above='lg'>
      <GridItem area="aside" bg="gold" p={4}>Aside</GridItem>
    </Show>
    <GridItem area="main" bg="dodgerblue" p={4}>Main</GridItem>
  </Grid>
}

export default App
