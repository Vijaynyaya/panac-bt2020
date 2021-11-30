import React from 'react';
import { Box } from '@mui/material';
import './States.css';

function renderRow(name, data, changeMain) {

  return (
    <button key={name} onClick={() => {changeMain(name)}}>
        <span style={{float: 'left'}}>{name}</span> 
        <span style={{float: 'right', letterSpacing: '1px'}}>{data['deaths']}/{data['cases']}</span>
    </button>
  );
}

export default function States({ briefAll, changeMain }) {
  if (!briefAll) {
      return 'Loading...'
  }
  return (
    <div>
      <div className='head'>
        <span style={{float: 'left'}}>Country</span> 
        <span style={{float: 'right'}}>Deaths/Cases</span>
      </div>
      <Box
        sx={{ display: 'flex', flexFlow: 'column nowrap', width: '100%', margin: '0 auto', bgcolor: 'background.paper', color: 'black', maxHeight: '600px', overflow: 'auto' }}
        >   
          {Object.keys(briefAll).map(key => renderRow(key, briefAll[key], changeMain))}
      </Box>
    </div>
  );
}