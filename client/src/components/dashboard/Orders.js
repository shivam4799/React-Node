import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "@reach/router";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";

// import ModalLayout from "./ModalLayout";
import axios from "axios";

import Search from "./Search";

function createData(Sr, Enrollment, CollegeID, Name, BirthDate) {
  return { Sr, Enrollment, CollegeID, Name, BirthDate };
}

let rows2 = [
  createData(1, 160410107093, "16BECEG059", "Shivam Patel", "1/1/1999"),
  createData(2, 170410107093, "16BECEG069", "vam Patel", "2/1/1999"),
  createData(3, 170410107094, "16BECEG079", "alex Patel", "2/1/1999"),
  createData(4, 170410107095, "16BECEG099", "Patel", "2/1/1999"),
  createData(5, 160410107093, "16BECEG059", "Shivam Patel", "1/1/1999"),
  createData(6, 170410107093, "16BECEG069", "vam Patel", "2/1/1999"),
  createData(7, 170410107094, "16BECEG079", "alex Patel", "2/1/1999"),
  createData(8, 170410107095, "16BECEG099", "Patel", "2/1/1999"),
  createData(9, 160410107093, "16BECEG059", "Shivam Patel", "1/1/1999"),
  createData(10, 170410107093, "16BECEG069", "vam Patel", "2/1/1999"),
  createData(11, 170410107094, "16BECEG079", "alex Patel", "2/1/1999"),
  createData(12, 170410107095, "16BECEG099", "Patel", "2/1/1999"),
  createData(13, 160410107093, "16BECEG059", "Shivam Patel", "1/1/1999"),
  createData(14, 170410107093, "16BECEG069", "vam Patel", "2/1/1999"),
  createData(15, 170410107094, "16BECEG079", "alex Patel", "2/1/1999"),
  createData(17, 170410107094, "16BECEG079", "alex Patel", "2/1/1999"),
  createData(18, 170410107095, "16BECEG099", "Patel", "2/1/1999"),
  createData(19, 160410107093, "16BECEG059", "Shivam Patel", "1/1/1999"),
  createData(21, 170410107094, "16BECEG079", "alex Patel", "2/1/1999"),
  createData(22, 170410107095, "16BECEG099", "Patel", "2/1/1999"),
  createData(23, 160410107093, "16BECEG059", "Shivam Patel", "1/1/1999"),
  createData(24, 170410107093, "16BECEG069", "vam Patel", "2/1/1999"),
  createData(25, 170410107094, "16BECEG079", "alex Patel", "2/1/1999"),
  createData(121, 170410107094, "16BECEG079", "alex Patel", "2/1/1999"),
  createData(122, 170410107095, "16BECEG099", "Patel", "2/1/1999"),
  createData(123, 160410107093, "16BECEG059", "Shivam Patel", "1/1/1999"),
  createData(1124, 170410107093, "16BECEG069", "vam Patel", "2/1/1999"),
  createData(125, 170410107094, "16BECEG079", "alex Patel", "2/1/1999"),
  createData(16, 170410107095, "16BECEG099", "Patel", "2/1/1999"),
];

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const headCells2 = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Dessert (100g serving)",
  },
  { id: "calories", numeric: true, disablePadding: false, label: "Calories" },
  { id: "fat", numeric: true, disablePadding: false, label: "Fat (g)" },
  { id: "carbs", numeric: true, disablePadding: false, label: "Carbs (g)" },
  { id: "protein", numeric: true, disablePadding: false, label: "Protein (g)" },
];
const headCells = [
  {
    id: "Sr",
    numeric: true,
    disablePadding: true,
    label: "Sr",
  },
  {
    id: "Enrollment",
    numeric: true,
    disablePadding: false,
    label: "Enrollment",
  },
  {
    id: "CollegeID",
    numeric: false,
    disablePadding: false,
    label: "College ID",
  },
  { id: "Name", numeric: false, disablePadding: false, label: "Name" },
  {
    id: "BirthDate",
    numeric: false,
    disablePadding: false,
    label: "Birth Date",
  },
  {
    id: "Preview",
    numeric: false,
    disablePadding: false,
    label: "Preview",
  },
  {
    id: "Edit",
    numeric: false,
    disablePadding: false,
    label: "Edit",
  },
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    margin: theme.spacing(1),
  },
  table: {
    minWidth: 650,
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected, data, handlerDelete, modalHandler } = props;

  const { sendOpen, open, handleOpen, handleClose } = modalHandler;

  console.log(data);

  // const handlerDelete = () => {
  //   rows = rows.filter(row => data.indexOf(row.Sr) < 0);
  //   // const data = rows.filter(row => data.includes(row.Sr));

  //   console.log("data", rows);
  // };

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle">
          Players
        </Typography>
      )}

      {numSelected > 0 ? (
        <>
          <Tooltip title="Delete" onClick={() => handleOpen("delete")}>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h2 id="transition-modal-title">Delete ?</h2>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  onClick={handlerDelete}
                >
                  Yes
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={handleClose}
                >
                  No
                </Button>
              </div>
            </Fade>
          </Modal>

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => handleOpen("send")}
          >
            View
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={sendOpen}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={sendOpen}>
              <div className={classes.paper}>
                <TableContainer
                  component={Paper}
                  style={{ maxHeight: "600px" }}
                >
                  <Table
                    className={classes.table}
                    size="small"
                    aria-label="a player table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>Sr.</TableCell>
                        <TableCell align="right">Enrollment</TableCell>
                        <TableCell align="right">Name</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((player) => {
                        return (
                          <TableRow key={player.Sr}>
                            <TableCell align="right">{player.Sr}</TableCell>
                            <TableCell align="right">
                              {player.Enrollment}
                            </TableCell>
                            <TableCell align="right">{player.Name}</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Fade>
          </Modal>

          {/* <Tooltip title="Delete" onClick={handleOpen}>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h2 id="transition-modal-title">Delete ?</h2>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  onClick={handlerDelete}
                >
                  Yes
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={handleClose}
                >
                  No
                </Button>
              </div>
            </Fade>
          </Modal> */}
        </>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

const EnhancedTable = ({ datas, handleSinglePlayer, handleEdit }) => {
  const classes = useStyles();
  const [rows, setRows] = React.useState(datas);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // modal
  const [open, setOpen] = React.useState(false);
  const [sendOpen, setSendOpen] = React.useState(false);

  const [search, setSearch] = React.useState("");
  // console.log(search);

  React.useEffect(() => {
    setRows(datas);
  }, [datas]);
  // console.log(rows);

  // const exData = rows2.filter(row =>
  //   row.Enrollment.toString().includes(search.toString())
  // );
  // const exData = rows2.filter(row =>
  //   row.Name.toUpperCase().includes(search.toUpperCase())
  // );

  // React.useEffect(() => {
  //   setRows(exData);
  // }, [search]);

  const handleOpen = (name) => {
    if (name == "delete") {
      setOpen(true);
    } else if (name == "send") {
      setSendOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSendOpen(false);
  };

  const modalHandler = {
    open,
    handleOpen,
    handleClose,
    sendOpen,
  };
  // end modal

  const handlerDelete = () => {
    const bodyData = data.map((id) => id.id);

    console.log(bodyData);

    axios
      .delete("/player/deletemany", { data: bodyData })
      .then((response) => {
        let updateRows = rows.filter((row) => selected.indexOf(row.Sr) < 0);
        let newUpdateRows = updateRows.map((row, i) => {
          row.Sr = ++i;
          return row;
        });
        setRows(newUpdateRows);
        setSelected([]);
        alert("The file is successfully deleted");
        setPage(0);
      })
      .catch((error) => {
        alert("not Deleted Error!!");
        console.log(error.response);
      });
    setOpen(false);
    // const data = rows.filter(row => data.includes(row.Sr));

    // console.log("data", rows);
  };

  // const data = rows.filter(row => selected.indexOf(row.Sr) >=0);
  // console.log(data);

  // selected item store in data
  const data = rows.filter((row) => selected.includes(row.Sr));
  console.log(data);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.Sr);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, row) => {
    const selectedIndex = selected.indexOf(row.Sr);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, row.Sr);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
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

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Search rows={rows} />
      <Paper className={classes.paper}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          data={data}
          handlerDelete={handlerDelete}
          modalHandler={modalHandler}
        />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
          >
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
              {stableSort(rows, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.Sr);

                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.Sr}
                      </TableCell>
                      <TableCell align="right">{row.Enrollment}</TableCell>
                      <TableCell align="right">{row.CollegeID}</TableCell>
                      <TableCell align="right">{row.Name}</TableCell>
                      <TableCell align="right">{row.BirthDate}</TableCell>
                      <TableCell align="right" style={{ cursor: "pointer" }}>
                        {/* onClick={() => handleSinglePlayer(row.id)} */}
                        <Link to={"/player/" + row.id}>
                          <VisibilityIcon />
                        </Link>
                      </TableCell>
                      <TableCell
                        align="right"
                        onClick={() => handleEdit(row.id)}
                        style={{ cursor: "pointer" }}
                      >
                        {" "}
                        <Link to={"/editplayer/" + row.id}>
                          <CreateOutlinedIcon />
                        </Link>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
};

export default EnhancedTable;
