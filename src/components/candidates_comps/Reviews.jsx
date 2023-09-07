import * as React from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector } from '@mui/x-data-grid';
import { Box, Paper, Typography, Container, Grid, Card, CardContent, TextField, InputAdornment, IconButton } from "@mui/material";
import { Search as SearchIcon } from '@mui/icons-material';
import data from '../../data';

const columns = [
  { field: 'id', headerName: 'TrooID', width: 130 },
  { field: 'first_name', headerName: 'First name', width: 130 },
  { field: 'last_name', headerName: 'Last name', width: 130 },
  { field: 'phone', headerName: 'Phone', type: 'number', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  { field: 'district', headerName: 'District', width: 130 },
  { field: 'pincode', headerName: 'Pincode', width: 130 },
  { field: 'score', headerName: 'Score', width: 130 },
  { field: 'last_updated', headerName: 'Last Updated', width: 130 },
  { field: 'action', headerName: 'Action', width: 130 },
];

const rows = [...data];

function TableCandidate() {
  const [searchText, setSearchText] = React.useState('');
  const [filteredRows, setFilteredRows] = React.useState(rows);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    const filteredRows = rows.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchText.toLowerCase())
      )
    );
    setFilteredRows(filteredRows);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Container>
      <Grid>
        <Card style={{ maxWidth: 1100, padding: "20px 5px", margin: '150px auto', boxShadow: "0px 0px 13px rgba(0, 0, 0, .25)" }}>
          <CardContent>
            <div style={{ height: 500, width: '100%' }}>
              <DataGrid
                rows={filteredRows}
                columns={columns}
                slots={{
                  toolbar: () => (
                    <GridToolbarContainer>
                      <GridToolbarColumnsButton />
                      <GridToolbarFilterButton />
                      <GridToolbarDensitySelector />
                      <TextField
                        label="Search"
                        variant="outlined"
                        size="small"
                        value={searchText}
                        onChange={handleSearchChange}
                        onKeyDown={handleKeyDown}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={handleSearch}>
                                <SearchIcon />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </GridToolbarContainer>
                  )
                }}
                pageSize={5}
                checkboxSelection
                disableColumnMenu
                disableColumnFilter
              />
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
}

export default TableCandidate;
