import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}
const rows = [
  createData("Phi Hoan", 89212111, "20 May 2002", "Approved"),
  createData("Nhut Tan", 81212131, "6 June 2002", "Pending"),
  createData("Dang Khoa", 84212211, "19 March 2002", "Approved"),
  createData("Hong Son", 21212123, "18 May 2002", "Delivered"),
];
const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Recent Orders</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029"}}
      >
      <Table sx={{minWidth: 650}} aria-label ='simple table'>
        <TableHead>
            <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align = 'left'>Tracking ID</TableCell>
                <TableCell align = 'left'>Date</TableCell>
                <TableCell align = 'left'>Status</TableCell>
                <TableCell align = 'left'></TableCell>
            </TableRow>
        </TableHead>
        <TableBody style={{color:'white'}}>
            {row}
        </TableBody>
      </Table>
      </TableContainer>
    </div>
  );
}
