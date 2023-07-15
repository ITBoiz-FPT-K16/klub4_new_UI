const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fileUpload = require("express-fileupload");
const connectToMongo = require("./db/db");
const { readdirSync } = require("fs");
const userRoutes = require("./routes/userRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const postRoutes = require("./routes/postRoutes");
const PORT = 5001;
dotenv.config();
const app = express();
app.use(express.json());
const options = {
  origin: ["http://localhost:3000", "https://facebook-clone93.vercel.app"],
  useSuccessStatus: 200,
};
app.use(cors(options));
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
connectToMongo();
app.use("/", userRoutes);
app.use("/", uploadRoutes);
app.use("/", postRoutes);

app.listen(process.env.PORT || PORT, () => {
  console.log("server connected succesfully");
});
