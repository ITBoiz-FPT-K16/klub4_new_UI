import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useSelector } from "react-redux";
import moment from "moment";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Event = ({ event, user }) => {
  const [open, setOpen] = React.useState(false);
  const [displayEvent, setDisplayEvent] = React.useState([{}]);

  const handleOpen = (info) => {
    setDisplayEvent({
      title: info.event.title,
      location: info.event.extendedProps.location,
      start: moment(info.event.start).format("DD/MM/YYYY"),
      end: moment(info.event.end).format("DD/MM/YYYY"),
    });
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const events = useSelector((state) => state.state.event);

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

  const infoEvents = events.map((event) => ({
    title: event.name,
    location: event.location,
    start: moment(event.timeStart, "DD/MM/YYYY").format("YYYY-MM-DD"),
    end: moment(event.timeEnd, "DD/MM/YYYY").format("YYYY-MM-DD"),
    backgroundColor: "#1D5B79",
    borderColor: "#ffffff",
  }));
  console.log(infoEvents);
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
            {displayEvent.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Location: {displayEvent.location} <br />
            Time: {displayEvent.start} <br />
          </Typography>
        </Box>
      </Modal>

      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={infoEvents}
        headerToolbar={{
          start: "title",
          center: "",
          end: "prev,next",
        }}
        eventDidMount={(info) => {
          console.log(info);

          info.el.style.cursor = "pointer";

          info.el.addEventListener("click", () => {
            console.log(info.event);
            handleOpen(info);
          });

          info.el.addEventListener("mouseover", () => {
            info.el.style.backgroundColor = "#1D5B79";
            info.el.style.color = "#1D5B79";
          });

          info.el.addEventListener("mouseout", () => {
            info.el.style.backgroundColor = "#1D5B79";
            info.el.style.color = "#ffffff";
          });
        }}
      />
    </div>
  );
};

export default Event;
