module.exports = developmentLogger = (req, res, next) => {
  if (Object.keys(req.body).length > 1)
    console.log('\x1b[33m%s\x1b[0m', 'BODY:', req.body);
  if (Object.keys(req.params).length > 1)
    console.log('\x1b[33m%s\x1b[0m', 'PARAMS:', req.params);
  if (Object.keys(req.query).length > 1)
    console.log('\x1b[33m%s\x1b[0m', 'QUERY:', req.query);
  console.log(
    '\x1b[33m%s\x1b[0m',
    `Received a ${req.method} request to ${req.url}`
  );
  next();
};
