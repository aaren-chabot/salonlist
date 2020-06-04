const imageUrlValidator = (v) => {
  return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(v);
};

const phoneValidator = (v) => {
  return /\d{3}-\d{3}-\d{4}/.test(v);
};

module.exports = {
  imageUrlValidator,
  phoneValidator
};
