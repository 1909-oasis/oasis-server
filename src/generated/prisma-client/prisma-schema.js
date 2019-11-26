module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateCocktail {
  count: Int!
}

type AggregateCocktailIngredient {
  count: Int!
}

type AggregateIngredient {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateUserCocktail {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Cocktail {
  id: ID!
  name: String!
  alcoholic: Boolean!
  imageUrl: String!
  starterPack: Boolean!
  totalRating: Int!
  totalVotes: Int!
  recommendedCount: Int!
  ingredients(where: CocktailIngredientWhereInput, orderBy: CocktailIngredientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CocktailIngredient!]
  createdAt: DateTime!
}

type CocktailConnection {
  pageInfo: PageInfo!
  edges: [CocktailEdge]!
  aggregate: AggregateCocktail!
}

input CocktailCreateInput {
  id: ID
  name: String!
  alcoholic: Boolean!
  imageUrl: String!
  starterPack: Boolean!
  totalRating: Int
  totalVotes: Int
  recommendedCount: Int
  ingredients: CocktailIngredientCreateManyWithoutCocktailInput
}

input CocktailCreateManyInput {
  create: [CocktailCreateInput!]
  connect: [CocktailWhereUniqueInput!]
}

input CocktailCreateOneInput {
  create: CocktailCreateInput
  connect: CocktailWhereUniqueInput
}

input CocktailCreateOneWithoutIngredientsInput {
  create: CocktailCreateWithoutIngredientsInput
  connect: CocktailWhereUniqueInput
}

input CocktailCreateWithoutIngredientsInput {
  id: ID
  name: String!
  alcoholic: Boolean!
  imageUrl: String!
  starterPack: Boolean!
  totalRating: Int
  totalVotes: Int
  recommendedCount: Int
}

type CocktailEdge {
  node: Cocktail!
  cursor: String!
}

type CocktailIngredient {
  id: ID!
  measure: String!
  cocktail: Cocktail!
  ingredient: Ingredient!
  createdAt: DateTime!
}

type CocktailIngredientConnection {
  pageInfo: PageInfo!
  edges: [CocktailIngredientEdge]!
  aggregate: AggregateCocktailIngredient!
}

input CocktailIngredientCreateInput {
  id: ID
  measure: String!
  cocktail: CocktailCreateOneWithoutIngredientsInput!
  ingredient: IngredientCreateOneInput!
}

input CocktailIngredientCreateManyWithoutCocktailInput {
  create: [CocktailIngredientCreateWithoutCocktailInput!]
  connect: [CocktailIngredientWhereUniqueInput!]
}

input CocktailIngredientCreateWithoutCocktailInput {
  id: ID
  measure: String!
  ingredient: IngredientCreateOneInput!
}

type CocktailIngredientEdge {
  node: CocktailIngredient!
  cursor: String!
}

enum CocktailIngredientOrderByInput {
  id_ASC
  id_DESC
  measure_ASC
  measure_DESC
  createdAt_ASC
  createdAt_DESC
}

type CocktailIngredientPreviousValues {
  id: ID!
  measure: String!
  createdAt: DateTime!
}

input CocktailIngredientScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  measure: String
  measure_not: String
  measure_in: [String!]
  measure_not_in: [String!]
  measure_lt: String
  measure_lte: String
  measure_gt: String
  measure_gte: String
  measure_contains: String
  measure_not_contains: String
  measure_starts_with: String
  measure_not_starts_with: String
  measure_ends_with: String
  measure_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [CocktailIngredientScalarWhereInput!]
  OR: [CocktailIngredientScalarWhereInput!]
  NOT: [CocktailIngredientScalarWhereInput!]
}

type CocktailIngredientSubscriptionPayload {
  mutation: MutationType!
  node: CocktailIngredient
  updatedFields: [String!]
  previousValues: CocktailIngredientPreviousValues
}

input CocktailIngredientSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CocktailIngredientWhereInput
  AND: [CocktailIngredientSubscriptionWhereInput!]
  OR: [CocktailIngredientSubscriptionWhereInput!]
  NOT: [CocktailIngredientSubscriptionWhereInput!]
}

input CocktailIngredientUpdateInput {
  measure: String
  cocktail: CocktailUpdateOneRequiredWithoutIngredientsInput
  ingredient: IngredientUpdateOneRequiredInput
}

input CocktailIngredientUpdateManyDataInput {
  measure: String
}

input CocktailIngredientUpdateManyMutationInput {
  measure: String
}

input CocktailIngredientUpdateManyWithoutCocktailInput {
  create: [CocktailIngredientCreateWithoutCocktailInput!]
  delete: [CocktailIngredientWhereUniqueInput!]
  connect: [CocktailIngredientWhereUniqueInput!]
  set: [CocktailIngredientWhereUniqueInput!]
  disconnect: [CocktailIngredientWhereUniqueInput!]
  update: [CocktailIngredientUpdateWithWhereUniqueWithoutCocktailInput!]
  upsert: [CocktailIngredientUpsertWithWhereUniqueWithoutCocktailInput!]
  deleteMany: [CocktailIngredientScalarWhereInput!]
  updateMany: [CocktailIngredientUpdateManyWithWhereNestedInput!]
}

input CocktailIngredientUpdateManyWithWhereNestedInput {
  where: CocktailIngredientScalarWhereInput!
  data: CocktailIngredientUpdateManyDataInput!
}

input CocktailIngredientUpdateWithoutCocktailDataInput {
  measure: String
  ingredient: IngredientUpdateOneRequiredInput
}

input CocktailIngredientUpdateWithWhereUniqueWithoutCocktailInput {
  where: CocktailIngredientWhereUniqueInput!
  data: CocktailIngredientUpdateWithoutCocktailDataInput!
}

input CocktailIngredientUpsertWithWhereUniqueWithoutCocktailInput {
  where: CocktailIngredientWhereUniqueInput!
  update: CocktailIngredientUpdateWithoutCocktailDataInput!
  create: CocktailIngredientCreateWithoutCocktailInput!
}

input CocktailIngredientWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  measure: String
  measure_not: String
  measure_in: [String!]
  measure_not_in: [String!]
  measure_lt: String
  measure_lte: String
  measure_gt: String
  measure_gte: String
  measure_contains: String
  measure_not_contains: String
  measure_starts_with: String
  measure_not_starts_with: String
  measure_ends_with: String
  measure_not_ends_with: String
  cocktail: CocktailWhereInput
  ingredient: IngredientWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [CocktailIngredientWhereInput!]
  OR: [CocktailIngredientWhereInput!]
  NOT: [CocktailIngredientWhereInput!]
}

input CocktailIngredientWhereUniqueInput {
  id: ID
}

enum CocktailOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  alcoholic_ASC
  alcoholic_DESC
  imageUrl_ASC
  imageUrl_DESC
  starterPack_ASC
  starterPack_DESC
  totalRating_ASC
  totalRating_DESC
  totalVotes_ASC
  totalVotes_DESC
  recommendedCount_ASC
  recommendedCount_DESC
  createdAt_ASC
  createdAt_DESC
}

type CocktailPreviousValues {
  id: ID!
  name: String!
  alcoholic: Boolean!
  imageUrl: String!
  starterPack: Boolean!
  totalRating: Int!
  totalVotes: Int!
  recommendedCount: Int!
  createdAt: DateTime!
}

input CocktailScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  alcoholic: Boolean
  alcoholic_not: Boolean
  imageUrl: String
  imageUrl_not: String
  imageUrl_in: [String!]
  imageUrl_not_in: [String!]
  imageUrl_lt: String
  imageUrl_lte: String
  imageUrl_gt: String
  imageUrl_gte: String
  imageUrl_contains: String
  imageUrl_not_contains: String
  imageUrl_starts_with: String
  imageUrl_not_starts_with: String
  imageUrl_ends_with: String
  imageUrl_not_ends_with: String
  starterPack: Boolean
  starterPack_not: Boolean
  totalRating: Int
  totalRating_not: Int
  totalRating_in: [Int!]
  totalRating_not_in: [Int!]
  totalRating_lt: Int
  totalRating_lte: Int
  totalRating_gt: Int
  totalRating_gte: Int
  totalVotes: Int
  totalVotes_not: Int
  totalVotes_in: [Int!]
  totalVotes_not_in: [Int!]
  totalVotes_lt: Int
  totalVotes_lte: Int
  totalVotes_gt: Int
  totalVotes_gte: Int
  recommendedCount: Int
  recommendedCount_not: Int
  recommendedCount_in: [Int!]
  recommendedCount_not_in: [Int!]
  recommendedCount_lt: Int
  recommendedCount_lte: Int
  recommendedCount_gt: Int
  recommendedCount_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [CocktailScalarWhereInput!]
  OR: [CocktailScalarWhereInput!]
  NOT: [CocktailScalarWhereInput!]
}

type CocktailSubscriptionPayload {
  mutation: MutationType!
  node: Cocktail
  updatedFields: [String!]
  previousValues: CocktailPreviousValues
}

input CocktailSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CocktailWhereInput
  AND: [CocktailSubscriptionWhereInput!]
  OR: [CocktailSubscriptionWhereInput!]
  NOT: [CocktailSubscriptionWhereInput!]
}

input CocktailUpdateDataInput {
  name: String
  alcoholic: Boolean
  imageUrl: String
  starterPack: Boolean
  totalRating: Int
  totalVotes: Int
  recommendedCount: Int
  ingredients: CocktailIngredientUpdateManyWithoutCocktailInput
}

input CocktailUpdateInput {
  name: String
  alcoholic: Boolean
  imageUrl: String
  starterPack: Boolean
  totalRating: Int
  totalVotes: Int
  recommendedCount: Int
  ingredients: CocktailIngredientUpdateManyWithoutCocktailInput
}

input CocktailUpdateManyDataInput {
  name: String
  alcoholic: Boolean
  imageUrl: String
  starterPack: Boolean
  totalRating: Int
  totalVotes: Int
  recommendedCount: Int
}

input CocktailUpdateManyInput {
  create: [CocktailCreateInput!]
  update: [CocktailUpdateWithWhereUniqueNestedInput!]
  upsert: [CocktailUpsertWithWhereUniqueNestedInput!]
  delete: [CocktailWhereUniqueInput!]
  connect: [CocktailWhereUniqueInput!]
  set: [CocktailWhereUniqueInput!]
  disconnect: [CocktailWhereUniqueInput!]
  deleteMany: [CocktailScalarWhereInput!]
  updateMany: [CocktailUpdateManyWithWhereNestedInput!]
}

input CocktailUpdateManyMutationInput {
  name: String
  alcoholic: Boolean
  imageUrl: String
  starterPack: Boolean
  totalRating: Int
  totalVotes: Int
  recommendedCount: Int
}

input CocktailUpdateManyWithWhereNestedInput {
  where: CocktailScalarWhereInput!
  data: CocktailUpdateManyDataInput!
}

input CocktailUpdateOneRequiredInput {
  create: CocktailCreateInput
  update: CocktailUpdateDataInput
  upsert: CocktailUpsertNestedInput
  connect: CocktailWhereUniqueInput
}

input CocktailUpdateOneRequiredWithoutIngredientsInput {
  create: CocktailCreateWithoutIngredientsInput
  update: CocktailUpdateWithoutIngredientsDataInput
  upsert: CocktailUpsertWithoutIngredientsInput
  connect: CocktailWhereUniqueInput
}

input CocktailUpdateWithoutIngredientsDataInput {
  name: String
  alcoholic: Boolean
  imageUrl: String
  starterPack: Boolean
  totalRating: Int
  totalVotes: Int
  recommendedCount: Int
}

input CocktailUpdateWithWhereUniqueNestedInput {
  where: CocktailWhereUniqueInput!
  data: CocktailUpdateDataInput!
}

input CocktailUpsertNestedInput {
  update: CocktailUpdateDataInput!
  create: CocktailCreateInput!
}

input CocktailUpsertWithoutIngredientsInput {
  update: CocktailUpdateWithoutIngredientsDataInput!
  create: CocktailCreateWithoutIngredientsInput!
}

input CocktailUpsertWithWhereUniqueNestedInput {
  where: CocktailWhereUniqueInput!
  update: CocktailUpdateDataInput!
  create: CocktailCreateInput!
}

input CocktailWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  alcoholic: Boolean
  alcoholic_not: Boolean
  imageUrl: String
  imageUrl_not: String
  imageUrl_in: [String!]
  imageUrl_not_in: [String!]
  imageUrl_lt: String
  imageUrl_lte: String
  imageUrl_gt: String
  imageUrl_gte: String
  imageUrl_contains: String
  imageUrl_not_contains: String
  imageUrl_starts_with: String
  imageUrl_not_starts_with: String
  imageUrl_ends_with: String
  imageUrl_not_ends_with: String
  starterPack: Boolean
  starterPack_not: Boolean
  totalRating: Int
  totalRating_not: Int
  totalRating_in: [Int!]
  totalRating_not_in: [Int!]
  totalRating_lt: Int
  totalRating_lte: Int
  totalRating_gt: Int
  totalRating_gte: Int
  totalVotes: Int
  totalVotes_not: Int
  totalVotes_in: [Int!]
  totalVotes_not_in: [Int!]
  totalVotes_lt: Int
  totalVotes_lte: Int
  totalVotes_gt: Int
  totalVotes_gte: Int
  recommendedCount: Int
  recommendedCount_not: Int
  recommendedCount_in: [Int!]
  recommendedCount_not_in: [Int!]
  recommendedCount_lt: Int
  recommendedCount_lte: Int
  recommendedCount_gt: Int
  recommendedCount_gte: Int
  ingredients_every: CocktailIngredientWhereInput
  ingredients_some: CocktailIngredientWhereInput
  ingredients_none: CocktailIngredientWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [CocktailWhereInput!]
  OR: [CocktailWhereInput!]
  NOT: [CocktailWhereInput!]
}

input CocktailWhereUniqueInput {
  id: ID
}

scalar DateTime

type Ingredient {
  id: ID!
  name: String!
  createdAt: DateTime!
}

type IngredientConnection {
  pageInfo: PageInfo!
  edges: [IngredientEdge]!
  aggregate: AggregateIngredient!
}

input IngredientCreateInput {
  id: ID
  name: String!
}

input IngredientCreateOneInput {
  create: IngredientCreateInput
  connect: IngredientWhereUniqueInput
}

type IngredientEdge {
  node: Ingredient!
  cursor: String!
}

enum IngredientOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
}

type IngredientPreviousValues {
  id: ID!
  name: String!
  createdAt: DateTime!
}

type IngredientSubscriptionPayload {
  mutation: MutationType!
  node: Ingredient
  updatedFields: [String!]
  previousValues: IngredientPreviousValues
}

input IngredientSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: IngredientWhereInput
  AND: [IngredientSubscriptionWhereInput!]
  OR: [IngredientSubscriptionWhereInput!]
  NOT: [IngredientSubscriptionWhereInput!]
}

input IngredientUpdateDataInput {
  name: String
}

input IngredientUpdateInput {
  name: String
}

input IngredientUpdateManyMutationInput {
  name: String
}

input IngredientUpdateOneRequiredInput {
  create: IngredientCreateInput
  update: IngredientUpdateDataInput
  upsert: IngredientUpsertNestedInput
  connect: IngredientWhereUniqueInput
}

input IngredientUpsertNestedInput {
  update: IngredientUpdateDataInput!
  create: IngredientCreateInput!
}

input IngredientWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [IngredientWhereInput!]
  OR: [IngredientWhereInput!]
  NOT: [IngredientWhereInput!]
}

input IngredientWhereUniqueInput {
  id: ID
  name: String
}

scalar Long

type Mutation {
  createCocktail(data: CocktailCreateInput!): Cocktail!
  updateCocktail(data: CocktailUpdateInput!, where: CocktailWhereUniqueInput!): Cocktail
  updateManyCocktails(data: CocktailUpdateManyMutationInput!, where: CocktailWhereInput): BatchPayload!
  upsertCocktail(where: CocktailWhereUniqueInput!, create: CocktailCreateInput!, update: CocktailUpdateInput!): Cocktail!
  deleteCocktail(where: CocktailWhereUniqueInput!): Cocktail
  deleteManyCocktails(where: CocktailWhereInput): BatchPayload!
  createCocktailIngredient(data: CocktailIngredientCreateInput!): CocktailIngredient!
  updateCocktailIngredient(data: CocktailIngredientUpdateInput!, where: CocktailIngredientWhereUniqueInput!): CocktailIngredient
  updateManyCocktailIngredients(data: CocktailIngredientUpdateManyMutationInput!, where: CocktailIngredientWhereInput): BatchPayload!
  upsertCocktailIngredient(where: CocktailIngredientWhereUniqueInput!, create: CocktailIngredientCreateInput!, update: CocktailIngredientUpdateInput!): CocktailIngredient!
  deleteCocktailIngredient(where: CocktailIngredientWhereUniqueInput!): CocktailIngredient
  deleteManyCocktailIngredients(where: CocktailIngredientWhereInput): BatchPayload!
  createIngredient(data: IngredientCreateInput!): Ingredient!
  updateIngredient(data: IngredientUpdateInput!, where: IngredientWhereUniqueInput!): Ingredient
  updateManyIngredients(data: IngredientUpdateManyMutationInput!, where: IngredientWhereInput): BatchPayload!
  upsertIngredient(where: IngredientWhereUniqueInput!, create: IngredientCreateInput!, update: IngredientUpdateInput!): Ingredient!
  deleteIngredient(where: IngredientWhereUniqueInput!): Ingredient
  deleteManyIngredients(where: IngredientWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createUserCocktail(data: UserCocktailCreateInput!): UserCocktail!
  updateUserCocktail(data: UserCocktailUpdateInput!, where: UserCocktailWhereUniqueInput!): UserCocktail
  updateManyUserCocktails(data: UserCocktailUpdateManyMutationInput!, where: UserCocktailWhereInput): BatchPayload!
  upsertUserCocktail(where: UserCocktailWhereUniqueInput!, create: UserCocktailCreateInput!, update: UserCocktailUpdateInput!): UserCocktail!
  deleteUserCocktail(where: UserCocktailWhereUniqueInput!): UserCocktail
  deleteManyUserCocktails(where: UserCocktailWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  cocktail(where: CocktailWhereUniqueInput!): Cocktail
  cocktails(where: CocktailWhereInput, orderBy: CocktailOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cocktail]!
  cocktailsConnection(where: CocktailWhereInput, orderBy: CocktailOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CocktailConnection!
  cocktailIngredient(where: CocktailIngredientWhereUniqueInput!): CocktailIngredient
  cocktailIngredients(where: CocktailIngredientWhereInput, orderBy: CocktailIngredientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CocktailIngredient]!
  cocktailIngredientsConnection(where: CocktailIngredientWhereInput, orderBy: CocktailIngredientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CocktailIngredientConnection!
  ingredient(where: IngredientWhereUniqueInput!): Ingredient
  ingredients(where: IngredientWhereInput, orderBy: IngredientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ingredient]!
  ingredientsConnection(where: IngredientWhereInput, orderBy: IngredientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): IngredientConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  userCocktail(where: UserCocktailWhereUniqueInput!): UserCocktail
  userCocktails(where: UserCocktailWhereInput, orderBy: UserCocktailOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserCocktail]!
  userCocktailsConnection(where: UserCocktailWhereInput, orderBy: UserCocktailOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserCocktailConnection!
  node(id: ID!): Node
}

type Subscription {
  cocktail(where: CocktailSubscriptionWhereInput): CocktailSubscriptionPayload
  cocktailIngredient(where: CocktailIngredientSubscriptionWhereInput): CocktailIngredientSubscriptionPayload
  ingredient(where: IngredientSubscriptionWhereInput): IngredientSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  userCocktail(where: UserCocktailSubscriptionWhereInput): UserCocktailSubscriptionPayload
}

type User {
  id: ID!
  firstName: String!
  lastName: String!
  password: String!
  email: String!
  createdAt: DateTime!
  votes(where: UserCocktailWhereInput, orderBy: UserCocktailOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserCocktail!]
  queue(where: CocktailWhereInput, orderBy: CocktailOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cocktail!]
}

type UserCocktail {
  id: ID!
  user: User!
  cocktail: Cocktail!
  rating: Int!
  recommended: Boolean!
  createdAt: DateTime!
}

type UserCocktailConnection {
  pageInfo: PageInfo!
  edges: [UserCocktailEdge]!
  aggregate: AggregateUserCocktail!
}

input UserCocktailCreateInput {
  id: ID
  user: UserCreateOneWithoutVotesInput!
  cocktail: CocktailCreateOneInput!
  rating: Int!
  recommended: Boolean!
}

input UserCocktailCreateManyWithoutUserInput {
  create: [UserCocktailCreateWithoutUserInput!]
  connect: [UserCocktailWhereUniqueInput!]
}

input UserCocktailCreateWithoutUserInput {
  id: ID
  cocktail: CocktailCreateOneInput!
  rating: Int!
  recommended: Boolean!
}

type UserCocktailEdge {
  node: UserCocktail!
  cursor: String!
}

enum UserCocktailOrderByInput {
  id_ASC
  id_DESC
  rating_ASC
  rating_DESC
  recommended_ASC
  recommended_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserCocktailPreviousValues {
  id: ID!
  rating: Int!
  recommended: Boolean!
  createdAt: DateTime!
}

input UserCocktailScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  rating: Int
  rating_not: Int
  rating_in: [Int!]
  rating_not_in: [Int!]
  rating_lt: Int
  rating_lte: Int
  rating_gt: Int
  rating_gte: Int
  recommended: Boolean
  recommended_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [UserCocktailScalarWhereInput!]
  OR: [UserCocktailScalarWhereInput!]
  NOT: [UserCocktailScalarWhereInput!]
}

type UserCocktailSubscriptionPayload {
  mutation: MutationType!
  node: UserCocktail
  updatedFields: [String!]
  previousValues: UserCocktailPreviousValues
}

input UserCocktailSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserCocktailWhereInput
  AND: [UserCocktailSubscriptionWhereInput!]
  OR: [UserCocktailSubscriptionWhereInput!]
  NOT: [UserCocktailSubscriptionWhereInput!]
}

input UserCocktailUpdateInput {
  user: UserUpdateOneRequiredWithoutVotesInput
  cocktail: CocktailUpdateOneRequiredInput
  rating: Int
  recommended: Boolean
}

input UserCocktailUpdateManyDataInput {
  rating: Int
  recommended: Boolean
}

input UserCocktailUpdateManyMutationInput {
  rating: Int
  recommended: Boolean
}

input UserCocktailUpdateManyWithoutUserInput {
  create: [UserCocktailCreateWithoutUserInput!]
  delete: [UserCocktailWhereUniqueInput!]
  connect: [UserCocktailWhereUniqueInput!]
  set: [UserCocktailWhereUniqueInput!]
  disconnect: [UserCocktailWhereUniqueInput!]
  update: [UserCocktailUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [UserCocktailUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [UserCocktailScalarWhereInput!]
  updateMany: [UserCocktailUpdateManyWithWhereNestedInput!]
}

input UserCocktailUpdateManyWithWhereNestedInput {
  where: UserCocktailScalarWhereInput!
  data: UserCocktailUpdateManyDataInput!
}

input UserCocktailUpdateWithoutUserDataInput {
  cocktail: CocktailUpdateOneRequiredInput
  rating: Int
  recommended: Boolean
}

input UserCocktailUpdateWithWhereUniqueWithoutUserInput {
  where: UserCocktailWhereUniqueInput!
  data: UserCocktailUpdateWithoutUserDataInput!
}

input UserCocktailUpsertWithWhereUniqueWithoutUserInput {
  where: UserCocktailWhereUniqueInput!
  update: UserCocktailUpdateWithoutUserDataInput!
  create: UserCocktailCreateWithoutUserInput!
}

input UserCocktailWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  cocktail: CocktailWhereInput
  rating: Int
  rating_not: Int
  rating_in: [Int!]
  rating_not_in: [Int!]
  rating_lt: Int
  rating_lte: Int
  rating_gt: Int
  rating_gte: Int
  recommended: Boolean
  recommended_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [UserCocktailWhereInput!]
  OR: [UserCocktailWhereInput!]
  NOT: [UserCocktailWhereInput!]
}

input UserCocktailWhereUniqueInput {
  id: ID
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  firstName: String!
  lastName: String!
  password: String!
  email: String!
  votes: UserCocktailCreateManyWithoutUserInput
  queue: CocktailCreateManyInput
}

input UserCreateOneWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutVotesInput {
  id: ID
  firstName: String!
  lastName: String!
  password: String!
  email: String!
  queue: CocktailCreateManyInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  password_ASC
  password_DESC
  email_ASC
  email_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  firstName: String!
  lastName: String!
  password: String!
  email: String!
  createdAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  firstName: String
  lastName: String
  password: String
  email: String
  votes: UserCocktailUpdateManyWithoutUserInput
  queue: CocktailUpdateManyInput
}

input UserUpdateManyMutationInput {
  firstName: String
  lastName: String
  password: String
  email: String
}

input UserUpdateOneRequiredWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  update: UserUpdateWithoutVotesDataInput
  upsert: UserUpsertWithoutVotesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutVotesDataInput {
  firstName: String
  lastName: String
  password: String
  email: String
  queue: CocktailUpdateManyInput
}

input UserUpsertWithoutVotesInput {
  update: UserUpdateWithoutVotesDataInput!
  create: UserCreateWithoutVotesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  votes_every: UserCocktailWhereInput
  votes_some: UserCocktailWhereInput
  votes_none: UserCocktailWhereInput
  queue_every: CocktailWhereInput
  queue_some: CocktailWhereInput
  queue_none: CocktailWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    