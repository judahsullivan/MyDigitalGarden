import { Box, Icon, SimpleGrid, VStack } from '@chakra-ui/react';
import { Fragment } from 'react';
import { PageSlideFade, container } from '../../animations/motion/transition';
import { MotionBox } from '@/components/animations/motion/motion';
import RepositoryCard from '@/components/garden/github/repocard';
import { SiGithub } from 'react-icons/si';
import { fetchRecentRepos } from '@/lib/fetchGitHub';

export default function Repositories({ repositories }: any) {
  return (
    <Fragment>
      <PageSlideFade>
        <VStack textAlign={{ base: 'center', md: 'left' }} spacing={4}>
          <Box textAlign={'left'} w={'100%'} fontSize={'2xl'} textTransform={'capitalize'}>
            <Box fontWeight={700} letterSpacing={'widest'}>
              My Repositories!
            </Box>
            <Box fontSize={'lg'} maxW={'2xl'}>
              Here is a list of my repositories!
              <Icon ml={2} as={SiGithub} />
              <Box></Box>I am always making and updating projects take a look!
            </Box>
          </Box>
        </VStack>
        <MotionBox initial={'hidden'} animate={'visible'} variants={container}>
          <SimpleGrid spacing={2} columns={[1, 2, 2]}>
            {repositories.map((repository: any) => (
              <RepositoryCard
                key={repository.id}
                title={repository.name}
                description={repository.description}
                url={repository.html_url}
                language={repository.language}
                stargazers_count={repository.stargazers_count}
                forks_count={repository.forks_count}
                userProfile={repository.userProfile}
              />
            ))}
          </SimpleGrid>
        </MotionBox>
      </PageSlideFade>
    </Fragment>
  );
}

export async function getStaticProps() {
  const repositories = await fetchRecentRepos();

  return {
    props: {
      repositories
    }
  };
}
