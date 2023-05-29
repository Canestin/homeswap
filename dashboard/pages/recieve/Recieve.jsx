import React, { useState } from "react";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./recieve.scss";
import { Link } from "react-router-dom";

const Recieve = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      email: "sender1@example.com",
      message: "Hello, I have a question.",
    },
    {
      id: 2,
      email: "sender2@example.com",
      message: "Can you help me with this issue?",
    },
  ]);

  const handleDeleteClick = (messageId) => {
    setMessages((prevMessages) =>
      prevMessages.filter((message) => message.id !== messageId)
    );
  };

  const handleReplyClick = (messageId) => {
    console.log("Reply clicked for message with ID:", messageId);
  };

  return (
    <div className="Recieve">
      <Sidebar />
      <div className="recieveContainer">
        <Navbar />
        <div className="tableContainer">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Message</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {messages.map((message) => (
                  <TableRow key={message.id}>
                    <TableCell>{message.id}</TableCell>
                    <TableCell>{message.email}</TableCell>
                    <TableCell>{message.message}</TableCell>
                    <TableCell>
                    <Link to="/Notification" style={{ textDecoration: "none" }}>
                      <Button
                        variant="outlined"
                        onClick={() => handleReplyClick(message.id)}
                      >
                        Reply
                      </Button>
                      </Link>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => handleDeleteClick(message.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Recieve;
