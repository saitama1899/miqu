const REGEX = {
  name: /^(?=.{2,25})^[a-zA-Z\-]+$/,
  username: /^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
  password: /^(?=.{5,20}$)/,
  email: /^(?=.{2,25}$)/
}

const validateInputString = (value, type) => {
  console.log(REGEX[type]);
  const regex = new RegExp(REGEX[type])
  if (value && regex.test(value)) {
    console.log(true);
    return true
  } else {
    console.log(false);
    return false
  }
}

export { validateInputString }