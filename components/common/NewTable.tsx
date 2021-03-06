import { Box, Grid } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import {
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";
import React, { Fragment } from "react";
import { getRankingString } from "utils/strings";
import OutlinedBox from "./OutlinedBox";

export default function NewTable({
  caption,
  headers,
  data,
  smallAtPx,
  leaderboardKey,
}: {
  caption?: string;
  headers: {
    name: string;
    dataKey: string;
  }[];
  data: (Record<string, React.ReactNode> & { id: number })[];
  smallAtPx?: string;
  leaderboardKey?: string;
}) {
  const [isSmall] = useMediaQuery(
    smallAtPx ? `(max-width: ${smallAtPx}px)` : "(max-width: 600px)"
  );

  let lastValue: any = null;
  let rankToUse: number = 1;

  if (isSmall) {
    return (
      <>
        {data.map((row, i) => {
          if (leaderboardKey) {
            if (row[leaderboardKey] !== lastValue) rankToUse = i + 1;
            lastValue = row[leaderboardKey];
          }
          return (
            <Grid
              key={row.id}
              border="1px solid"
              borderColor="whiteAlpha.300"
              rounded="lg"
              px={4}
              py={2}
              mb={4}
              templateColumns="1fr 2fr"
              autoRows="1fr"
              gridRowGap={1}
              alignItems="center"
            >
              {leaderboardKey ? (
                <Fragment>
                  <Box
                    textTransform="uppercase"
                    fontWeight="bold"
                    fontSize="sm"
                    fontFamily="heading"
                    letterSpacing="wider"
                    color="gray.400"
                    mr={2}
                  >
                    Rank
                  </Box>
                  <Box>{getRankingString(rankToUse)}</Box>
                </Fragment>
              ) : null}
              {headers.map(({ name, dataKey }) => {
                return (
                  <Fragment key={dataKey}>
                    <Box
                      textTransform="uppercase"
                      fontWeight="bold"
                      fontSize="sm"
                      fontFamily="heading"
                      letterSpacing="wider"
                      color="gray.400"
                      mr={2}
                    >
                      {name}
                    </Box>
                    <Box>{row[dataKey]}</Box>
                  </Fragment>
                );
              })}
            </Grid>
          );
        })}
      </>
    );
  }

  return (
    <OutlinedBox>
      <Table variant="simple" fontSize="sm">
        {caption && <TableCaption placement="top">{caption}</TableCaption>}
        <Thead>
          <Tr>
            {leaderboardKey ? <Th>Rank</Th> : null}
            {headers.map(({ name }) => (
              <Th key={name}>{name}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, i) => {
            if (leaderboardKey) {
              if (row[leaderboardKey] !== lastValue) rankToUse = i + 1;
              lastValue = row[leaderboardKey];
            }

            return (
              <Tr key={row.id}>
                {leaderboardKey ? <Th>{getRankingString(rankToUse)}</Th> : null}
                {headers.map(({ dataKey }) => {
                  return <Td key={dataKey}>{row[dataKey]}</Td>;
                })}
              </Tr>
            );
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            {leaderboardKey ? <Th>Rank</Th> : null}
            {headers.map(({ name }) => (
              <Th key={name}>{name}</Th>
            ))}
          </Tr>
        </Tfoot>
      </Table>
    </OutlinedBox>
  );
}
