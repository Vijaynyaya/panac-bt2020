import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import './App.css'

import { Graph, Header, Map, States } from './components';

import { getSummary, getHistory, getBriefAll } from './api/GetData';

const App = () => {
  const [summary, setSummary] = useState({})
  const [history, setHistory] = useState({})
  const [briefAll, setBriefAll] = useState({})
  const [main, setMain] = useState('all')
  
  useEffect(() => {
    const fetchAPI = async _ => {
      setSummary(await getSummary(main))
      setHistory(await getHistory(main))
      setBriefAll(await getBriefAll())
      console.log(main)
    }

    fetchAPI()
  }, [main])
  
  return (
      <div>
        <h1 className='title'>Corona-Tracker: COVID-19 Statistics </h1>
        <Box
          sx={{
            width: { xs: '100%', md: '90%', xl: '80%' },
            color: '#fff',
            margin: '0 auto',
            '& > .MuiBox-root > .MuiBox-root': {
              p: 1,
              borderRadius: 1,
            },
            bgcolor: '#FFFFE0',
          }}
        >
          <Box
            sx={{
              display: { xs: 'flex', sm: 'grid'},
              gridTemplateColumns: { sm: 'repeat(3, 1fr)'},
              gap: { sm: 1 },
              gridTemplateRows: { sm: 'auto'},
              gridTemplateAreas: {sm: `"header header states"
                "graph graph states"
                "map map map"`},
              flexFlow: { xs: 'column nowrap'},
              justifyContent: { xs: 'flex-start'},
              rowGap: {xs: '1em'},
            }}
          >
            <Box sx={{ gridArea: {sm: 'header'}}}><Header data={summary} /></Box>
            <Box sx={{ gridArea: {sm: 'graph'} }}><Graph  data={history} /></Box>
            <Box sx={{ gridArea: {sm: 'states'}, bgcolor: '#CFECEC' }}><States briefAll={briefAll} changeMain={setMain} /></Box>
            <Box sx={{ gridArea: {sm: 'map'}, bgcolor: '#736F6E' }}><Map /></Box>
          </Box>
          <div style={{color: 'black', float: 'right'}}> data sourced from <strong>disease.sh</strong></div>
        </Box>
      </div>
      );
}

export default App;