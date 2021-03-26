import React, { PropsWithChildren} from 'react';
import styled from '@emotion/styled';
import { LoadingSpinner } from '@apollo/space-kit/Loaders/LoadingSpinner';


/**
 * Query Results conditionally renders Apollo useQuery hooks states:
 * loading, error or its children when data is ready
 */
import { ApolloError } from '@apollo/client'

type PropT = PropsWithChildren<{
  loading: boolean
  error: ApolloError
  data: Record<string, unknown>

}>

export default function QueryResult({ loading, error, data, children }:PropT): JSX.Element  {


  if (error) {
    return (<p>ERROR</p>)
  }
  
  if (loading) {
    return (
        <SpinnerContainer>
          <LoadingSpinner data-testid="spinner" />
        </SpinnerContainer>
      );
  }
  if (!data) {
    return (<p>Nothing</p>)
   } 

  if (data) {
    return <>{children}</>;
  }
};



/** Query Result styled components */
const SpinnerContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
});
