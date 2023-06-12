import "./table.scss"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const List = () => {
  const rows = [
    {
      bookingId: 2342355,
      memberId: 45478888,
      date: "1 March",
      checkinTime:"18h",
      checkoutTime: "Online",
      no_people: "2",
      no_pets: "1",
      status:"Approved",
    },
    {
      bookingId: 686355,
      memberId: 490888,
      date: "1 March",
      checkinTime:"18h",
      checkoutTime: "12h",
      no_people: "10",
      no_pets: "5",
      status:"Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Booking ID</TableCell>
            <TableCell className="tableCell">Member ID</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Checkin Time</TableCell>
            <TableCell className="tableCell">Checkout Time</TableCell>
            <TableCell className="tableCell">No_People</TableCell>
            <TableCell className="tableCell">No_pet</TableCell>
            <TableCell className="tableCell">status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.bookingId}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  {row.memberId}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.checkinTime}</TableCell>
              <TableCell className="tableCell">{row.checkoutTime}</TableCell>
              <TableCell className="tableCell">{row.no_people}</TableCell>
              <TableCell className="tableCell">{row.no_pets}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List
