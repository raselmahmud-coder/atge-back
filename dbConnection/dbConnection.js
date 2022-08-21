const express = require("express");

const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
const { Registration } = require("../Routers/Registration");
const uri = `${process.env.URI}`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});


async function runDB() {
    try {
      client.connect((err) => {
        if (err) {
          console.log("database error" + err);
        }
        console.log("connected");
      });
      const userCollection = client.db("ATG_DB").collection("users");
      module.exports = { userCollection };
     
      // user creation
      app.post("/registration", Registration);
    } catch (error) {
      console.log("error happen " + error);
    }
  }



module.exports = { runDB };
