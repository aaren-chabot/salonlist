// https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

module.exports = errorMessages = {
  _401: 'Unauthorized for that route.',
  _402: 'Password and email do not match.',
  _403: 'Email not found, please register or try a different email.',
  _404:
    'Not Found: The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.',
  _503:
    'Service Unavailable: The server cannot handle the request (because it is overloaded or down for maintenance). Generally, this is a temporary state.'
};
