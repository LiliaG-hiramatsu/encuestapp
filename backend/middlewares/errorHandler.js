export default function(err, res) {
  return res.status(500).json({
    success: false,
    message: err.message,
    response: null
  })  
}