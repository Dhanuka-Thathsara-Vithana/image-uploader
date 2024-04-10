import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import backImg from './assets/image.jpg'
import { Box, Grid, Paper, Typography } from '@mui/material'
import ImageUploader from './ImageUploader'

const styles = {
  paperContainer: {
      backgroundImage: `url(${backImg})`
  }
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <Paper style={styles.paperContainer}>
      <Box height='45.8rem' width={'93rem'} display={'flex'}>
      <Typography >Skin Care </Typography>
        <Box paddingLeft='20rem' paddingTop='10rem'>
        <ImageUploader />
        </Box>
        
      </Box>
    </Paper>
  )
}

export default App
