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
  player?: Maybe<Player>;
  players: Array<Player>;
  playerH?: Maybe<PlayerH>;
  playerHS: Array<PlayerH>;
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


export type QueryPlayerArgs = {
  where: PlayerWhereUniqueInput;
};


export type QueryPlayersArgs = {
  where?: Maybe<PlayerWhereInput>;
  orderBy?: Maybe<Array<PlayerOrderByInput>>;
  cursor?: Maybe<PlayerWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PlayerScalarFieldEnum>>;
};


export type QueryPlayerHArgs = {
  where: PlayerHWhereUniqueInput;
};


export type QueryPlayerHsArgs = {
  where?: Maybe<PlayerHWhereInput>;
  orderBy?: Maybe<Array<PlayerHOrderByInput>>;
  cursor?: Maybe<PlayerHWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PlayerHScalarFieldEnum>>;
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
  Player?: Maybe<Player>;
  Team1: Array<Team>;
  Team2: Array<Team>;
  Team3: Array<Team>;
  Team4: Array<Team>;
  Team5: Array<Team>;
};


export type PlayerHTeam1Args = {
  where?: Maybe<TeamWhereInput>;
  orderBy?: Maybe<Array<TeamOrderByInput>>;
  cursor?: Maybe<TeamWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<TeamScalarFieldEnum>>;
};


export type PlayerHTeam2Args = {
  where?: Maybe<TeamWhereInput>;
  orderBy?: Maybe<Array<TeamOrderByInput>>;
  cursor?: Maybe<TeamWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<TeamScalarFieldEnum>>;
};


export type PlayerHTeam3Args = {
  where?: Maybe<TeamWhereInput>;
  orderBy?: Maybe<Array<TeamOrderByInput>>;
  cursor?: Maybe<TeamWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<TeamScalarFieldEnum>>;
};


export type PlayerHTeam4Args = {
  where?: Maybe<TeamWhereInput>;
  orderBy?: Maybe<Array<TeamOrderByInput>>;
  cursor?: Maybe<TeamWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<TeamScalarFieldEnum>>;
};


export type PlayerHTeam5Args = {
  where?: Maybe<TeamWhereInput>;
  orderBy?: Maybe<Array<TeamOrderByInput>>;
  cursor?: Maybe<TeamWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<TeamScalarFieldEnum>>;
};

export type Player = {
  __typename?: 'Player';
  id: Scalars['Int'];
  userId?: Maybe<Scalars['String']>;
  skillLevel?: Maybe<Scalars['Float']>;
  userTag?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  PlayerH: Array<PlayerH>;
};


export type PlayerPlayerHArgs = {
  where?: Maybe<PlayerHWhereInput>;
  orderBy?: Maybe<Array<PlayerHOrderByInput>>;
  cursor?: Maybe<PlayerHWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PlayerHScalarFieldEnum>>;
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
  Player?: Maybe<PlayerRelationFilter>;
  Team1?: Maybe<TeamListRelationFilter>;
  Team2?: Maybe<TeamListRelationFilter>;
  Team3?: Maybe<TeamListRelationFilter>;
  Team4?: Maybe<TeamListRelationFilter>;
  Team5?: Maybe<TeamListRelationFilter>;
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

export type PlayerRelationFilter = {
  is?: Maybe<PlayerWhereInput>;
  isNot?: Maybe<PlayerWhereInput>;
};

export type PlayerWhereInput = {
  AND?: Maybe<Array<PlayerWhereInput>>;
  OR?: Maybe<Array<PlayerWhereInput>>;
  NOT?: Maybe<Array<PlayerWhereInput>>;
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

export type MatchListRelationFilter = {
  every?: Maybe<MatchWhereInput>;
  some?: Maybe<MatchWhereInput>;
  none?: Maybe<MatchWhereInput>;
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

export type TeamRelationFilter = {
  is?: Maybe<TeamWhereInput>;
  isNot?: Maybe<TeamWhereInput>;
};

export type PlayerHOrderByInput = {
  id?: Maybe<SortOrder>;
  playerId?: Maybe<SortOrder>;
  skillLevel?: Maybe<SortOrder>;
  userTag?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  Player?: Maybe<PlayerOrderByInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type PlayerOrderByInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  skillLevel?: Maybe<SortOrder>;
  userTag?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
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

export type PlayerWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

export enum PlayerScalarFieldEnum {
  Id = 'id',
  UserId = 'userId',
  SkillLevel = 'skillLevel',
  UserTag = 'userTag',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type Mutation = {
  __typename?: 'Mutation';
  createPlayer: Player;
  deletePlayer?: Maybe<Player>;
  updatePlayer?: Maybe<Player>;
};


export type MutationCreatePlayerArgs = {
  data: PlayerCreateInput;
};


export type MutationDeletePlayerArgs = {
  where: PlayerWhereUniqueInput;
};


export type MutationUpdatePlayerArgs = {
  data: PlayerUpdateInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerCreateInput = {
  userId?: Maybe<Scalars['String']>;
  skillLevel?: Maybe<Scalars['Float']>;
  userTag?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  PlayerH?: Maybe<PlayerHCreateNestedManyWithoutPlayerInput>;
};

export type PlayerHCreateNestedManyWithoutPlayerInput = {
  create?: Maybe<Array<PlayerHCreateWithoutPlayerInput>>;
  connectOrCreate?: Maybe<Array<PlayerHCreateOrConnectWithoutPlayerInput>>;
  connect?: Maybe<Array<PlayerHWhereUniqueInput>>;
};

export type PlayerHCreateWithoutPlayerInput = {
  skillLevel?: Maybe<Scalars['Float']>;
  userTag?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Team1?: Maybe<TeamCreateNestedManyWithoutPlayerH1Input>;
  Team2?: Maybe<TeamCreateNestedManyWithoutPlayerH2Input>;
  Team3?: Maybe<TeamCreateNestedManyWithoutPlayerH3Input>;
  Team4?: Maybe<TeamCreateNestedManyWithoutPlayerH4Input>;
  Team5?: Maybe<TeamCreateNestedManyWithoutPlayerH5Input>;
};

export type TeamCreateNestedManyWithoutPlayerH1Input = {
  create?: Maybe<Array<TeamCreateWithoutPlayerH1Input>>;
  connectOrCreate?: Maybe<Array<TeamCreateOrConnectWithoutPlayerH1Input>>;
  connect?: Maybe<Array<TeamWhereUniqueInput>>;
};

export type TeamCreateWithoutPlayerH1Input = {
  teamName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  PlayerH2?: Maybe<PlayerHCreateNestedOneWithoutTeam2Input>;
  PlayerH3?: Maybe<PlayerHCreateNestedOneWithoutTeam3Input>;
  PlayerH4?: Maybe<PlayerHCreateNestedOneWithoutTeam4Input>;
  PlayerH5?: Maybe<PlayerHCreateNestedOneWithoutTeam5Input>;
  Match1?: Maybe<MatchCreateNestedManyWithoutTeam1Input>;
  Match2?: Maybe<MatchCreateNestedManyWithoutTeam2Input>;
};

export type PlayerHCreateNestedOneWithoutTeam2Input = {
  create?: Maybe<PlayerHCreateWithoutTeam2Input>;
  connectOrCreate?: Maybe<PlayerHCreateOrConnectWithoutTeam2Input>;
  connect?: Maybe<PlayerHWhereUniqueInput>;
};

export type PlayerHCreateWithoutTeam2Input = {
  skillLevel?: Maybe<Scalars['Float']>;
  userTag?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Player?: Maybe<PlayerCreateNestedOneWithoutPlayerHInput>;
  Team1?: Maybe<TeamCreateNestedManyWithoutPlayerH1Input>;
  Team3?: Maybe<TeamCreateNestedManyWithoutPlayerH3Input>;
  Team4?: Maybe<TeamCreateNestedManyWithoutPlayerH4Input>;
  Team5?: Maybe<TeamCreateNestedManyWithoutPlayerH5Input>;
};

export type PlayerCreateNestedOneWithoutPlayerHInput = {
  create?: Maybe<PlayerCreateWithoutPlayerHInput>;
  connectOrCreate?: Maybe<PlayerCreateOrConnectWithoutPlayerHInput>;
  connect?: Maybe<PlayerWhereUniqueInput>;
};

export type PlayerCreateWithoutPlayerHInput = {
  userId?: Maybe<Scalars['String']>;
  skillLevel?: Maybe<Scalars['Float']>;
  userTag?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PlayerCreateOrConnectWithoutPlayerHInput = {
  where: PlayerWhereUniqueInput;
  create: PlayerCreateWithoutPlayerHInput;
};

export type TeamCreateNestedManyWithoutPlayerH3Input = {
  create?: Maybe<Array<TeamCreateWithoutPlayerH3Input>>;
  connectOrCreate?: Maybe<Array<TeamCreateOrConnectWithoutPlayerH3Input>>;
  connect?: Maybe<Array<TeamWhereUniqueInput>>;
};

export type TeamCreateWithoutPlayerH3Input = {
  teamName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  PlayerH1?: Maybe<PlayerHCreateNestedOneWithoutTeam1Input>;
  PlayerH2?: Maybe<PlayerHCreateNestedOneWithoutTeam2Input>;
  PlayerH4?: Maybe<PlayerHCreateNestedOneWithoutTeam4Input>;
  PlayerH5?: Maybe<PlayerHCreateNestedOneWithoutTeam5Input>;
  Match1?: Maybe<MatchCreateNestedManyWithoutTeam1Input>;
  Match2?: Maybe<MatchCreateNestedManyWithoutTeam2Input>;
};

export type PlayerHCreateNestedOneWithoutTeam1Input = {
  create?: Maybe<PlayerHCreateWithoutTeam1Input>;
  connectOrCreate?: Maybe<PlayerHCreateOrConnectWithoutTeam1Input>;
  connect?: Maybe<PlayerHWhereUniqueInput>;
};

export type PlayerHCreateWithoutTeam1Input = {
  skillLevel?: Maybe<Scalars['Float']>;
  userTag?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Player?: Maybe<PlayerCreateNestedOneWithoutPlayerHInput>;
  Team2?: Maybe<TeamCreateNestedManyWithoutPlayerH2Input>;
  Team3?: Maybe<TeamCreateNestedManyWithoutPlayerH3Input>;
  Team4?: Maybe<TeamCreateNestedManyWithoutPlayerH4Input>;
  Team5?: Maybe<TeamCreateNestedManyWithoutPlayerH5Input>;
};

export type TeamCreateNestedManyWithoutPlayerH2Input = {
  create?: Maybe<Array<TeamCreateWithoutPlayerH2Input>>;
  connectOrCreate?: Maybe<Array<TeamCreateOrConnectWithoutPlayerH2Input>>;
  connect?: Maybe<Array<TeamWhereUniqueInput>>;
};

export type TeamCreateWithoutPlayerH2Input = {
  teamName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  PlayerH1?: Maybe<PlayerHCreateNestedOneWithoutTeam1Input>;
  PlayerH3?: Maybe<PlayerHCreateNestedOneWithoutTeam3Input>;
  PlayerH4?: Maybe<PlayerHCreateNestedOneWithoutTeam4Input>;
  PlayerH5?: Maybe<PlayerHCreateNestedOneWithoutTeam5Input>;
  Match1?: Maybe<MatchCreateNestedManyWithoutTeam1Input>;
  Match2?: Maybe<MatchCreateNestedManyWithoutTeam2Input>;
};

export type PlayerHCreateNestedOneWithoutTeam3Input = {
  create?: Maybe<PlayerHCreateWithoutTeam3Input>;
  connectOrCreate?: Maybe<PlayerHCreateOrConnectWithoutTeam3Input>;
  connect?: Maybe<PlayerHWhereUniqueInput>;
};

export type PlayerHCreateWithoutTeam3Input = {
  skillLevel?: Maybe<Scalars['Float']>;
  userTag?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Player?: Maybe<PlayerCreateNestedOneWithoutPlayerHInput>;
  Team1?: Maybe<TeamCreateNestedManyWithoutPlayerH1Input>;
  Team2?: Maybe<TeamCreateNestedManyWithoutPlayerH2Input>;
  Team4?: Maybe<TeamCreateNestedManyWithoutPlayerH4Input>;
  Team5?: Maybe<TeamCreateNestedManyWithoutPlayerH5Input>;
};

export type TeamCreateNestedManyWithoutPlayerH4Input = {
  create?: Maybe<Array<TeamCreateWithoutPlayerH4Input>>;
  connectOrCreate?: Maybe<Array<TeamCreateOrConnectWithoutPlayerH4Input>>;
  connect?: Maybe<Array<TeamWhereUniqueInput>>;
};

export type TeamCreateWithoutPlayerH4Input = {
  teamName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  PlayerH1?: Maybe<PlayerHCreateNestedOneWithoutTeam1Input>;
  PlayerH2?: Maybe<PlayerHCreateNestedOneWithoutTeam2Input>;
  PlayerH3?: Maybe<PlayerHCreateNestedOneWithoutTeam3Input>;
  PlayerH5?: Maybe<PlayerHCreateNestedOneWithoutTeam5Input>;
  Match1?: Maybe<MatchCreateNestedManyWithoutTeam1Input>;
  Match2?: Maybe<MatchCreateNestedManyWithoutTeam2Input>;
};

export type PlayerHCreateNestedOneWithoutTeam5Input = {
  create?: Maybe<PlayerHCreateWithoutTeam5Input>;
  connectOrCreate?: Maybe<PlayerHCreateOrConnectWithoutTeam5Input>;
  connect?: Maybe<PlayerHWhereUniqueInput>;
};

export type PlayerHCreateWithoutTeam5Input = {
  skillLevel?: Maybe<Scalars['Float']>;
  userTag?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Player?: Maybe<PlayerCreateNestedOneWithoutPlayerHInput>;
  Team1?: Maybe<TeamCreateNestedManyWithoutPlayerH1Input>;
  Team2?: Maybe<TeamCreateNestedManyWithoutPlayerH2Input>;
  Team3?: Maybe<TeamCreateNestedManyWithoutPlayerH3Input>;
  Team4?: Maybe<TeamCreateNestedManyWithoutPlayerH4Input>;
};

export type PlayerHCreateOrConnectWithoutTeam5Input = {
  where: PlayerHWhereUniqueInput;
  create: PlayerHCreateWithoutTeam5Input;
};

export type MatchCreateNestedManyWithoutTeam1Input = {
  create?: Maybe<Array<MatchCreateWithoutTeam1Input>>;
  connectOrCreate?: Maybe<Array<MatchCreateOrConnectWithoutTeam1Input>>;
  connect?: Maybe<Array<MatchWhereUniqueInput>>;
};

export type MatchCreateWithoutTeam1Input = {
  matchResult?: Maybe<Scalars['Int']>;
  screenshotPath?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Team2?: Maybe<TeamCreateNestedOneWithoutMatch2Input>;
};

export type TeamCreateNestedOneWithoutMatch2Input = {
  create?: Maybe<TeamCreateWithoutMatch2Input>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutMatch2Input>;
  connect?: Maybe<TeamWhereUniqueInput>;
};

export type TeamCreateWithoutMatch2Input = {
  teamName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  PlayerH1?: Maybe<PlayerHCreateNestedOneWithoutTeam1Input>;
  PlayerH2?: Maybe<PlayerHCreateNestedOneWithoutTeam2Input>;
  PlayerH3?: Maybe<PlayerHCreateNestedOneWithoutTeam3Input>;
  PlayerH4?: Maybe<PlayerHCreateNestedOneWithoutTeam4Input>;
  PlayerH5?: Maybe<PlayerHCreateNestedOneWithoutTeam5Input>;
  Match1?: Maybe<MatchCreateNestedManyWithoutTeam1Input>;
};

export type PlayerHCreateNestedOneWithoutTeam4Input = {
  create?: Maybe<PlayerHCreateWithoutTeam4Input>;
  connectOrCreate?: Maybe<PlayerHCreateOrConnectWithoutTeam4Input>;
  connect?: Maybe<PlayerHWhereUniqueInput>;
};

export type PlayerHCreateWithoutTeam4Input = {
  skillLevel?: Maybe<Scalars['Float']>;
  userTag?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Player?: Maybe<PlayerCreateNestedOneWithoutPlayerHInput>;
  Team1?: Maybe<TeamCreateNestedManyWithoutPlayerH1Input>;
  Team2?: Maybe<TeamCreateNestedManyWithoutPlayerH2Input>;
  Team3?: Maybe<TeamCreateNestedManyWithoutPlayerH3Input>;
  Team5?: Maybe<TeamCreateNestedManyWithoutPlayerH5Input>;
};

export type TeamCreateNestedManyWithoutPlayerH5Input = {
  create?: Maybe<Array<TeamCreateWithoutPlayerH5Input>>;
  connectOrCreate?: Maybe<Array<TeamCreateOrConnectWithoutPlayerH5Input>>;
  connect?: Maybe<Array<TeamWhereUniqueInput>>;
};

export type TeamCreateWithoutPlayerH5Input = {
  teamName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  PlayerH1?: Maybe<PlayerHCreateNestedOneWithoutTeam1Input>;
  PlayerH2?: Maybe<PlayerHCreateNestedOneWithoutTeam2Input>;
  PlayerH3?: Maybe<PlayerHCreateNestedOneWithoutTeam3Input>;
  PlayerH4?: Maybe<PlayerHCreateNestedOneWithoutTeam4Input>;
  Match1?: Maybe<MatchCreateNestedManyWithoutTeam1Input>;
  Match2?: Maybe<MatchCreateNestedManyWithoutTeam2Input>;
};

export type MatchCreateNestedManyWithoutTeam2Input = {
  create?: Maybe<Array<MatchCreateWithoutTeam2Input>>;
  connectOrCreate?: Maybe<Array<MatchCreateOrConnectWithoutTeam2Input>>;
  connect?: Maybe<Array<MatchWhereUniqueInput>>;
};

export type MatchCreateWithoutTeam2Input = {
  matchResult?: Maybe<Scalars['Int']>;
  screenshotPath?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Team1?: Maybe<TeamCreateNestedOneWithoutMatch1Input>;
};

export type TeamCreateNestedOneWithoutMatch1Input = {
  create?: Maybe<TeamCreateWithoutMatch1Input>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutMatch1Input>;
  connect?: Maybe<TeamWhereUniqueInput>;
};

export type TeamCreateWithoutMatch1Input = {
  teamName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  PlayerH1?: Maybe<PlayerHCreateNestedOneWithoutTeam1Input>;
  PlayerH2?: Maybe<PlayerHCreateNestedOneWithoutTeam2Input>;
  PlayerH3?: Maybe<PlayerHCreateNestedOneWithoutTeam3Input>;
  PlayerH4?: Maybe<PlayerHCreateNestedOneWithoutTeam4Input>;
  PlayerH5?: Maybe<PlayerHCreateNestedOneWithoutTeam5Input>;
  Match2?: Maybe<MatchCreateNestedManyWithoutTeam2Input>;
};

export type TeamCreateOrConnectWithoutMatch1Input = {
  where: TeamWhereUniqueInput;
  create: TeamCreateWithoutMatch1Input;
};

export type MatchCreateOrConnectWithoutTeam2Input = {
  where: MatchWhereUniqueInput;
  create: MatchCreateWithoutTeam2Input;
};

export type TeamCreateOrConnectWithoutPlayerH5Input = {
  where: TeamWhereUniqueInput;
  create: TeamCreateWithoutPlayerH5Input;
};

export type PlayerHCreateOrConnectWithoutTeam4Input = {
  where: PlayerHWhereUniqueInput;
  create: PlayerHCreateWithoutTeam4Input;
};

export type TeamCreateOrConnectWithoutMatch2Input = {
  where: TeamWhereUniqueInput;
  create: TeamCreateWithoutMatch2Input;
};

export type MatchCreateOrConnectWithoutTeam1Input = {
  where: MatchWhereUniqueInput;
  create: MatchCreateWithoutTeam1Input;
};

export type TeamCreateOrConnectWithoutPlayerH4Input = {
  where: TeamWhereUniqueInput;
  create: TeamCreateWithoutPlayerH4Input;
};

export type PlayerHCreateOrConnectWithoutTeam3Input = {
  where: PlayerHWhereUniqueInput;
  create: PlayerHCreateWithoutTeam3Input;
};

export type TeamCreateOrConnectWithoutPlayerH2Input = {
  where: TeamWhereUniqueInput;
  create: TeamCreateWithoutPlayerH2Input;
};

export type PlayerHCreateOrConnectWithoutTeam1Input = {
  where: PlayerHWhereUniqueInput;
  create: PlayerHCreateWithoutTeam1Input;
};

export type TeamCreateOrConnectWithoutPlayerH3Input = {
  where: TeamWhereUniqueInput;
  create: TeamCreateWithoutPlayerH3Input;
};

export type PlayerHCreateOrConnectWithoutTeam2Input = {
  where: PlayerHWhereUniqueInput;
  create: PlayerHCreateWithoutTeam2Input;
};

export type TeamCreateOrConnectWithoutPlayerH1Input = {
  where: TeamWhereUniqueInput;
  create: TeamCreateWithoutPlayerH1Input;
};

export type PlayerHCreateOrConnectWithoutPlayerInput = {
  where: PlayerHWhereUniqueInput;
  create: PlayerHCreateWithoutPlayerInput;
};

export type PlayerUpdateInput = {
  userId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  skillLevel?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  userTag?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  PlayerH?: Maybe<PlayerHUpdateManyWithoutPlayerInput>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  decrement?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type PlayerHUpdateManyWithoutPlayerInput = {
  create?: Maybe<Array<PlayerHCreateWithoutPlayerInput>>;
  connectOrCreate?: Maybe<Array<PlayerHCreateOrConnectWithoutPlayerInput>>;
  upsert?: Maybe<Array<PlayerHUpsertWithWhereUniqueWithoutPlayerInput>>;
  connect?: Maybe<Array<PlayerHWhereUniqueInput>>;
  set?: Maybe<Array<PlayerHWhereUniqueInput>>;
  disconnect?: Maybe<Array<PlayerHWhereUniqueInput>>;
  delete?: Maybe<Array<PlayerHWhereUniqueInput>>;
  update?: Maybe<Array<PlayerHUpdateWithWhereUniqueWithoutPlayerInput>>;
  updateMany?: Maybe<Array<PlayerHUpdateManyWithWhereWithoutPlayerInput>>;
  deleteMany?: Maybe<Array<PlayerHScalarWhereInput>>;
};

export type PlayerHUpsertWithWhereUniqueWithoutPlayerInput = {
  where: PlayerHWhereUniqueInput;
  update: PlayerHUpdateWithoutPlayerInput;
  create: PlayerHCreateWithoutPlayerInput;
};

export type PlayerHUpdateWithoutPlayerInput = {
  skillLevel?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  userTag?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Team1?: Maybe<TeamUpdateManyWithoutPlayerH1Input>;
  Team2?: Maybe<TeamUpdateManyWithoutPlayerH2Input>;
  Team3?: Maybe<TeamUpdateManyWithoutPlayerH3Input>;
  Team4?: Maybe<TeamUpdateManyWithoutPlayerH4Input>;
  Team5?: Maybe<TeamUpdateManyWithoutPlayerH5Input>;
};

export type TeamUpdateManyWithoutPlayerH1Input = {
  create?: Maybe<Array<TeamCreateWithoutPlayerH1Input>>;
  connectOrCreate?: Maybe<Array<TeamCreateOrConnectWithoutPlayerH1Input>>;
  upsert?: Maybe<Array<TeamUpsertWithWhereUniqueWithoutPlayerH1Input>>;
  connect?: Maybe<Array<TeamWhereUniqueInput>>;
  set?: Maybe<Array<TeamWhereUniqueInput>>;
  disconnect?: Maybe<Array<TeamWhereUniqueInput>>;
  delete?: Maybe<Array<TeamWhereUniqueInput>>;
  update?: Maybe<Array<TeamUpdateWithWhereUniqueWithoutPlayerH1Input>>;
  updateMany?: Maybe<Array<TeamUpdateManyWithWhereWithoutPlayerH1Input>>;
  deleteMany?: Maybe<Array<TeamScalarWhereInput>>;
};

export type TeamUpsertWithWhereUniqueWithoutPlayerH1Input = {
  where: TeamWhereUniqueInput;
  update: TeamUpdateWithoutPlayerH1Input;
  create: TeamCreateWithoutPlayerH1Input;
};

export type TeamUpdateWithoutPlayerH1Input = {
  teamName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  PlayerH2?: Maybe<PlayerHUpdateOneWithoutTeam2Input>;
  PlayerH3?: Maybe<PlayerHUpdateOneWithoutTeam3Input>;
  PlayerH4?: Maybe<PlayerHUpdateOneWithoutTeam4Input>;
  PlayerH5?: Maybe<PlayerHUpdateOneWithoutTeam5Input>;
  Match1?: Maybe<MatchUpdateManyWithoutTeam1Input>;
  Match2?: Maybe<MatchUpdateManyWithoutTeam2Input>;
};

export type PlayerHUpdateOneWithoutTeam2Input = {
  create?: Maybe<PlayerHCreateWithoutTeam2Input>;
  connectOrCreate?: Maybe<PlayerHCreateOrConnectWithoutTeam2Input>;
  upsert?: Maybe<PlayerHUpsertWithoutTeam2Input>;
  connect?: Maybe<PlayerHWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PlayerHUpdateWithoutTeam2Input>;
};

export type PlayerHUpsertWithoutTeam2Input = {
  update: PlayerHUpdateWithoutTeam2Input;
  create: PlayerHCreateWithoutTeam2Input;
};

export type PlayerHUpdateWithoutTeam2Input = {
  skillLevel?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  userTag?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Player?: Maybe<PlayerUpdateOneWithoutPlayerHInput>;
  Team1?: Maybe<TeamUpdateManyWithoutPlayerH1Input>;
  Team3?: Maybe<TeamUpdateManyWithoutPlayerH3Input>;
  Team4?: Maybe<TeamUpdateManyWithoutPlayerH4Input>;
  Team5?: Maybe<TeamUpdateManyWithoutPlayerH5Input>;
};

export type PlayerUpdateOneWithoutPlayerHInput = {
  create?: Maybe<PlayerCreateWithoutPlayerHInput>;
  connectOrCreate?: Maybe<PlayerCreateOrConnectWithoutPlayerHInput>;
  upsert?: Maybe<PlayerUpsertWithoutPlayerHInput>;
  connect?: Maybe<PlayerWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PlayerUpdateWithoutPlayerHInput>;
};

export type PlayerUpsertWithoutPlayerHInput = {
  update: PlayerUpdateWithoutPlayerHInput;
  create: PlayerCreateWithoutPlayerHInput;
};

export type PlayerUpdateWithoutPlayerHInput = {
  userId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  skillLevel?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  userTag?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateManyWithoutPlayerH3Input = {
  create?: Maybe<Array<TeamCreateWithoutPlayerH3Input>>;
  connectOrCreate?: Maybe<Array<TeamCreateOrConnectWithoutPlayerH3Input>>;
  upsert?: Maybe<Array<TeamUpsertWithWhereUniqueWithoutPlayerH3Input>>;
  connect?: Maybe<Array<TeamWhereUniqueInput>>;
  set?: Maybe<Array<TeamWhereUniqueInput>>;
  disconnect?: Maybe<Array<TeamWhereUniqueInput>>;
  delete?: Maybe<Array<TeamWhereUniqueInput>>;
  update?: Maybe<Array<TeamUpdateWithWhereUniqueWithoutPlayerH3Input>>;
  updateMany?: Maybe<Array<TeamUpdateManyWithWhereWithoutPlayerH3Input>>;
  deleteMany?: Maybe<Array<TeamScalarWhereInput>>;
};

export type TeamUpsertWithWhereUniqueWithoutPlayerH3Input = {
  where: TeamWhereUniqueInput;
  update: TeamUpdateWithoutPlayerH3Input;
  create: TeamCreateWithoutPlayerH3Input;
};

export type TeamUpdateWithoutPlayerH3Input = {
  teamName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  PlayerH1?: Maybe<PlayerHUpdateOneWithoutTeam1Input>;
  PlayerH2?: Maybe<PlayerHUpdateOneWithoutTeam2Input>;
  PlayerH4?: Maybe<PlayerHUpdateOneWithoutTeam4Input>;
  PlayerH5?: Maybe<PlayerHUpdateOneWithoutTeam5Input>;
  Match1?: Maybe<MatchUpdateManyWithoutTeam1Input>;
  Match2?: Maybe<MatchUpdateManyWithoutTeam2Input>;
};

export type PlayerHUpdateOneWithoutTeam1Input = {
  create?: Maybe<PlayerHCreateWithoutTeam1Input>;
  connectOrCreate?: Maybe<PlayerHCreateOrConnectWithoutTeam1Input>;
  upsert?: Maybe<PlayerHUpsertWithoutTeam1Input>;
  connect?: Maybe<PlayerHWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PlayerHUpdateWithoutTeam1Input>;
};

export type PlayerHUpsertWithoutTeam1Input = {
  update: PlayerHUpdateWithoutTeam1Input;
  create: PlayerHCreateWithoutTeam1Input;
};

export type PlayerHUpdateWithoutTeam1Input = {
  skillLevel?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  userTag?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Player?: Maybe<PlayerUpdateOneWithoutPlayerHInput>;
  Team2?: Maybe<TeamUpdateManyWithoutPlayerH2Input>;
  Team3?: Maybe<TeamUpdateManyWithoutPlayerH3Input>;
  Team4?: Maybe<TeamUpdateManyWithoutPlayerH4Input>;
  Team5?: Maybe<TeamUpdateManyWithoutPlayerH5Input>;
};

export type TeamUpdateManyWithoutPlayerH2Input = {
  create?: Maybe<Array<TeamCreateWithoutPlayerH2Input>>;
  connectOrCreate?: Maybe<Array<TeamCreateOrConnectWithoutPlayerH2Input>>;
  upsert?: Maybe<Array<TeamUpsertWithWhereUniqueWithoutPlayerH2Input>>;
  connect?: Maybe<Array<TeamWhereUniqueInput>>;
  set?: Maybe<Array<TeamWhereUniqueInput>>;
  disconnect?: Maybe<Array<TeamWhereUniqueInput>>;
  delete?: Maybe<Array<TeamWhereUniqueInput>>;
  update?: Maybe<Array<TeamUpdateWithWhereUniqueWithoutPlayerH2Input>>;
  updateMany?: Maybe<Array<TeamUpdateManyWithWhereWithoutPlayerH2Input>>;
  deleteMany?: Maybe<Array<TeamScalarWhereInput>>;
};

export type TeamUpsertWithWhereUniqueWithoutPlayerH2Input = {
  where: TeamWhereUniqueInput;
  update: TeamUpdateWithoutPlayerH2Input;
  create: TeamCreateWithoutPlayerH2Input;
};

export type TeamUpdateWithoutPlayerH2Input = {
  teamName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  PlayerH1?: Maybe<PlayerHUpdateOneWithoutTeam1Input>;
  PlayerH3?: Maybe<PlayerHUpdateOneWithoutTeam3Input>;
  PlayerH4?: Maybe<PlayerHUpdateOneWithoutTeam4Input>;
  PlayerH5?: Maybe<PlayerHUpdateOneWithoutTeam5Input>;
  Match1?: Maybe<MatchUpdateManyWithoutTeam1Input>;
  Match2?: Maybe<MatchUpdateManyWithoutTeam2Input>;
};

export type PlayerHUpdateOneWithoutTeam3Input = {
  create?: Maybe<PlayerHCreateWithoutTeam3Input>;
  connectOrCreate?: Maybe<PlayerHCreateOrConnectWithoutTeam3Input>;
  upsert?: Maybe<PlayerHUpsertWithoutTeam3Input>;
  connect?: Maybe<PlayerHWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PlayerHUpdateWithoutTeam3Input>;
};

export type PlayerHUpsertWithoutTeam3Input = {
  update: PlayerHUpdateWithoutTeam3Input;
  create: PlayerHCreateWithoutTeam3Input;
};

export type PlayerHUpdateWithoutTeam3Input = {
  skillLevel?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  userTag?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Player?: Maybe<PlayerUpdateOneWithoutPlayerHInput>;
  Team1?: Maybe<TeamUpdateManyWithoutPlayerH1Input>;
  Team2?: Maybe<TeamUpdateManyWithoutPlayerH2Input>;
  Team4?: Maybe<TeamUpdateManyWithoutPlayerH4Input>;
  Team5?: Maybe<TeamUpdateManyWithoutPlayerH5Input>;
};

export type TeamUpdateManyWithoutPlayerH4Input = {
  create?: Maybe<Array<TeamCreateWithoutPlayerH4Input>>;
  connectOrCreate?: Maybe<Array<TeamCreateOrConnectWithoutPlayerH4Input>>;
  upsert?: Maybe<Array<TeamUpsertWithWhereUniqueWithoutPlayerH4Input>>;
  connect?: Maybe<Array<TeamWhereUniqueInput>>;
  set?: Maybe<Array<TeamWhereUniqueInput>>;
  disconnect?: Maybe<Array<TeamWhereUniqueInput>>;
  delete?: Maybe<Array<TeamWhereUniqueInput>>;
  update?: Maybe<Array<TeamUpdateWithWhereUniqueWithoutPlayerH4Input>>;
  updateMany?: Maybe<Array<TeamUpdateManyWithWhereWithoutPlayerH4Input>>;
  deleteMany?: Maybe<Array<TeamScalarWhereInput>>;
};

export type TeamUpsertWithWhereUniqueWithoutPlayerH4Input = {
  where: TeamWhereUniqueInput;
  update: TeamUpdateWithoutPlayerH4Input;
  create: TeamCreateWithoutPlayerH4Input;
};

export type TeamUpdateWithoutPlayerH4Input = {
  teamName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  PlayerH1?: Maybe<PlayerHUpdateOneWithoutTeam1Input>;
  PlayerH2?: Maybe<PlayerHUpdateOneWithoutTeam2Input>;
  PlayerH3?: Maybe<PlayerHUpdateOneWithoutTeam3Input>;
  PlayerH5?: Maybe<PlayerHUpdateOneWithoutTeam5Input>;
  Match1?: Maybe<MatchUpdateManyWithoutTeam1Input>;
  Match2?: Maybe<MatchUpdateManyWithoutTeam2Input>;
};

export type PlayerHUpdateOneWithoutTeam5Input = {
  create?: Maybe<PlayerHCreateWithoutTeam5Input>;
  connectOrCreate?: Maybe<PlayerHCreateOrConnectWithoutTeam5Input>;
  upsert?: Maybe<PlayerHUpsertWithoutTeam5Input>;
  connect?: Maybe<PlayerHWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PlayerHUpdateWithoutTeam5Input>;
};

export type PlayerHUpsertWithoutTeam5Input = {
  update: PlayerHUpdateWithoutTeam5Input;
  create: PlayerHCreateWithoutTeam5Input;
};

export type PlayerHUpdateWithoutTeam5Input = {
  skillLevel?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  userTag?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Player?: Maybe<PlayerUpdateOneWithoutPlayerHInput>;
  Team1?: Maybe<TeamUpdateManyWithoutPlayerH1Input>;
  Team2?: Maybe<TeamUpdateManyWithoutPlayerH2Input>;
  Team3?: Maybe<TeamUpdateManyWithoutPlayerH3Input>;
  Team4?: Maybe<TeamUpdateManyWithoutPlayerH4Input>;
};

export type MatchUpdateManyWithoutTeam1Input = {
  create?: Maybe<Array<MatchCreateWithoutTeam1Input>>;
  connectOrCreate?: Maybe<Array<MatchCreateOrConnectWithoutTeam1Input>>;
  upsert?: Maybe<Array<MatchUpsertWithWhereUniqueWithoutTeam1Input>>;
  connect?: Maybe<Array<MatchWhereUniqueInput>>;
  set?: Maybe<Array<MatchWhereUniqueInput>>;
  disconnect?: Maybe<Array<MatchWhereUniqueInput>>;
  delete?: Maybe<Array<MatchWhereUniqueInput>>;
  update?: Maybe<Array<MatchUpdateWithWhereUniqueWithoutTeam1Input>>;
  updateMany?: Maybe<Array<MatchUpdateManyWithWhereWithoutTeam1Input>>;
  deleteMany?: Maybe<Array<MatchScalarWhereInput>>;
};

export type MatchUpsertWithWhereUniqueWithoutTeam1Input = {
  where: MatchWhereUniqueInput;
  update: MatchUpdateWithoutTeam1Input;
  create: MatchCreateWithoutTeam1Input;
};

export type MatchUpdateWithoutTeam1Input = {
  matchResult?: Maybe<NullableIntFieldUpdateOperationsInput>;
  screenshotPath?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Team2?: Maybe<TeamUpdateOneWithoutMatch2Input>;
};

export type NullableIntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  decrement?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
};

export type TeamUpdateOneWithoutMatch2Input = {
  create?: Maybe<TeamCreateWithoutMatch2Input>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutMatch2Input>;
  upsert?: Maybe<TeamUpsertWithoutMatch2Input>;
  connect?: Maybe<TeamWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TeamUpdateWithoutMatch2Input>;
};

export type TeamUpsertWithoutMatch2Input = {
  update: TeamUpdateWithoutMatch2Input;
  create: TeamCreateWithoutMatch2Input;
};

export type TeamUpdateWithoutMatch2Input = {
  teamName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  PlayerH1?: Maybe<PlayerHUpdateOneWithoutTeam1Input>;
  PlayerH2?: Maybe<PlayerHUpdateOneWithoutTeam2Input>;
  PlayerH3?: Maybe<PlayerHUpdateOneWithoutTeam3Input>;
  PlayerH4?: Maybe<PlayerHUpdateOneWithoutTeam4Input>;
  PlayerH5?: Maybe<PlayerHUpdateOneWithoutTeam5Input>;
  Match1?: Maybe<MatchUpdateManyWithoutTeam1Input>;
};

export type PlayerHUpdateOneWithoutTeam4Input = {
  create?: Maybe<PlayerHCreateWithoutTeam4Input>;
  connectOrCreate?: Maybe<PlayerHCreateOrConnectWithoutTeam4Input>;
  upsert?: Maybe<PlayerHUpsertWithoutTeam4Input>;
  connect?: Maybe<PlayerHWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PlayerHUpdateWithoutTeam4Input>;
};

export type PlayerHUpsertWithoutTeam4Input = {
  update: PlayerHUpdateWithoutTeam4Input;
  create: PlayerHCreateWithoutTeam4Input;
};

export type PlayerHUpdateWithoutTeam4Input = {
  skillLevel?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  userTag?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Player?: Maybe<PlayerUpdateOneWithoutPlayerHInput>;
  Team1?: Maybe<TeamUpdateManyWithoutPlayerH1Input>;
  Team2?: Maybe<TeamUpdateManyWithoutPlayerH2Input>;
  Team3?: Maybe<TeamUpdateManyWithoutPlayerH3Input>;
  Team5?: Maybe<TeamUpdateManyWithoutPlayerH5Input>;
};

export type TeamUpdateManyWithoutPlayerH5Input = {
  create?: Maybe<Array<TeamCreateWithoutPlayerH5Input>>;
  connectOrCreate?: Maybe<Array<TeamCreateOrConnectWithoutPlayerH5Input>>;
  upsert?: Maybe<Array<TeamUpsertWithWhereUniqueWithoutPlayerH5Input>>;
  connect?: Maybe<Array<TeamWhereUniqueInput>>;
  set?: Maybe<Array<TeamWhereUniqueInput>>;
  disconnect?: Maybe<Array<TeamWhereUniqueInput>>;
  delete?: Maybe<Array<TeamWhereUniqueInput>>;
  update?: Maybe<Array<TeamUpdateWithWhereUniqueWithoutPlayerH5Input>>;
  updateMany?: Maybe<Array<TeamUpdateManyWithWhereWithoutPlayerH5Input>>;
  deleteMany?: Maybe<Array<TeamScalarWhereInput>>;
};

export type TeamUpsertWithWhereUniqueWithoutPlayerH5Input = {
  where: TeamWhereUniqueInput;
  update: TeamUpdateWithoutPlayerH5Input;
  create: TeamCreateWithoutPlayerH5Input;
};

export type TeamUpdateWithoutPlayerH5Input = {
  teamName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  PlayerH1?: Maybe<PlayerHUpdateOneWithoutTeam1Input>;
  PlayerH2?: Maybe<PlayerHUpdateOneWithoutTeam2Input>;
  PlayerH3?: Maybe<PlayerHUpdateOneWithoutTeam3Input>;
  PlayerH4?: Maybe<PlayerHUpdateOneWithoutTeam4Input>;
  Match1?: Maybe<MatchUpdateManyWithoutTeam1Input>;
  Match2?: Maybe<MatchUpdateManyWithoutTeam2Input>;
};

export type MatchUpdateManyWithoutTeam2Input = {
  create?: Maybe<Array<MatchCreateWithoutTeam2Input>>;
  connectOrCreate?: Maybe<Array<MatchCreateOrConnectWithoutTeam2Input>>;
  upsert?: Maybe<Array<MatchUpsertWithWhereUniqueWithoutTeam2Input>>;
  connect?: Maybe<Array<MatchWhereUniqueInput>>;
  set?: Maybe<Array<MatchWhereUniqueInput>>;
  disconnect?: Maybe<Array<MatchWhereUniqueInput>>;
  delete?: Maybe<Array<MatchWhereUniqueInput>>;
  update?: Maybe<Array<MatchUpdateWithWhereUniqueWithoutTeam2Input>>;
  updateMany?: Maybe<Array<MatchUpdateManyWithWhereWithoutTeam2Input>>;
  deleteMany?: Maybe<Array<MatchScalarWhereInput>>;
};

export type MatchUpsertWithWhereUniqueWithoutTeam2Input = {
  where: MatchWhereUniqueInput;
  update: MatchUpdateWithoutTeam2Input;
  create: MatchCreateWithoutTeam2Input;
};

export type MatchUpdateWithoutTeam2Input = {
  matchResult?: Maybe<NullableIntFieldUpdateOperationsInput>;
  screenshotPath?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Team1?: Maybe<TeamUpdateOneWithoutMatch1Input>;
};

export type TeamUpdateOneWithoutMatch1Input = {
  create?: Maybe<TeamCreateWithoutMatch1Input>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutMatch1Input>;
  upsert?: Maybe<TeamUpsertWithoutMatch1Input>;
  connect?: Maybe<TeamWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TeamUpdateWithoutMatch1Input>;
};

export type TeamUpsertWithoutMatch1Input = {
  update: TeamUpdateWithoutMatch1Input;
  create: TeamCreateWithoutMatch1Input;
};

export type TeamUpdateWithoutMatch1Input = {
  teamName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  PlayerH1?: Maybe<PlayerHUpdateOneWithoutTeam1Input>;
  PlayerH2?: Maybe<PlayerHUpdateOneWithoutTeam2Input>;
  PlayerH3?: Maybe<PlayerHUpdateOneWithoutTeam3Input>;
  PlayerH4?: Maybe<PlayerHUpdateOneWithoutTeam4Input>;
  PlayerH5?: Maybe<PlayerHUpdateOneWithoutTeam5Input>;
  Match2?: Maybe<MatchUpdateManyWithoutTeam2Input>;
};

export type MatchUpdateWithWhereUniqueWithoutTeam2Input = {
  where: MatchWhereUniqueInput;
  data: MatchUpdateWithoutTeam2Input;
};

export type MatchUpdateManyWithWhereWithoutTeam2Input = {
  where: MatchScalarWhereInput;
  data: MatchUpdateManyMutationInput;
};

export type MatchScalarWhereInput = {
  AND?: Maybe<Array<MatchScalarWhereInput>>;
  OR?: Maybe<Array<MatchScalarWhereInput>>;
  NOT?: Maybe<Array<MatchScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  matchResult?: Maybe<IntNullableFilter>;
  screenshotPath?: Maybe<StringNullableFilter>;
  teamId1?: Maybe<IntNullableFilter>;
  teamId2?: Maybe<IntNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type MatchUpdateManyMutationInput = {
  matchResult?: Maybe<NullableIntFieldUpdateOperationsInput>;
  screenshotPath?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateWithWhereUniqueWithoutPlayerH5Input = {
  where: TeamWhereUniqueInput;
  data: TeamUpdateWithoutPlayerH5Input;
};

export type TeamUpdateManyWithWhereWithoutPlayerH5Input = {
  where: TeamScalarWhereInput;
  data: TeamUpdateManyMutationInput;
};

export type TeamScalarWhereInput = {
  AND?: Maybe<Array<TeamScalarWhereInput>>;
  OR?: Maybe<Array<TeamScalarWhereInput>>;
  NOT?: Maybe<Array<TeamScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  teamName?: Maybe<StringNullableFilter>;
  playerId1?: Maybe<IntNullableFilter>;
  playerId2?: Maybe<IntNullableFilter>;
  playerId3?: Maybe<IntNullableFilter>;
  playerId4?: Maybe<IntNullableFilter>;
  playerId5?: Maybe<IntNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type TeamUpdateManyMutationInput = {
  teamName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type MatchUpdateWithWhereUniqueWithoutTeam1Input = {
  where: MatchWhereUniqueInput;
  data: MatchUpdateWithoutTeam1Input;
};

export type MatchUpdateManyWithWhereWithoutTeam1Input = {
  where: MatchScalarWhereInput;
  data: MatchUpdateManyMutationInput;
};

export type TeamUpdateWithWhereUniqueWithoutPlayerH4Input = {
  where: TeamWhereUniqueInput;
  data: TeamUpdateWithoutPlayerH4Input;
};

export type TeamUpdateManyWithWhereWithoutPlayerH4Input = {
  where: TeamScalarWhereInput;
  data: TeamUpdateManyMutationInput;
};

export type TeamUpdateWithWhereUniqueWithoutPlayerH2Input = {
  where: TeamWhereUniqueInput;
  data: TeamUpdateWithoutPlayerH2Input;
};

export type TeamUpdateManyWithWhereWithoutPlayerH2Input = {
  where: TeamScalarWhereInput;
  data: TeamUpdateManyMutationInput;
};

export type TeamUpdateWithWhereUniqueWithoutPlayerH3Input = {
  where: TeamWhereUniqueInput;
  data: TeamUpdateWithoutPlayerH3Input;
};

export type TeamUpdateManyWithWhereWithoutPlayerH3Input = {
  where: TeamScalarWhereInput;
  data: TeamUpdateManyMutationInput;
};

export type TeamUpdateWithWhereUniqueWithoutPlayerH1Input = {
  where: TeamWhereUniqueInput;
  data: TeamUpdateWithoutPlayerH1Input;
};

export type TeamUpdateManyWithWhereWithoutPlayerH1Input = {
  where: TeamScalarWhereInput;
  data: TeamUpdateManyMutationInput;
};

export type PlayerHUpdateWithWhereUniqueWithoutPlayerInput = {
  where: PlayerHWhereUniqueInput;
  data: PlayerHUpdateWithoutPlayerInput;
};

export type PlayerHUpdateManyWithWhereWithoutPlayerInput = {
  where: PlayerHScalarWhereInput;
  data: PlayerHUpdateManyMutationInput;
};

export type PlayerHScalarWhereInput = {
  AND?: Maybe<Array<PlayerHScalarWhereInput>>;
  OR?: Maybe<Array<PlayerHScalarWhereInput>>;
  NOT?: Maybe<Array<PlayerHScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  playerId?: Maybe<IntNullableFilter>;
  skillLevel?: Maybe<FloatNullableFilter>;
  userTag?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type PlayerHUpdateManyMutationInput = {
  skillLevel?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  userTag?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type GetAlinaStatsQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetAlinaStatsQuery = (
  { __typename?: 'Query' }
  & { lostAgainstAlina: (
    { __typename?: 'AggregateMatch' }
    & { count?: Maybe<(
      { __typename?: 'MatchCountAggregate' }
      & { all: MatchCountAggregate['_all'] }
    )> }
  ), playedWithAlina: (
    { __typename?: 'AggregateMatch' }
    & { count?: Maybe<(
      { __typename?: 'MatchCountAggregate' }
      & { all: MatchCountAggregate['_all'] }
    )> }
  ), lostWithAlina: (
    { __typename?: 'AggregateMatch' }
    & { count?: Maybe<(
      { __typename?: 'MatchCountAggregate' }
      & { all: MatchCountAggregate['_all'] }
    )> }
  ) }
);

export type GetAllPlayersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPlayersQuery = (
  { __typename?: 'Query' }
  & { players: Array<(
    { __typename?: 'Player' }
    & Pick<Player, 'id' | 'userTag' | 'skillLevel' | 'createdAt'>
    & { discordId: Player['userId'] }
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
        & Pick<PlayerH, 'userTag' | 'skillLevel' | 'playerId'>
      )>, PlayerH2?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'userTag' | 'skillLevel' | 'playerId'>
      )>, PlayerH3?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'userTag' | 'skillLevel' | 'playerId'>
      )>, PlayerH4?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'userTag' | 'skillLevel' | 'playerId'>
      )>, PlayerH5?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'userTag' | 'skillLevel' | 'playerId'>
      )> }
    )>, Team2?: Maybe<(
      { __typename?: 'Team' }
      & Pick<Team, 'teamName'>
      & { PlayerH1?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'userTag' | 'skillLevel' | 'playerId'>
      )>, PlayerH2?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'userTag' | 'skillLevel' | 'playerId'>
      )>, PlayerH3?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'userTag' | 'skillLevel' | 'playerId'>
      )>, PlayerH4?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'userTag' | 'skillLevel' | 'playerId'>
      )>, PlayerH5?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'userTag' | 'skillLevel' | 'playerId'>
      )> }
    )> }
  )>, aggregateMatch: (
    { __typename?: 'AggregateMatch' }
    & { count?: Maybe<(
      { __typename?: 'MatchCountAggregate' }
      & Pick<MatchCountAggregate, '_all'>
    )> }
  ) }
);

export type GetPlayerQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPlayerQuery = (
  { __typename?: 'Query' }
  & { player?: Maybe<(
    { __typename?: 'Player' }
    & Pick<Player, 'id' | 'userTag'>
  )> }
);

export type GetRecentAndWonMatchesFromPlayerQueryVariables = Exact<{
  id: Scalars['Int'];
  amount: Scalars['Int'];
}>;


export type GetRecentAndWonMatchesFromPlayerQuery = (
  { __typename?: 'Query' }
  & { matches: Array<(
    { __typename?: 'Match' }
    & Pick<Match, 'id' | 'createdAt'>
    & { Team1?: Maybe<(
      { __typename?: 'Team' }
      & Pick<Team, 'teamName'>
      & { PlayerH1?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'skillLevel' | 'userTag' | 'playerId'>
      )>, PlayerH2?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'skillLevel' | 'userTag' | 'playerId'>
      )>, PlayerH3?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'skillLevel' | 'userTag' | 'playerId'>
      )>, PlayerH4?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'skillLevel' | 'userTag' | 'playerId'>
      )>, PlayerH5?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'skillLevel' | 'userTag' | 'playerId'>
      )> }
    )>, Team2?: Maybe<(
      { __typename?: 'Team' }
      & Pick<Team, 'teamName'>
      & { PlayerH1?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'skillLevel' | 'userTag' | 'playerId'>
      )>, PlayerH2?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'skillLevel' | 'userTag' | 'playerId'>
      )>, PlayerH3?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'skillLevel' | 'userTag' | 'playerId'>
      )>, PlayerH4?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'skillLevel' | 'userTag' | 'playerId'>
      )>, PlayerH5?: Maybe<(
        { __typename?: 'PlayerH' }
        & Pick<PlayerH, 'skillLevel' | 'userTag' | 'playerId'>
      )> }
    )> }
  )>, wonMatches: Array<(
    { __typename?: 'Match' }
    & Pick<Match, 'id'>
  )>, player?: Maybe<(
    { __typename?: 'Player' }
    & Pick<Player, 'id' | 'userTag'>
  )> }
);

export type GetSkillLevelTimelineQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetSkillLevelTimelineQuery = (
  { __typename?: 'Query' }
  & { players: Array<(
    { __typename?: 'PlayerH' }
    & Pick<PlayerH, 'id' | 'createdAt' | 'skillLevel'>
  )>, currentPlayer?: Maybe<(
    { __typename?: 'Player' }
    & Pick<Player, 'id' | 'skillLevel'>
  )> }
);

export type GetWrQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetWrQuery = (
  { __typename?: 'Query' }
  & { gamesWon: (
    { __typename?: 'AggregateMatch' }
    & { count?: Maybe<(
      { __typename?: 'MatchCountAggregate' }
      & { all: MatchCountAggregate['_all'] }
    )> }
  ), gamesLost: (
    { __typename?: 'AggregateMatch' }
    & { count?: Maybe<(
      { __typename?: 'MatchCountAggregate' }
      & { all: MatchCountAggregate['_all'] }
    )> }
  ), player?: Maybe<(
    { __typename?: 'Player' }
    & Pick<Player, 'id' | 'skillLevel' | 'createdAt'>
  )> }
);


export const GetAlinaStatsDocument = gql`
    query GetAlinaStats($id: Int!) {
  lostAgainstAlina: aggregateMatch(
    where: {OR: [{AND: [{matchResult: {equals: 2}}, {Team1: {is: {OR: [{PlayerH1: {is: {playerId: {equals: $id}}}}, {PlayerH2: {is: {playerId: {equals: $id}}}}, {PlayerH3: {is: {playerId: {equals: $id}}}}, {PlayerH4: {is: {playerId: {equals: $id}}}}, {PlayerH5: {is: {playerId: {equals: $id}}}}]}}}, {Team2: {is: {OR: [{PlayerH1: {is: {playerId: {equals: 11}}}}, {PlayerH2: {is: {playerId: {equals: 11}}}}, {PlayerH3: {is: {playerId: {equals: 11}}}}, {PlayerH4: {is: {playerId: {equals: 11}}}}, {PlayerH5: {is: {playerId: {equals: 11}}}}]}}}]}, {AND: [{matchResult: {equals: 1}}, {Team2: {is: {OR: [{PlayerH1: {is: {playerId: {equals: $id}}}}, {PlayerH2: {is: {playerId: {equals: $id}}}}, {PlayerH3: {is: {playerId: {equals: $id}}}}, {PlayerH4: {is: {playerId: {equals: $id}}}}, {PlayerH5: {is: {playerId: {equals: $id}}}}]}}}, {Team1: {is: {OR: [{PlayerH1: {is: {playerId: {equals: 11}}}}, {PlayerH2: {is: {playerId: {equals: 11}}}}, {PlayerH3: {is: {playerId: {equals: 11}}}}, {PlayerH4: {is: {playerId: {equals: 11}}}}, {PlayerH5: {is: {playerId: {equals: 11}}}}]}}}]}]}
  ) {
    count {
      all: _all
    }
  }
  playedWithAlina: aggregateMatch(
    where: {OR: [{AND: [{Team1: {is: {OR: [{PlayerH1: {is: {playerId: {equals: $id}}}}, {PlayerH2: {is: {playerId: {equals: $id}}}}, {PlayerH3: {is: {playerId: {equals: $id}}}}, {PlayerH4: {is: {playerId: {equals: $id}}}}, {PlayerH5: {is: {playerId: {equals: $id}}}}]}}}, {Team1: {is: {OR: [{PlayerH1: {is: {playerId: {equals: 11}}}}, {PlayerH2: {is: {playerId: {equals: 11}}}}, {PlayerH3: {is: {playerId: {equals: 11}}}}, {PlayerH4: {is: {playerId: {equals: 11}}}}, {PlayerH5: {is: {playerId: {equals: 11}}}}]}}}]}, {AND: [{Team2: {is: {OR: [{PlayerH1: {is: {playerId: {equals: $id}}}}, {PlayerH2: {is: {playerId: {equals: $id}}}}, {PlayerH3: {is: {playerId: {equals: $id}}}}, {PlayerH4: {is: {playerId: {equals: $id}}}}, {PlayerH5: {is: {playerId: {equals: $id}}}}]}}}, {Team2: {is: {OR: [{PlayerH1: {is: {playerId: {equals: 11}}}}, {PlayerH2: {is: {playerId: {equals: 11}}}}, {PlayerH3: {is: {playerId: {equals: 11}}}}, {PlayerH4: {is: {playerId: {equals: 11}}}}, {PlayerH5: {is: {playerId: {equals: 11}}}}]}}}]}]}
  ) {
    count {
      all: _all
    }
  }
  lostWithAlina: aggregateMatch(
    where: {OR: [{AND: [{matchResult: {equals: 2}}, {Team1: {is: {OR: [{PlayerH1: {is: {playerId: {equals: $id}}}}, {PlayerH2: {is: {playerId: {equals: $id}}}}, {PlayerH3: {is: {playerId: {equals: $id}}}}, {PlayerH4: {is: {playerId: {equals: $id}}}}, {PlayerH5: {is: {playerId: {equals: $id}}}}]}}}, {Team1: {is: {OR: [{PlayerH1: {is: {playerId: {equals: 11}}}}, {PlayerH2: {is: {playerId: {equals: 11}}}}, {PlayerH3: {is: {playerId: {equals: 11}}}}, {PlayerH4: {is: {playerId: {equals: 11}}}}, {PlayerH5: {is: {playerId: {equals: 11}}}}]}}}]}, {AND: [{matchResult: {equals: 1}}, {Team2: {is: {OR: [{PlayerH1: {is: {playerId: {equals: $id}}}}, {PlayerH2: {is: {playerId: {equals: $id}}}}, {PlayerH3: {is: {playerId: {equals: $id}}}}, {PlayerH4: {is: {playerId: {equals: $id}}}}, {PlayerH5: {is: {playerId: {equals: $id}}}}]}}}, {Team2: {is: {OR: [{PlayerH1: {is: {playerId: {equals: 11}}}}, {PlayerH2: {is: {playerId: {equals: 11}}}}, {PlayerH3: {is: {playerId: {equals: 11}}}}, {PlayerH4: {is: {playerId: {equals: 11}}}}, {PlayerH5: {is: {playerId: {equals: 11}}}}]}}}]}]}
  ) {
    count {
      all: _all
    }
  }
}
    `;

/**
 * __useGetAlinaStatsQuery__
 *
 * To run a query within a React component, call `useGetAlinaStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAlinaStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAlinaStatsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAlinaStatsQuery(baseOptions: Apollo.QueryHookOptions<GetAlinaStatsQuery, GetAlinaStatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAlinaStatsQuery, GetAlinaStatsQueryVariables>(GetAlinaStatsDocument, options);
      }
export function useGetAlinaStatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAlinaStatsQuery, GetAlinaStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAlinaStatsQuery, GetAlinaStatsQueryVariables>(GetAlinaStatsDocument, options);
        }
export type GetAlinaStatsQueryHookResult = ReturnType<typeof useGetAlinaStatsQuery>;
export type GetAlinaStatsLazyQueryHookResult = ReturnType<typeof useGetAlinaStatsLazyQuery>;
export type GetAlinaStatsQueryResult = Apollo.QueryResult<GetAlinaStatsQuery, GetAlinaStatsQueryVariables>;
export const GetAllPlayersDocument = gql`
    query GetAllPlayers {
  players(orderBy: {skillLevel: desc}) {
    id
    discordId: userId
    userTag
    skillLevel
    createdAt
  }
}
    `;

/**
 * __useGetAllPlayersQuery__
 *
 * To run a query within a React component, call `useGetAllPlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPlayersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPlayersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPlayersQuery, GetAllPlayersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPlayersQuery, GetAllPlayersQueryVariables>(GetAllPlayersDocument, options);
      }
export function useGetAllPlayersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPlayersQuery, GetAllPlayersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPlayersQuery, GetAllPlayersQueryVariables>(GetAllPlayersDocument, options);
        }
export type GetAllPlayersQueryHookResult = ReturnType<typeof useGetAllPlayersQuery>;
export type GetAllPlayersLazyQueryHookResult = ReturnType<typeof useGetAllPlayersLazyQuery>;
export type GetAllPlayersQueryResult = Apollo.QueryResult<GetAllPlayersQuery, GetAllPlayersQueryVariables>;
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
        playerId
      }
      PlayerH2 {
        userTag
        skillLevel
        playerId
      }
      PlayerH3 {
        userTag
        skillLevel
        playerId
      }
      PlayerH4 {
        userTag
        skillLevel
        playerId
      }
      PlayerH5 {
        userTag
        skillLevel
        playerId
      }
    }
    Team2 {
      teamName
      PlayerH1 {
        userTag
        skillLevel
        playerId
      }
      PlayerH2 {
        userTag
        skillLevel
        playerId
      }
      PlayerH3 {
        userTag
        skillLevel
        playerId
      }
      PlayerH4 {
        userTag
        skillLevel
        playerId
      }
      PlayerH5 {
        userTag
        skillLevel
        playerId
      }
    }
  }
  aggregateMatch {
    count {
      _all
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
export const GetPlayerDocument = gql`
    query GetPlayer($id: Int!) {
  player(where: {id: $id}) {
    id
    userTag
  }
}
    `;

/**
 * __useGetPlayerQuery__
 *
 * To run a query within a React component, call `useGetPlayerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlayerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlayerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPlayerQuery(baseOptions: Apollo.QueryHookOptions<GetPlayerQuery, GetPlayerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlayerQuery, GetPlayerQueryVariables>(GetPlayerDocument, options);
      }
export function useGetPlayerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlayerQuery, GetPlayerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlayerQuery, GetPlayerQueryVariables>(GetPlayerDocument, options);
        }
export type GetPlayerQueryHookResult = ReturnType<typeof useGetPlayerQuery>;
export type GetPlayerLazyQueryHookResult = ReturnType<typeof useGetPlayerLazyQuery>;
export type GetPlayerQueryResult = Apollo.QueryResult<GetPlayerQuery, GetPlayerQueryVariables>;
export const GetRecentAndWonMatchesFromPlayerDocument = gql`
    query GetRecentAndWonMatchesFromPlayer($id: Int!, $amount: Int!) {
  matches(
    orderBy: {createdAt: desc}
    take: $amount
    where: {OR: [{Team1: {is: {OR: [{PlayerH1: {is: {playerId: {equals: $id}}}}, {PlayerH2: {is: {playerId: {equals: $id}}}}, {PlayerH3: {is: {playerId: {equals: $id}}}}, {PlayerH4: {is: {playerId: {equals: $id}}}}, {PlayerH5: {is: {playerId: {equals: $id}}}}]}}}, {Team2: {is: {OR: [{PlayerH1: {is: {playerId: {equals: $id}}}}, {PlayerH2: {is: {playerId: {equals: $id}}}}, {PlayerH3: {is: {playerId: {equals: $id}}}}, {PlayerH4: {is: {playerId: {equals: $id}}}}, {PlayerH5: {is: {playerId: {equals: $id}}}}]}}}]}
  ) {
    id
    createdAt
    Team1 {
      teamName
      PlayerH1 {
        skillLevel
        userTag
        playerId
      }
      PlayerH2 {
        skillLevel
        userTag
        playerId
      }
      PlayerH3 {
        skillLevel
        userTag
        playerId
      }
      PlayerH4 {
        skillLevel
        userTag
        playerId
      }
      PlayerH5 {
        skillLevel
        userTag
        playerId
      }
    }
    Team2 {
      teamName
      PlayerH1 {
        skillLevel
        userTag
        playerId
      }
      PlayerH2 {
        skillLevel
        userTag
        playerId
      }
      PlayerH3 {
        skillLevel
        userTag
        playerId
      }
      PlayerH4 {
        skillLevel
        userTag
        playerId
      }
      PlayerH5 {
        skillLevel
        userTag
        playerId
      }
    }
  }
  wonMatches: matches(
    orderBy: {createdAt: desc}
    take: $amount
    where: {OR: [{Team1: {is: {AND: [{Match1: {every: {matchResult: {equals: 1}}}}, {OR: [{PlayerH1: {is: {playerId: {equals: $id}}}}, {PlayerH2: {is: {playerId: {equals: $id}}}}, {PlayerH3: {is: {playerId: {equals: $id}}}}, {PlayerH4: {is: {playerId: {equals: $id}}}}, {PlayerH5: {is: {playerId: {equals: $id}}}}]}]}}}, {Team2: {is: {AND: [{Match2: {every: {matchResult: {equals: 2}}}}, {OR: [{PlayerH1: {is: {playerId: {equals: $id}}}}, {PlayerH2: {is: {playerId: {equals: $id}}}}, {PlayerH3: {is: {playerId: {equals: $id}}}}, {PlayerH4: {is: {playerId: {equals: $id}}}}, {PlayerH5: {is: {playerId: {equals: $id}}}}]}]}}}]}
  ) {
    id
  }
  player(where: {id: $id}) {
    id
    userTag
  }
}
    `;

/**
 * __useGetRecentAndWonMatchesFromPlayerQuery__
 *
 * To run a query within a React component, call `useGetRecentAndWonMatchesFromPlayerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecentAndWonMatchesFromPlayerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecentAndWonMatchesFromPlayerQuery({
 *   variables: {
 *      id: // value for 'id'
 *      amount: // value for 'amount'
 *   },
 * });
 */
export function useGetRecentAndWonMatchesFromPlayerQuery(baseOptions: Apollo.QueryHookOptions<GetRecentAndWonMatchesFromPlayerQuery, GetRecentAndWonMatchesFromPlayerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecentAndWonMatchesFromPlayerQuery, GetRecentAndWonMatchesFromPlayerQueryVariables>(GetRecentAndWonMatchesFromPlayerDocument, options);
      }
export function useGetRecentAndWonMatchesFromPlayerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecentAndWonMatchesFromPlayerQuery, GetRecentAndWonMatchesFromPlayerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecentAndWonMatchesFromPlayerQuery, GetRecentAndWonMatchesFromPlayerQueryVariables>(GetRecentAndWonMatchesFromPlayerDocument, options);
        }
export type GetRecentAndWonMatchesFromPlayerQueryHookResult = ReturnType<typeof useGetRecentAndWonMatchesFromPlayerQuery>;
export type GetRecentAndWonMatchesFromPlayerLazyQueryHookResult = ReturnType<typeof useGetRecentAndWonMatchesFromPlayerLazyQuery>;
export type GetRecentAndWonMatchesFromPlayerQueryResult = Apollo.QueryResult<GetRecentAndWonMatchesFromPlayerQuery, GetRecentAndWonMatchesFromPlayerQueryVariables>;
export const GetSkillLevelTimelineDocument = gql`
    query GetSkillLevelTimeline($id: Int!) {
  players: playerHS(
    take: 9
    orderBy: {createdAt: desc}
    where: {playerId: {equals: $id}}
  ) {
    id
    createdAt
    skillLevel
  }
  currentPlayer: player(where: {id: $id}) {
    id
    skillLevel
  }
}
    `;

/**
 * __useGetSkillLevelTimelineQuery__
 *
 * To run a query within a React component, call `useGetSkillLevelTimelineQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSkillLevelTimelineQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSkillLevelTimelineQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSkillLevelTimelineQuery(baseOptions: Apollo.QueryHookOptions<GetSkillLevelTimelineQuery, GetSkillLevelTimelineQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSkillLevelTimelineQuery, GetSkillLevelTimelineQueryVariables>(GetSkillLevelTimelineDocument, options);
      }
export function useGetSkillLevelTimelineLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSkillLevelTimelineQuery, GetSkillLevelTimelineQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSkillLevelTimelineQuery, GetSkillLevelTimelineQueryVariables>(GetSkillLevelTimelineDocument, options);
        }
export type GetSkillLevelTimelineQueryHookResult = ReturnType<typeof useGetSkillLevelTimelineQuery>;
export type GetSkillLevelTimelineLazyQueryHookResult = ReturnType<typeof useGetSkillLevelTimelineLazyQuery>;
export type GetSkillLevelTimelineQueryResult = Apollo.QueryResult<GetSkillLevelTimelineQuery, GetSkillLevelTimelineQueryVariables>;
export const GetWrDocument = gql`
    query GetWR($id: Int!) {
  gamesWon: aggregateMatch(
    where: {OR: [{AND: [{matchResult: {equals: 1}}, {Team1: {is: {OR: [{PlayerH1: {is: {playerId: {equals: $id}}}}, {PlayerH2: {is: {playerId: {equals: $id}}}}, {PlayerH3: {is: {playerId: {equals: $id}}}}, {PlayerH4: {is: {playerId: {equals: $id}}}}, {PlayerH5: {is: {playerId: {equals: $id}}}}]}}}]}, {AND: [{matchResult: {equals: 2}}, {Team2: {is: {OR: [{PlayerH1: {is: {playerId: {equals: $id}}}}, {PlayerH2: {is: {playerId: {equals: $id}}}}, {PlayerH3: {is: {playerId: {equals: $id}}}}, {PlayerH4: {is: {playerId: {equals: $id}}}}, {PlayerH5: {is: {playerId: {equals: $id}}}}]}}}]}]}
  ) {
    count {
      all: _all
    }
  }
  gamesLost: aggregateMatch(
    where: {OR: [{AND: [{matchResult: {equals: 2}}, {Team1: {is: {OR: [{PlayerH1: {is: {playerId: {equals: $id}}}}, {PlayerH2: {is: {playerId: {equals: $id}}}}, {PlayerH3: {is: {playerId: {equals: $id}}}}, {PlayerH4: {is: {playerId: {equals: $id}}}}, {PlayerH5: {is: {playerId: {equals: $id}}}}]}}}]}, {AND: [{matchResult: {equals: 1}}, {Team2: {is: {OR: [{PlayerH1: {is: {playerId: {equals: $id}}}}, {PlayerH2: {is: {playerId: {equals: $id}}}}, {PlayerH3: {is: {playerId: {equals: $id}}}}, {PlayerH4: {is: {playerId: {equals: $id}}}}, {PlayerH5: {is: {playerId: {equals: $id}}}}]}}}]}]}
  ) {
    count {
      all: _all
    }
  }
  player(where: {id: $id}) {
    id
    skillLevel
    createdAt
  }
}
    `;

/**
 * __useGetWrQuery__
 *
 * To run a query within a React component, call `useGetWrQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWrQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetWrQuery(baseOptions: Apollo.QueryHookOptions<GetWrQuery, GetWrQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWrQuery, GetWrQueryVariables>(GetWrDocument, options);
      }
export function useGetWrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWrQuery, GetWrQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWrQuery, GetWrQueryVariables>(GetWrDocument, options);
        }
export type GetWrQueryHookResult = ReturnType<typeof useGetWrQuery>;
export type GetWrLazyQueryHookResult = ReturnType<typeof useGetWrLazyQuery>;
export type GetWrQueryResult = Apollo.QueryResult<GetWrQuery, GetWrQueryVariables>;