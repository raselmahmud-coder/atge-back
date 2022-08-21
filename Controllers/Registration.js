const bcrypt = require("bcrypt");
const { userCollection } = require("..");
const Registration = async (req, res, next) => {
try {
    const { userName, email, password } = req.body;
    const passHashing = await bcrypt.hash(password, 10);
    const createObj = {
      userName,
      email,
      password: passHashing,
    };
    console.log(createObj);
    // await userCollection.insertOne(createObj);
    // res.send({ response: "success", status: 200 });
} catch (error) {
    console.log("registration error"+error);
}
};

module.exports = { Registration };
