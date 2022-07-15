exports.notFound = async (req, res) => {
  return res.status(404).json({
    status: "fail",
    msg: `Route: ${req.url} has not been found`,
  })
}
