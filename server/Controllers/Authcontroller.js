exports.Createuser = (req, res) => {
  res.status(201).send("user Created");
};
exports.Loguser = (req, res) => {
  res.status(200).send("user logged in");
};

