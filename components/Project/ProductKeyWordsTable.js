import React from 'react';
import {CSVLink} from 'react-csv';
import {makeStyles, lighten} from '@material-ui/core/styles';
import classNames from 'classnames';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Search from '@material-ui/icons/Search';
import {convertArrayToObject, useStickyState} from './helpers/helper';
import LoginButton from './LoginButton';

const descendingComparator = (a, b, orderBy) => {
  if (b[ orderBy ] < a[ orderBy ]) {
    return -1;
  }
  if (b[ orderBy ] > a[ orderBy ]) {
    return 1;
  }
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
};

const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[ 0 ], b[ 0 ]);
    if (order !== 0) return order;
    return a[ 1 ] - b[ 1 ];
  });
  return stabilizedThis.map((el) => el[ 0 ]);
};

const headCells = [
  {id: 'keyword', numeric: false, disablePadding: true, label: 'Keyword'},
  {
    id: 'volume',
    numeric: true,
    disablePadding: false,
    label: 'Monthly Searches',
  },
  {id: 'google', numeric: false, disablePadding: true, label: ''},
];

const EnhancedTableHead = props => {
  const {
    classes,
    keywordMap,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = property => event => onRequestSort(event, property);

  return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
                inputProps={{'aria-label': 'select all desserts'}}
            />
          </TableCell>
          {headCells.map((headCell) => (
              <TableCell
                  key={headCell.id}
                  align={headCell.numeric ? 'right' : 'left'}
                  padding={headCell.disablePadding ? 'none' : 'default'}
                  sortDirection={orderBy === headCell.id ? order : false}
              >
                <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={createSortHandler(headCell.id)}
                >
                  {headCell.label}
                  {orderBy === headCell.id ? (
                      <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
                  ) : null}
                </TableSortLabel>
              </TableCell>
          ))}
        </TableRow>
      </TableHead>
  );
};

const useToolbarStyles = makeStyles((theme) => ( {
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
      theme.palette.type === 'light'
          ? {
            color: '#4bb051',
            backgroundColor: lighten('#4bb051', 0.9),
          }
          : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
  title: {
    flex: '1 1 100%',
  },
  headerUrl: {
    color: '#4bb051',
  },
  createAdBtn: {
    backgroundColor: '#4bb051',
    color: '#ffffff',
    width: '300px',
    '&:hover': {
      color: '#4bb051',
    },
  },
  csv: {
    color: '#ffffff',
    '&:hover': {
      color: '#ffffff',
    },
  },
} ));

const EnhancedTableToolbar = ({
  keywordMap,
  numSelected,
  productURL,
  selected,
  user,
  login,
}) => {
  const classes = useToolbarStyles();

  let csvData = [['keywords', 'monthly searches'], ...selected.map(k => [k, keywordMap[ k ].volume])];

  return (
      <Toolbar
          className={classNames(classes.root, {
            [ classes.highlight ]: numSelected > 0,
          })}
      >
        <Typography
            className={classes.title}
            variant="h6"
            id="tableTitle"
            component="div"
        >
          Your Product: <b className={classes.headerUrl}>{productURL}</b>
        </Typography>
        {numSelected > 0 &&
        <>
          {user ? (
              <Button
                  className={classes.createAdBtn}
                  variant="contained"
                  disableElevation
              >
                <CSVLink
                    data={csvData}
                    filename={'keywords.csv'}
                    className={classes.csv}
                    target="_blank"
                >
                  Download CSV
                </CSVLink>
              </Button>
          ) : (
              <LoginButton loginWithRedirect={login}/>
          )}
        </>}
      </Toolbar>
  );
};

const useStyles = makeStyles((theme) => ( {
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  googleBtn: {
    color: '#C0C0C0',
    '&:hover': {
      backgroundColor: 'none',
      color: '#C0C0C0',
    },
  },
} ));

export const ProductKeyWordsTable = ({rows, productURL, user, login}) => {
  const classes = useStyles();
  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState();
  const [selected, setSelected] = useStickyState([], 'selected');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(50);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => setSelected(event.target.checked ? rows.map((n) => n.keyword) : []);

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
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

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <EnhancedTableToolbar
              numSelected={selected.length}
              productURL={productURL}
              selected={selected}
              keywordMap={convertArrayToObject(rows, 'keyword')}
              user={user}
              login={login}
          />
          <TableContainer>
            <Table className={classes.table} size="medium">
              <EnhancedTableHead
                  classes={classes}
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy)).
                    slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).
                    map((row, index) => {
                      const isItemSelected = isSelected(row.keyword);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                          <TableRow
                              hover
                              onClick={(event) => handleClick(event, row.keyword)}
                              role="checkbox"
                              aria-checked={isItemSelected}
                              tabIndex={-1}
                              key={row.keyword}
                              selected={isItemSelected}
                          >
                            <TableCell padding="checkbox">
                              <Checkbox
                                  checked={isItemSelected}
                                  inputProps={{'aria-labelledby': labelId}}
                              />
                            </TableCell>
                            <TableCell
                                component="th"
                                id={labelId}
                                scope="row"
                                padding="none"
                            >
                              {row.keyword}
                            </TableCell>
                            <TableCell align="right">{row.volume.toLocaleString()}</TableCell>
                            <TableCell align="right">
                              <Button
                                  variant="outlined"
                                  size="small"
                                  className={classes.googleBtn}
                                  startIcon={<Search/>}
                                  disableElevation
                                  href={`http://www.google.com/search?q=${row.keyword}`}
                                  target="_blank"
                              >
                                Check Google
                              </Button>
                            </TableCell>
                          </TableRow>
                      );
                    })}
                {emptyRows > 0 && (
                    <TableRow style={{height: 53 * emptyRows}}>
                      <TableCell colSpan={6}/>
                    </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
  );
};
