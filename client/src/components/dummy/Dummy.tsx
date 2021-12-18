import React from 'react';

import { useLaunchpadsQuery } from '../../generated/graphql';

export default function Dummy() {
  let {data, error, loading} = useLaunchpadsQuery()
  if (loading || error) return <>Loading or Error</>
  
  return (
    <p>
      {JSON.stringify(data)}
    </p>
  )
}