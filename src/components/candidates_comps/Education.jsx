import * as React from 'react';
import { DataGrid,GridToolbar } from '@mui/x-data-grid';

import {
 Box,Paper, Typography,Container,Grid,Card,CardContent
} from "@mui/material";
import data from '../../data'
// import newData from './newData';

const columns = [


  { field: 'id', headerName: 'TrooID', width: 130 },
  { field: 'first_name', headerName: 'First name', width: 130 },
  { field: 'last_name', headerName: 'Last name', width: 130 },
  { field: 'phone', headerName: 'phone', type:'number',  width: 130 },
  { field: 'email', headerName: 'email', width: 130 },
  { field: 'district', headerName: 'District', width: 130 },
  { field: 'pincode', headerName: 'Pincode', width: 130 },
  { field: 'score', headerName: 'Score', width: 130 },
  { field: 'last updated', headerName: 'Lastupdated', width: 130 },
  { field: 'Action', headerName: 'Action', width: 130 },

  
];

const rows = [
...data
];

 function Tablecanndidate() {
  
    
  return (
<>
<Container > 
     
     <Grid >
       <Card style={{ maxWidth: 1100, padding: "20px 5px" ,  margin:' 150px auto',  boxShadow:"0px 0px 13px rgba(0, 0, 0, .25)"}}>
         <CardContent>
         <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 20, 30, 50, 100]}
        checkboxSelection
      />
    </div>

         </CardContent>
        </Card>
      </Grid>
    </Container>


          

  
    </>
  );
}

export default Tablecanndidate;