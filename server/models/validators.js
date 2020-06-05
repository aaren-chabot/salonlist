const imageUrlValidator = (v) => {
  return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(v);
};

const phoneValidator = (v) => {
  return /\d{3}-\d{3}-\d{4}/.test(v);
};

const openCloseValidator = (v) => {
  return v.open < v.close;
};

const postalZipValidator = (v) => {
  if (v.country === 'Canada') {
    return /^[A-Z]\d[A-Z][ -]?\d[A-Z]\d$/.test(v.zip);
  }
  if (v.country === 'USA') {
    return /^[0-9]{5}(?:-[0-9]{4})?$/.test(v.zip);
  }
};

module.exports = {
  imageUrlValidator,
  phoneValidator,
  openCloseValidator,
  postalZipValidator
};
