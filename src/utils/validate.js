const checkValidData = (email, pwd, name) => {
  const isEmailValid = /^[A-Za-z0-9._+\-']+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
    email
  );
  const isPwdValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(pwd);
  const isNameValid = /^[a-zA-Z\\s]*$/.test(name);

  if (!isEmailValid) return "Email is not valid";
  if (!isPwdValid) return "Password is incorrect";
  if (!isNameValid) return "Not a valid name";

  return null;
};

export default checkValidData;
