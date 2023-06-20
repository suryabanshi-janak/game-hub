import { useState } from 'react';
import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface GameQuery {
  genreId?: number;
  platformId: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area='nav'>
        <Navbar
          onSearch={(searchText) =>
            setGameQuery((prev) => ({ ...prev, searchText }))
          }
        />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList
            selectedGenreId={gameQuery?.genreId}
            onSelectGenre={(genre) =>
              setGameQuery((prev) => ({ ...prev, genreId: genre.id }))
            }
          />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <Box paddingLeft={4}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5}>
            <PlatformSelector
              selectedPlatformId={gameQuery?.platformId}
              onSelectPlatform={(platform) =>
                setGameQuery((prev) => ({ ...prev, platformId: platform.id }))
              }
            />
            <SortSelector
              sortOrder={gameQuery?.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery((prev) => ({ ...prev, sortOrder }))
              }
            />
          </HStack>
        </Box>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
