// import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
// import { mockTransactions } from "../../data/mockData";
// import GeographyChart from "../../components/GeographyChart";
// import Header from "../../components/Header";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import AddIcon from '@mui/icons-material/Add';


// const DataSheets = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   return (
//     <Box
//       gridColumn="span 4"
//       gridRow="span 2"
//       backgroundColor={colors.primary[400]}
//       overflow="auto"
//     >
//       <Box
//         display="flex"
//         justifyContent="space-between"
//         alignItems="center"
//         borderBottom={`4px solid ${colors.primary[500]}`}
//         colors={colors.grey[100]}
//         p="15px"
//       >
//         <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
//           Transactions
//         </Typography>
//         <Box display="flex" gap="10px">
//           <Button
//             sx={{
//               backgroundColor: colors.greenAccent[700],
//               color: colors.grey[100],
//               fontSize: "14px",
//               fontWeight: "bold",
//               padding: "10px 20px",
//             }}
//           >
//             <DownloadOutlinedIcon sx={{ mr: "10px" }} />
//             Add a New Record
//           </Button>
//           <Button
//             sx={{
//               backgroundColor: colors.blueAccent[700],
//               color: colors.grey[100],
//               fontSize: "14px",
//               fontWeight: "bold",
//               padding: "10px 20px",
//             }}
//           >
//             <DownloadOutlinedIcon sx={{ mr: "10px" }} />
//             Download Reports
//           </Button>
//         </Box>
//       </Box>

//       <Box
//         display="flex"
//         justifyContent="space-between"
//         alignItems="center"
//         borderBottom={`4px solid ${colors.primary[500]}`}
//         p="15px"
//         backgroundColor='darkcyan'
//       >
//         <Typography color={colors.grey[100]} variant="h6" fontWeight="600" flex={1} textAlign="center">
//           Transaction ID
//         </Typography>
//         <Typography color={colors.grey[100]} variant="h6" fontWeight="600" flex={1} textAlign="center">
//           User
//         </Typography>
//         <Typography color={colors.grey[100]} variant="h6" fontWeight="600" flex={1} textAlign="center">
//           Date
//         </Typography>
//         <Typography color={colors.grey[100]} variant="h6" fontWeight="600" flex={1} textAlign="center">
//           Cost
//         </Typography>
//         <Typography color={colors.grey[100]} variant="h6" fontWeight="600" flex={1} textAlign="center">
//           Actions
//         </Typography>
//       </Box>

//       {mockTransactions.map((transaction, i) => (
//         <Box
//           key={`${transaction.txId}-${i}`}
//           display="flex"
//           justifyContent="space-between"
//           alignItems="center"
//           borderBottom={`4px solid ${colors.primary[500]}`}
//           p="15px"
//           sx={{
//             transition: "transform 0.2s", // Smooth transition for the transform effect
//             "&:hover": {
//               transform: "scale(1.02)", // Slightly expand the box
//             },
//           }}
//         >
//           <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600" flex={1} textAlign="center">
//             {transaction.txId}
//           </Typography>
//           <Typography color={colors.grey[100]} flex={1} textAlign="center">
//             {transaction.user}
//           </Typography>
//           <Typography color={colors.grey[100]} flex={1} textAlign="center">
//             {transaction.date}
//           </Typography>
//           <Typography color={colors.grey[100]} flex={1} textAlign="center">
//             ${transaction.cost}
//           </Typography>
//           <Box display="flex" gap="10px" flex={1} justifyContent="center">
//             <Box
//               component="button"
//               sx={{
//                 backgroundColor: 'teal',
//                 color: 'white',
//                 padding: '5px 10px',
//                 borderRadius: '4px',
//                 border: 'none',
//                 cursor: 'pointer',
//                 "&:hover": {
//                   backgroundColor: 'darkcyan',
//                 },
//               }}
//             >
//               Edit
//             </Box>
//             <Box
//               component="button"
//               sx={{
//                 backgroundColor: 'red',
//                 color: 'white',
//                 padding: '5px 10px',
//                 borderRadius: '4px',
//                 border: 'none',
//                 cursor: 'pointer',
//                 "&:hover": {
//                   backgroundColor: 'darkred',
//                 },
//               }}
//             >
//               Delete
//             </Box>
//           </Box>
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default DataSheets;

import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";

import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

function createData(id, name, calories, fat, carbs, protein) {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData(1, 'Cupcake', 305, 3.7, 67, 4.3),
  createData(2, 'Donut', 452, 25.0, 51, 4.9),
  createData(3, 'Eclair', 262, 16.0, 24, 6.0),
  createData(4, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData(5, 'Gingerbread', 356, 16.0, 49, 3.9),
  createData(6, 'Honeycomb', 408, 3.2, 87, 6.5),
  createData(7, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData(8, 'Jelly Bean', 375, 0.0, 94, 0.0),
  createData(9, 'KitKat', 518, 26.0, 65, 7.0),
  createData(10, 'Lollipop', 392, 0.2, 98, 0.0),
  createData(11, 'Marshmallow', 318, 0, 81, 2.0),
  createData(12, 'Nougat', 360, 19.0, 9, 37.0),
  createData(13, 'Oreo', 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Dessert (100g serving)',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'Calories',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'Fat (g)',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Carbs (g)',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'Protein (g)',
  },
  {
    id: 'modify',
    numeric: false,
    disablePadding: false,
    label: 'Modify',
    
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : (headCell.id === 'modify' ? 'center' : 'left')}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (

    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        

        ...(numSelected > 0 && {
          bgcolor: (theme) =>    //colors.greenAccent[700]
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),


        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Transactions
        </Typography>
      )}

      <Box display="flex" gap="10px">
        <Button
          sx={{
            flex: 1, // Allow the button to grow equally
            backgroundColor: colors.greenAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "2px 10px", // Adjust padding as needed
            minWidth: "0", // Allows the button to shrink to fit content width
            textAlign: "center", // Center align text within the button
          }}
        >
          <AddIcon sx={{ mr: "10px" }} />
          Add a New Record
        </Button>
        <Button
          sx={{
            flex: 1, // Allow the button to grow equally
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "2px 10px", // Adjust padding as needed
            minWidth: "0", // Allows the button to shrink to fit content width
            textAlign: "center", // Center align text within the button
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          Download Selected Rows
        </Button>
      </Box>




      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}

    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]); //selected rows check if you remove IDS! To debug further, add console.log(selected) within handleClick to see how the selected state changes when you click items.
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' ,

                      backgroundColor: colors.primary[400],

          
                    }}
                    
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color= "primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    <TableCell align="right">
                    <Box display="flex" gap="10px" flex={1} justifyContent="center">
                        <Box
                          component="button"
                          sx={{
                            backgroundColor: 'teal',
                            color: 'white',
                            padding: '5px 10px',
                            borderRadius: '4px',
                            border: 'none',
                            cursor: 'pointer',
                            "&:hover": {
                              backgroundColor: 'darkcyan',
                            },
                          }}
                          onClick={(event)=>{event.stopPropagation(); window.alert("eshak");}}
                        >
                          Edit
                        </Box>
                        <Box
                          component="button"
                          sx={{
                            backgroundColor: 'red',
                            color: 'white',
                            padding: '5px 10px',
                            borderRadius: '4px',
                            border: 'none',
                            cursor: 'pointer',
                            "&:hover": {
                              backgroundColor: 'darkred',
                            },
                          }}
                          onClick={(event)=>{event.stopPropagation(); window.alert("eshak");}}

                        >
                          Delete
                        </Box>
                      </Box>
                    </TableCell>


                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
        sx={{ ml:1 }}
      />
    </Box>
  );
} 

