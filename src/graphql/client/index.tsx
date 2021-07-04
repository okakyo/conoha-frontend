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
};

export type ArticleEntity = {
  __typename?: 'ArticleEntity';
  id: Scalars['String'];
  title: Scalars['String'];
  isPublished: Scalars['Boolean'];
  content: Scalars['String'];
  authorId: Scalars['String'];
};

export type CreateArticleInput = {
  title: Scalars['String'];
  authorId: Scalars['String'];
  isPublished?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  content: Scalars['String'];
};

export type CreateUserInput = {
  name: Scalars['String'];
  type?: Maybe<Scalars['Int']>;
  fullName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  introduction?: Maybe<Scalars['String']>;
};

export type FindAllUserArgs = {
  skip?: Maybe<Scalars['Float']>;
  take?: Maybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: UserEntity;
  updateUser: UserEntity;
  deleteUser: UserEntity;
  createArticle?: Maybe<ArticleEntity>;
  updateArticle?: Maybe<ArticleEntity>;
  deleteArticle?: Maybe<ArticleEntity>;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationCreateArticleArgs = {
  data: CreateArticleInput;
};


export type MutationUpdateArticleArgs = {
  data: UpdateArticleInput;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<UserEntity>;
  users: Array<UserEntity>;
  articles: Array<ArticleEntity>;
  article?: Maybe<ArticleEntity>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryUsersArgs = {
  option?: Maybe<FindAllUserArgs>;
};


export type QueryArticlesArgs = {
  userId: Scalars['String'];
};


export type QueryArticleArgs = {
  id: Scalars['String'];
};

export type UpdateArticleInput = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  fullName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  introduction?: Maybe<Scalars['String']>;
};

export type UserDetailEntity = {
  __typename?: 'UserDetailEntity';
  id: Scalars['Int'];
  email: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
};

export type UserEntity = {
  __typename?: 'UserEntity';
  id: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['Int'];
  thumbnail?: Maybe<Scalars['String']>;
  introduction?: Maybe<UserDetailEntity>;
};

export type ArticleQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ArticleQuery = (
  { __typename?: 'Query' }
  & { article?: Maybe<(
    { __typename?: 'ArticleEntity' }
    & Pick<ArticleEntity, 'id' | 'title' | 'isPublished' | 'content'>
  )> }
);

export type ArticlesQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type ArticlesQuery = (
  { __typename?: 'Query' }
  & { articles: Array<(
    { __typename?: 'ArticleEntity' }
    & Pick<ArticleEntity, 'id' | 'title' | 'isPublished' | 'content'>
  )> }
);

export type UserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'UserEntity' }
    & Pick<UserEntity, 'id' | 'name' | 'thumbnail'>
    & { introduction?: Maybe<(
      { __typename?: 'UserDetailEntity' }
      & Pick<UserDetailEntity, 'email' | 'phone' | 'bio'>
    )> }
  )> }
);


export const ArticleDocument = gql`
    query article($id: String!) {
  article(id: $id) {
    id
    title
    isPublished
    content
  }
}
    `;

/**
 * __useArticleQuery__
 *
 * To run a query within a React component, call `useArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useArticleQuery(baseOptions: Apollo.QueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
      }
export function useArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
        }
export type ArticleQueryHookResult = ReturnType<typeof useArticleQuery>;
export type ArticleLazyQueryHookResult = ReturnType<typeof useArticleLazyQuery>;
export type ArticleQueryResult = Apollo.QueryResult<ArticleQuery, ArticleQueryVariables>;
export const ArticlesDocument = gql`
    query articles($userId: String!) {
  articles(userId: $userId) {
    id
    title
    isPublished
    content
  }
}
    `;

/**
 * __useArticlesQuery__
 *
 * To run a query within a React component, call `useArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useArticlesQuery(baseOptions: Apollo.QueryHookOptions<ArticlesQuery, ArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, options);
      }
export function useArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesQuery, ArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, options);
        }
export type ArticlesQueryHookResult = ReturnType<typeof useArticlesQuery>;
export type ArticlesLazyQueryHookResult = ReturnType<typeof useArticlesLazyQuery>;
export type ArticlesQueryResult = Apollo.QueryResult<ArticlesQuery, ArticlesQueryVariables>;
export const UserDocument = gql`
    query user($id: String!) {
  user(id: $id) {
    id
    name
    thumbnail
    introduction {
      email
      phone
      bio
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;