import { Alert, Button, Grid } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";



function ImageUploader() {
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState<string | null>(null)
  const handleChange = (file) => {
   
    setFile(file);
  };

  const handelClick = () => {
    if(!file) return
    const formData = new FormData();
    formData.append('file', file[0]);
    console.log(formData)
    axios.post('http://127.0.0.1:5000/sort ',  formData ) // add user url for the ml api
    .then(res => {
     console.log(res.data);
     localStorage.setItem('cv', JSON.stringify(res.data));
     setMsg('File Uploaded Successfully');
     }
   )
  }

  console.log(file)
  const fileTypes = ["PDF"];

  return (
    <div className="App">
    <Grid container spacing={2} paddingTop='2rem'>
    <Grid sx={{ padding: '1rem' }} item xs={6} md={7} >
    <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
    />

    <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
    </Grid>
      <Grid sx={{ padding: '1rem' }} item xs={6} md={4} >
          <Button  
                  onClick={handelClick}
                  variant="contained"
                  color="primary"
                  //startIcon={<NorthEastIcon />}
                  sx={{
                    bgcolor: '#0000FF'+ ' !important', 
                '&:hover': {
                    backgroundColor: '#4EF037',
                    opacity: [0.9, 0.8, 0.7]
                  },
                color: 'white', width: '120px',
                    outline: 'false',
                    borderRadius: '6px'
                  }}>
          Submit Image</Button>
          
          </Grid>
      </Grid>
      {msg && <Alert severity="success">{msg}</Alert>}    
    </div>
  
  )
}

export default ImageUploader