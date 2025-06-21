export default function(req, res) {
  return res.status(404).json({
    success: false,
    message: 'Not found ' + req.method + ' ' + req.url,
    respnse: null
  })
}