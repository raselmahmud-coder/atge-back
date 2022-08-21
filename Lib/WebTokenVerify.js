/* //  auth verify function using Json web token
function verifyJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    //   console.log(req?.headers, "headers");
    if (!authHeader) {
      return res.status(401).send({ message: "Unauthorized access request" });
    }
    const token = authHeader.split(" ")[1];
    // console.log("token",token);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      // console.log("error", err);
      if (err) {
        return res.status(403).send({ message: "Forbidden access" });
      } else {
        //   console.log("deCoded", decoded);
        req.decoded = decoded;
        next();
      }
    });
  }
   */