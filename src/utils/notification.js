import { Notyf } from "notyf";

const Notification = new Notyf({
  duration: 5000,
  position: {
    x: "center",
    y: "top",
  },
});

export default Notification;
