import * as React from "react";
import { useState } from "react";
import AddCardIcon from "@mui/icons-material/AddCard";
import QRCode from "react-qr-code";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { QrCode } from "@mui/icons-material";

const Funds = ({ fund, user }) => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = React.useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="post">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Scan QR CODE TO PAY
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <QRCode
              size={100}
              bgcolor="white"
              fgcolor="black"
              value="This is a value"
            />
          </Typography>
        </Box>
      </Modal>
      <div className="post_header">
        <div
          className="fund_header_right hover1"
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="post_text">
            {fund.name} <br />
            {fund.description}
          </div>
          <div className="post_text">
            <strong> Fund to pay: ${fund.price}</strong>
          </div>
          <div className="ml-3">
            <button class="button-4">
              <AddCardIcon />
              <Button onClick={handleOpen}>Pay Now!</Button>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
