import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, trackingId,date, status) {
    return {name, trackingId, date, status}
}
const rows = [
    createData('Phi Hoan', 89212111, '20 May 2002', 'Approved'),
    createData('Nhut Tan', 81212131, '6 June 2002', 'Pending'),
    createData('Dang Khoa', 84212211, '19 March 2002', 'Approved'),
    createData('Hong Son', 21212123, '18 May 2002', 'Delivered'),
]
const makeStyle=(status) =>{
    if(status==='Approved'){
}