/*  // user get or login
 app.get("/login", verifyJWT, async (req, res) => {
    const { email, password } = req.headers;
    console.log(email, "got it", password);
    // const user = req.body;
    const filter = { email: email };
    const found = await userCollection.findOne(filter);
    //   console.log(found);
    if (found.email === email && found.password === password) {
      console.log("info true");
      const token = jwt.sign(
        { email: email },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "1d",
        },
      );
      res.send({ response: "success", status: 200, token });
    } else {
      res.send({ response: "not found user", status: 400 });
    }
  }); */