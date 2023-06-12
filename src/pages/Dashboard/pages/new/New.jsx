import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const New = ({ inputs, title }) => {
 
  const rows = [
    {
      id: 1,
      title: "studio",
      category: "Apartment",
      description: "2 rooms and a balcony",
    },
    {
      id: 2,
      title: "studio",
      category: "Apartment",
      description: "2 rooms and a balcony"
    },
  ];
  
  const [file, setFile] = useState("");

  return (
    <div className="new">
    <Sidebar />
    <div className="newContainer">
      <Navbar />
      <div className="top">
        <h1>{title}</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
        </div>
        <div className="right">
          <form>
            <div className="formInput">
              <label htmlFor="file">
                Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>

            {inputs.map((input) => (
              <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
            ))}
            <button>Send</button>
          </form>

       <span>
    <TableContainer component={Paper} className="table">
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell className="tableCell">Id</TableCell>
            <TableCell className="tableCell">Title</TableCell>
            <TableCell className="tableCell">Category</TableCell>
            <TableCell className="tableCell">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell className="tableCell">{row.id}</TableCell>
                      <TableCell className="tableCell">{row.title}</TableCell>
                      <TableCell className="tableCell">{row.category}</TableCell>
                      <TableCell className="tableCell">{row.description}</TableCell>
                    </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </span>
   
    </div>
  </div>
      </div>
    </div>
);
};


export default New;