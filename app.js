const express = require("express");
const cors = require("cors");
const contactRouter = require("./app/routes/contact.route");
const ApiError = require("./app/api-error");

const app = express();

app.use(cors());             
app.use(express.json());     
app.use("/api/contacts", contactRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

// handle 404 response
app.use((req, res, next) =>{
    return next(new ApiError(404, "Resource not found"));
});
app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({
        message: err.message || "Internal Server Error",
    });
});

module.exports = app;
