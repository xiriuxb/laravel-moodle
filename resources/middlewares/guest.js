export default function guest(req, res, next) {
  if (req.user) {
    return res.redirect('/');
  }
  return next();
}