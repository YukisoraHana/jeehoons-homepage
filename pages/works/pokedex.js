import { Container, List, ListItem, Badge, Link, useColorModeValue } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Pokédex">
      <Container>
        <Title>
          Pokédex<Badge>2022</Badge>
        </Title>
        <P>
          I distinctly remember the feeling of unparalled joy after purchasing a copy of {' '}
          <em>
            <Link color={useColorModeValue('blue.500', 'rgb(255,99,195)')} target='_blank' href='https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Ultimate_Handbook'>
              Pokémon: Ultimate Handbook
            </Link>
          </em> at my elementary school book fair. Having access to information about all the Pokémon at the time, I felt as if I had the whole world in my hands. I would carry it along with me everywhere if I could, even in my sleep. Fast forward {(new Date().getFullYear()) - 2008} years later, the Pokémon environment has changed drastically. So I thought that this handbook could use an update...having both the accesibility of existing on the browser and the range of offering information from the beginning (Gen I) to the latest (Gen VIII).
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link target='_blank' href="https://pokedex-wlgnstla.vercel.app/">
              Gotta Catch &apos;Em All! <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next.js, Chakra UI, Framer Motion</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link target='_blank' href='https://github.com/wlgnstla/Pokedex'>
              https://github.com/wlgnstla/Pokedex<ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
        </List>
        <WorkImage src='/images/works/pokedex-2.png' alt='Pokedex Example 2' />
        <WorkImage src='/images/works/pokedex-3.png' alt='Pokedex Example 3' />
        <WorkImage src='/images/works/pokedex-4.png' alt='Pokedex Example 4' />
        <WorkImage src='/images/works/pokedex-5.png' alt='Pokedex Example 5' />
        <WorkImage src='/images/works/pokedex-6.png' alt='Pokedex Example 6' />
      </Container>
    </Layout>
  )
}

export default Work 
