import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  match?: Maybe<Match>;
  matches: Array<Match>;
  aggregateMatch: AggregateMatch;
  findUniquePlayers?: Maybe<Players>;
  findManyPlayers: Array<Players>;
  team?: Maybe<Team>;
  teams: Array<Team>;
};


export type QueryMatchArgs = {
  where: MatchWhereUniqueInput;
};


export type QueryMatchesArgs = {
  where?: Maybe<MatchWhereInput>;
  orderBy?: Maybe<Array<MatchOrderByInput>>;
  cursor?: Maybe<MatchWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<MatchScalarFieldEnum>>;
};


export type QueryAggregateMatchArgs = {
  where?: Maybe<MatchWhereInput>;
  orderBy?: Maybe<Array<MatchOrderByInput>>;
  cursor?: Maybe<MatchWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryFindUniquePlayersArgs = {
  where: PlayersWhereUniqueInput;
};


export type QueryFindManyPlayersArgs = {
  where?: Maybe<PlayersWhereInput>;
  orderBy?: Maybe<Array<PlayersOrderByInput>>;
  cursor?: Maybe<PlayersWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PlayersScalarFieldEnum>>;
};


export type QueryTeamArgs = {
  where: TeamWhereUniqueInput;
};


export type QueryTeamsArgs = {
  where?: Maybe<TeamWhereInput>;
  orderBy?: Maybe<Array<TeamOrderByInput>>;
  cursor?: Maybe<TeamWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<TeamScalarFieldEnum>>;
};

export type Match = {
  __typename?: 'Match';
  id: Scalars['Int'];
  matchResult?: Maybe<Scalars['Int']>;
  screenshotPath?: Maybe<Scalars['String']>;
  teamId1?: Maybe<Scalars['Int']>;
  teamId2?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  Team1?: Maybe<Team>;
  Team2?: Maybe<Team>;
};


export type Team = {
  __typename?: 'Team';
  id: Scalars['Int'];
  teamName?: Maybe<Scalars['String']>;
  playerId1?: Maybe<Scalars['Int']>;
  playerId2?: Maybe<Scalars['Int']>;
  playerId3?: Maybe<Scalars['Int']>;
  playerId4?: Maybe<Scalars['Int']>;
  playerId5?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  PlayerH1?: Maybe<PlayerH>;
  PlayerH2?: Maybe<PlayerH>;
  PlayerH3?: Maybe<PlayerH>;
  PlayerH4?: Maybe<PlayerH>;
  PlayerH5?: Maybe<PlayerH>;
  Match1: Array<Match>;
  Match2: Array<Match>;
};


export type TeamMatch1Args = {
  where?: Maybe<MatchWhereInput>;
  orderBy?: Maybe<Array<MatchOrderByInput>>;
  cursor?: Maybe<MatchWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<MatchScalarFieldEnum>>;
};


export type TeamMatch2Args = {
  where?: Maybe<MatchWhereInput>;
  orderBy?: Maybe<Array<MatchOrderByInput>>;
  cursor?: Maybe<MatchWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<MatchScalarFieldEnum>>;
};

export type PlayerH = {
  __typename?: 'PlayerH';
  id: Scalars['Int'];
  playerId?: Maybe<Scalars['Int']>;
  skillLevel?: Maybe<Scalars['Float']>;
  userTag?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type MatchWhereInput = {
  AND?: Maybe<Array<MatchWhereInput>>;
  OR?: Maybe<Array<MatchWhereInput>>;
  NOT?: Maybe<Array<MatchWhereInput>>;
  id?: Maybe<IntFilter>;
  matchResult?: Maybe<IntNullableFilter>;
  screenshotPath?: Maybe<StringNullableFilter>;
  teamId1?: Maybe<IntNullableFilter>;
  teamId2?: Maybe<IntNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  Team1?: Maybe<TeamRelationFilter>;
  Team2?: Maybe<TeamRelationFilter>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type TeamRelationFilter = {
  is?: Maybe<TeamWhereInput>;
  isNot?: Maybe<TeamWhereInput>;
};

export type TeamWhereInput = {
  AND?: Maybe<Array<TeamWhereInput>>;
  OR?: Maybe<Array<TeamWhereInput>>;
  NOT?: Maybe<Array<TeamWhereInput>>;
  id?: Maybe<IntFilter>;
  teamName?: Maybe<StringNullableFilter>;
  playerId1?: Maybe<IntNullableFilter>;
  playerId2?: Maybe<IntNullableFilter>;
  playerId3?: Maybe<IntNullableFilter>;
  playerId4?: Maybe<IntNullableFilter>;
  playerId5?: Maybe<IntNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  PlayerH1?: Maybe<PlayerHRelationFilter>;
  PlayerH2?: Maybe<PlayerHRelationFilter>;
  PlayerH3?: Maybe<PlayerHRelationFilter>;
  PlayerH4?: Maybe<PlayerHRelationFilter>;
  PlayerH5?: Maybe<PlayerHRelationFilter>;
  Match1?: Maybe<MatchListRelationFilter>;
  Match2?: Maybe<MatchListRelationFilter>;
};

export type PlayerHRelationFilter = {
  is?: Maybe<PlayerHWhereInput>;
  isNot?: Maybe<PlayerHWhereInput>;
};

export type PlayerHWhereInput = {
  AND?: Maybe<Array<PlayerHWhereInput>>;
  OR?: Maybe<Array<PlayerHWhereInput>>;
  NOT?: Maybe<Array<PlayerHWhereInput>>;
  id?: Maybe<IntFilter>;
  playerId?: Maybe<IntNullableFilter>;
  skillLevel?: Maybe<FloatNullableFilter>;
  userTag?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  Players?: Maybe<PlayersRelationFilter>;
  Team1?: Maybe<TeamListRelationFilter>;
  Team2?: Maybe<TeamListRelationFilter>;
  Team3?: Maybe<TeamListRelationFilter>;
  Team4?: Maybe<TeamListRelationFilter>;
  Team5?: Maybe<TeamListRelationFilter>;
};

export type FloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
};

export type PlayersRelationFilter = {
  is?: Maybe<PlayersWhereInput>;
  isNot?: Maybe<PlayersWhereInput>;
};

export type PlayersWhereInput = {
  AND?: Maybe<Array<PlayersWhereInput>>;
  OR?: Maybe<Array<PlayersWhereInput>>;
  NOT?: Maybe<Array<PlayersWhereInput>>;
  id?: Maybe<IntFilter>;
  userId?: Maybe<StringNullableFilter>;
  skillLevel?: Maybe<FloatNullableFilter>;
  userTag?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  PlayerH?: Maybe<PlayerHListRelationFilter>;
};

export type PlayerHListRelationFilter = {
  every?: Maybe<PlayerHWhereInput>;
  some?: Maybe<PlayerHWhereInput>;
  none?: Maybe<PlayerHWhereInput>;
};

export type TeamListRelationFilter = {
  every?: Maybe<TeamWhereInput>;
  some?: Maybe<TeamWhereInput>;
  none?: Maybe<TeamWhereInput>;
};

export type MatchListRelationFilter = {
  every?: Maybe<MatchWhereInput>;
  some?: Maybe<MatchWhereInput>;
  none?: Maybe<MatchWhereInput>;
};

export type MatchOrderByInput = {
  id?: Maybe<SortOrder>;
  matchResult?: Maybe<SortOrder>;
  screenshotPath?: Maybe<SortOrder>;
  teamId1?: Maybe<SortOrder>;
  teamId2?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  Team1?: Maybe<TeamOrderByInput>;
  Team2?: Maybe<TeamOrderByInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type TeamOrderByInput = {
  id?: Maybe<SortOrder>;
  teamName?: Maybe<SortOrder>;
  playerId1?: Maybe<SortOrder>;
  playerId2?: Maybe<SortOrder>;
  playerId3?: Maybe<SortOrder>;
  playerId4?: Maybe<SortOrder>;
  playerId5?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  PlayerH1?: Maybe<PlayerHOrderByInput>;
  PlayerH2?: Maybe<PlayerHOrderByInput>;
  PlayerH3?: Maybe<PlayerHOrderByInput>;
  PlayerH4?: Maybe<PlayerHOrderByInput>;
  PlayerH5?: Maybe<PlayerHOrderByInput>;
};

export type PlayerHOrderByInput = {
  id?: Maybe<SortOrder>;
  playerId?: Maybe<SortOrder>;
  skillLevel?: Maybe<SortOrder>;
  userTag?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  Players?: Maybe<PlayersOrderByInput>;
};

export type PlayersOrderByInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  skillLevel?: Maybe<SortOrder>;
  userTag?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type MatchWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum MatchScalarFieldEnum {
  Id = 'id',
  MatchResult = 'matchResult',
  ScreenshotPath = 'screenshotPath',
  TeamId1 = 'teamId1',
  TeamId2 = 'teamId2',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type AggregateMatch = {
  __typename?: 'AggregateMatch';
  count?: Maybe<MatchCountAggregate>;
  avg?: Maybe<MatchAvgAggregate>;
  sum?: Maybe<MatchSumAggregate>;
  min?: Maybe<MatchMinAggregate>;
  max?: Maybe<MatchMaxAggregate>;
};

export type MatchCountAggregate = {
  __typename?: 'MatchCountAggregate';
  id: Scalars['Int'];
  matchResult?: Maybe<Scalars['Int']>;
  screenshotPath?: Maybe<Scalars['Int']>;
  teamId1?: Maybe<Scalars['Int']>;
  teamId2?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type MatchAvgAggregate = {
  __typename?: 'MatchAvgAggregate';
  id: Scalars['Float'];
  matchResult?: Maybe<Scalars['Float']>;
  teamId1?: Maybe<Scalars['Float']>;
  teamId2?: Maybe<Scalars['Float']>;
};

export type MatchSumAggregate = {
  __typename?: 'MatchSumAggregate';
  id: Scalars['Int'];
  matchResult?: Maybe<Scalars['Int']>;
  teamId1?: Maybe<Scalars['Int']>;
  teamId2?: Maybe<Scalars['Int']>;
};

export type MatchMinAggregate = {
  __typename?: 'MatchMinAggregate';
  id: Scalars['Int'];
  matchResult?: Maybe<Scalars['Int']>;
  screenshotPath?: Maybe<Scalars['String']>;
  teamId1?: Maybe<Scalars['Int']>;
  teamId2?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MatchMaxAggregate = {
  __typename?: 'MatchMaxAggregate';
  id: Scalars['Int'];
  matchResult?: Maybe<Scalars['Int']>;
  screenshotPath?: Maybe<Scalars['String']>;
  teamId1?: Maybe<Scalars['Int']>;
  teamId2?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Players = {
  __typename?: 'Players';
  id: Scalars['Int'];
  userId?: Maybe<Scalars['String']>;
  skillLevel?: Maybe<Scalars['Float']>;
  userTag?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  PlayerH: Array<PlayerH>;
};


export type PlayersPlayerHArgs = {
  where?: Maybe<PlayerHWhereInput>;
  orderBy?: Maybe<Array<PlayerHOrderByInput>>;
  cursor?: Maybe<PlayerHWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PlayerHScalarFieldEnum>>;
};

export type PlayerHWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum PlayerHScalarFieldEnum {
  Id = 'id',
  PlayerId = 'playerId',
  SkillLevel = 'skillLevel',
  UserTag = 'userTag',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type PlayersWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum PlayersScalarFieldEnum {
  Id = 'id',
  UserId = 'userId',
  SkillLevel = 'skillLevel',
  UserTag = 'userTag',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type TeamWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum TeamScalarFieldEnum {
  Id = 'id',
  TeamName = 'teamName',
  PlayerId1 = 'playerId1',
  PlayerId2 = 'playerId2',
  PlayerId3 = 'playerId3',
  PlayerId4 = 'playerId4',
  PlayerId5 = 'playerId5',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type AllPlayersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPlayersQuery = (
  { __typename?: 'Query' }
  & { findManyPlayers: Array<(
    { __typename?: 'Players' }
    & Pick<Players, 'userTag'>
  )> }
);

export type GetMatchesQueryVariables = Exact<{
  take: Scalars['Int'];
  skip: Scalars['Int'];
}>;


export type GetMatchesQuery = (
  { __typename?: 'Query' }
  & { matches: Array<(
    { __typename?: 'Match' }
    & Pick<Match, 'createdAt' | 'id' | 'screenshotPath' | 'matchResult'>
    & { Team1?: Maybe<(
      { __typename?: 'Team' }
      & Pick<Team, 'teamName'>
      & { PlayerH1?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'userTag' | 'skillLevel'>
      )>, PlayerH2?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'userTag' | 'skillLevel'>
      )>, PlayerH3?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'userTag' | 'skillLevel'>
      )>, PlayerH4?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'userTag' | 'skillLevel'>
      )>, PlayerH5?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'userTag' | 'skillLevel'>
      )> }
    )>, Team2?: Maybe<(
      { __typename?: 'Team' }
      & Pick<Team, 'teamName'>
      & { PlayerH1?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'userTag' | 'skillLevel'>
      )>, PlayerH2?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'userTag' | 'skillLevel'>
      )>, PlayerH3?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'userTag' | 'skillLevel'>
      )>, PlayerH4?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'userTag' | 'skillLevel'>
      )>, PlayerH5?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'userTag' | 'skillLevel'>
      )> }
    )> }
  )> }
);


export const AllPlayersDocument = gql`
    query AllPlayers {
  findManyPlayers {
    userTag
  }
}
    `;

/**
 * __useAllPlayersQuery__
 *
 * To run a query within a React component, call `useAllPlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPlayersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPlayersQuery(baseOptions?: Apollo.QueryHookOptions<AllPlayersQuery, AllPlayersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllPlayersQuery, AllPlayersQueryVariables>(AllPlayersDocument, options);
      }
export function useAllPlayersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllPlayersQuery, AllPlayersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllPlayersQuery, AllPlayersQueryVariables>(AllPlayersDocument, options);
        }
export type AllPlayersQueryHookResult = ReturnType<typeof useAllPlayersQuery>;
export type AllPlayersLazyQueryHookResult = ReturnType<typeof useAllPlayersLazyQuery>;
export type AllPlayersQueryResult = Apollo.QueryResult<AllPlayersQuery, AllPlayersQueryVariables>;
export const GetMatchesDocument = gql`
    query GetMatches($take: Int!, $skip: Int!) {
  matches(orderBy: {createdAt: desc}, take: $take, skip: $skip) {
    createdAt
    id
    screenshotPath
    matchResult
    Team1 {
      teamName
      PlayerH1 {
        userTag
        skillLevel
      }
      PlayerH2 {
        userTag
        skillLevel
      }
      PlayerH3 {
        userTag
        skillLevel
      }
      PlayerH4 {
        userTag
        skillLevel
      }
      PlayerH5 {
        userTag
        skillLevel
      }
    }
    Team2 {
      teamName
      PlayerH1 {
        userTag
        skillLevel
      }
      PlayerH2 {
        userTag
        skillLevel
      }
      PlayerH3 {
        userTag
        skillLevel
      }
      PlayerH4 {
        userTag
        skillLevel
      }
      PlayerH5 {
        userTag
        skillLevel
      }
    }
  }
}
    `;

/**
 * __useGetMatchesQuery__
 *
 * To run a query within a React component, call `useGetMatchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMatchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMatchesQuery({
 *   variables: {
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetMatchesQuery(baseOptions: Apollo.QueryHookOptions<GetMatchesQuery, GetMatchesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMatchesQuery, GetMatchesQueryVariables>(GetMatchesDocument, options);
      }
export function useGetMatchesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMatchesQuery, GetMatchesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMatchesQuery, GetMatchesQueryVariables>(GetMatchesDocument, options);
        }
export type GetMatchesQueryHookResult = ReturnType<typeof useGetMatchesQuery>;
export type GetMatchesLazyQueryHookResult = ReturnType<typeof useGetMatchesLazyQuery>;
export type GetMatchesQueryResult = Apollo.QueryResult<GetMatchesQuery, GetMatchesQueryVariables>;