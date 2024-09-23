import { Container, List, ListItem, Badge, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Weather App">
      <Container>
        <Title>
          Weather App <Badge>2022</Badge>
        </Title>
        <P>
          A minimalistic app that displays the city&apos;s current weather and image.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link target='_blank' href="https://wlgnstla.github.io/Weather-App/">
              Check the weather <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Javascript, HTML, CSS</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link target='_blank' href='https://github.com/wlgnstla/Weather-App'>
              https://github.com/wlgnstla/Weather-App <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
        </List>
        <WorkImage src='/images/works/weather-4.png' alt="Main page" />
        <WorkImage src='/images/works/weather-3.png' alt="Chicago weather" />
        <WorkImage src='/images/works/weather-1.png' alt="Busan weather" />
        <WorkImage src='/images/works/weather-2.png' alt="Tokyo weather" />

      </Container>
    </Layout>
  )
}

export default Work 
