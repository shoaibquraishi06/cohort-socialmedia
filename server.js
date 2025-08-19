require("dotenv").config();
const cors = require("cors");

const app = require("./src/app");
const connectDB = require("./src/db/db");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH,",
  credential: true,
};

app.use(cors(corsOptions));

connectDB();

app.listen(3000, () => {
  console.log("Running on port 3000");
});
