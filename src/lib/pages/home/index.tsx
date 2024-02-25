import {
  Box,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Select,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

// import json

import data from '../../../../data.json';
import ideas from '../../../../ideas.json';

const Home = () => {
  const [job, setJob] = useState('');
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(data);
  }, []);

  return (
    <Grid gap={4}>
      <Heading as="h1" size="lg" textAlign="center">
        Digital Products Ideas Generator
      </Heading>
      <FormControl>
        <FormLabel>Select your job</FormLabel>
        <Select
          placeholder="Your job"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        >
          {data.map((j) => (
            <option key={j.title} value={j.title}>
              {j.title}
            </option>
          ))}
        </Select>
      </FormControl>

      {job !== '' && (
        <Heading as="h3" size="md" textAlign="left" marginTop={6}>
          Digital products
        </Heading>
      )}

      <Grid gap={2}>
        {ideas
          .find((idea) => idea.job === job)
          ?.products.map((idea) => (
            <GridItem key={idea.title}>
              <Box borderWidth="1px" borderRadius="md" padding={3}>
                <Box as="span" fontSize="md" fontWeight="semibold">
                  {idea.title}
                </Box>
              </Box>
            </GridItem>
          ))}
      </Grid>
    </Grid>
  );
};

export default Home;
