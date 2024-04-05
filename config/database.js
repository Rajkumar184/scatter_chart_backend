const colors = require("colors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const DB = process.env.DATABASE;

mongoose.set('strictQuery', false);

mongoose
  .connect(DB, {
    writeConcern: {
      w: 'majority',
      j: true,
      wtimeout: 1000
    }
  })
  .then((res) => console.log("> Database Connected Sucessfully...".bgCyan))
  .catch((err) =>
    console.log(
      `> Error while connecting to mongoDB : ${err.message}`.underline.red
    )
  );
