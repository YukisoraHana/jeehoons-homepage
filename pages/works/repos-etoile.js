import { Container, List, ListItem, Badge, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Repos Étoile">
      <Container>
        <Title>
          Repos Étoile<Badge>2022</Badge>
        </Title>
        <P>A search engine that categorizes popular GitHub repositories
          by programming languages.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Flask, Python</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link target='_blank' href='https://github.com/wlgnstla/Repos_Etoile'>
              https://github.com/wlgnstla/Repos_Etoile <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
        </List>
        <WorkImage src='/images/works/repos-etoile-1.png' alt='Repos Etoile Sample 1' />
        <WorkImage src='/images/works/repos-etoile-2.png' alt='Repos Etoile Sample 2' />
        <WorkImage src='/images/works/repos-etoile-3.png' alt='Repos Etoile Sample 3' />
        <WorkImage src='/images/works/repos-etoile-4.png' alt='Repos Etoile Sample 4' />
      </Container>
    </Layout>
  )
}

export default Work 
