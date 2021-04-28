import React from 'react';
import PlayerList from '../components/Heroes/PlayerList';
import { GetAllPlayersDocument } from '../generated/graphql';
import { addApolloState, initializeApollo } from '../lib/apolloClient';

function Heroes() {
  return (
    <main className="container my-2">
      <h1>All Heroes</h1>
      <PlayerList />
    </main>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GetAllPlayersDocument,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
}

export default Heroes;
