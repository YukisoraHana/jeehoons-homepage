import {
  List,
  ListItem,
  Link,
  Container,
  Button,
  Icon,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
export default function Page() {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          mb={6}
          p={3}
          align="center"
        >
          Hi, I&apos;m a Full Stack Developer based in Michigan!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Jeehoon Sim 🎐
            </Heading>
            <p> Software Engineer ( Artist / Developer / Content Creator ) </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/puter.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <div style={{ display: 'flex' }}>
            <div>
              <Heading mb={4} as="h3" variant="section-title">
                About
              </Heading>
            </div>
            <span className="section-emoji">🎋</span>
          </div>
          <Paragraph>
            Hi, I&apos;m Jeehoon, a freelance full-stack developer based in
            Michigan. I have a passion for creating innovative solutions and
            enjoy building things I want. My experience spans across various
            aspects of product development, from planning and designing to
            coding and solving real-life problems. When I&apos;m not at the
            computer, I like spending quality time with family and friends.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <div style={{ display: 'flex' }}>
            <div>
              <Heading mb={4} as="h3" variant="section-title">
                Bio
              </Heading>
            </div>
            <span className="section-emoji">🌸</span>
          </div>
          <BioSection>
            <BioYear>2024</BioYear>
            Completed the Computer Science B.S.E. in the College of Engineering
            at the University of Michigan—Ann Arbor 〽️
          </BioSection>
          <BioSection>
            <BioYear>2024 to present</BioYear>
            Working as a freelancer and full-stack developer
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <div style={{ display: 'flex' }}>
            <Heading mb={4} as="h3" variant="section-title">
              I Love
            </Heading>
            <span className="section-emoji">🎏</span>
          </div>
          <Paragraph>
            Reading,{' '}
            Art,  Games, Music,{' '}
            <Link
              target="_blank"
              color={useColorModeValue('blue.500', 'rgb(255,99,195)')}
              href="https://www.flickr.com/photos/201195786@N08/"
            >
              Photography
            </Link>
          </Paragraph>
        </Section>

        <Section delay={0.4}>
          <div style={{ display: 'flex' }}>
            <Heading mb={4} as="h3" variant="section-title">
              On the web
            </Heading>
            <span className="section-emoji">🕸️</span>
          </div>
          <List>
            <ListItem>
              <Link target="_blank" href="https://linkedin.com/in/jeehoonsim">
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Jeehoon Sim
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link target="_blank" href="https://github.com/wlgnstla">
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @wlgnstla
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}
