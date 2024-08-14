export const isEmpty = (value) => {
  if (!value) {
    console.log("isEmpty: ", true);
    return true;
  }
  console.log("isEmpty: ", false);
  return false;
};

export const isEmail = (email) => {
  const re =
    // eslint-disable-next-line
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const isMinLength = (str, min) => {
  if (str.length < min) {
    return true;
  }
  return false;
};

export const isMaxLength = (str, max) => {
  if (str.length > max) {
    return true;
  }
  return false;
};

export const isMatch = (str, cf_str) => {
  if (str === cf_str) {
    return true;
  }
  return false;
};
