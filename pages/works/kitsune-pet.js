import { Container, List, ListItem, Badge, Link, useColorModeValue } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Kitsune-Pet">
      <Container>
        <Title>
          Kitsune-Pet <Badge>2022</Badge>
        </Title>
        <P>
          A virtual fox pet simulation game. Remember those
          {' '}
          <Link color={useColorModeValue('blue.500', 'rgb(255,99, 195)')} target='_blank' href='https://tamagotchi.com/'>
            Tamagotchi
          </Link>
          &apos;s back in the 90&apos;s where you put painstaking effort
          to care for your digital pet? If not, that&apos;s okay too, because
          here you can either recreate your favorite childhood experience
          or embark on a new journey of falling in love with your digital pet.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link target='_blank' href="https://kitsune-pet.web.app/">
              Play Here <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, Javascript, HTML, CSS</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link target='_blank' href='https://github.com/wlgnstla/Kitsune-Pet'>
              https://github.com/wlgnstla/Kitsune-Pet <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
        </List>
        <WorkImage src='/images/works/kitsune-pet-1.png' alt="The fox is hungry!" />
        <WorkImage src='/images/works/kitsune-pet-6.png' alt="The fox is eating!" />
        <WorkImage src='/images/works/kitsune-pet-3.png' alt="The fox is happy!" />
        <WorkImage src='/images/works/kitsune-pet-4.png' alt="The fox is pooping!" />
        <WorkImage src='/images/works/kitsune-pet-2.png' alt="The fox during the night" />
        <WorkImage src='/images/works/kitsune-pet-5.png' alt="The fox is deep asleep!" />
      </Container>
    </Layout>
  )
}

export default Work 
