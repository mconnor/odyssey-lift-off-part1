import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { Layout } from "../components";
import { gql, useQuery } from "@apollo/client";
import TrackCard from '../containers/track-card'
// import {TrackType} from '../types'
import QueryResult from '../components/query-result'

const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

 type PropT = {
  path: string
}
 export default function Tracks ({path}:PropT):JSX.Element {
  const { loading, error, data} = useQuery(TRACKS)


  return( 
    <QueryResult loading={loading} error={error} data={data}>
    
      <Layout grid>
        {
          data?.tracksForHome?.map(track =>  <TrackCard track={track} key={uuidv4()} />)
        }
     </Layout>
  </QueryResult>
  );
};


