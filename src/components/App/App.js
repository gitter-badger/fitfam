import React from 'react';
import { Flex, Box } from 'reflexbox';

const App = () => (
  <div className="App">
    <Flex align="center" justify="center" style={{ backgroundColor: 'white' }}>
      <Box p={2}>
        <img src="/fitfam.png" alt="FITFAM" height="18" />
      </Box>
    </Flex>
  </div>
);

export default App;
