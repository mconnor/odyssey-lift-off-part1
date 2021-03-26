import React, { Fragment } from 'react';
import { Router } from '@reach/router';
/** importing our pages */
import Tracks from './tracks';

export default function Pages(): JSX.Element {
  return (
    <Router primary={false} component={Fragment}>
      <Tracks path="/" />
    </Router>
  );
}
