import Cookie from "cookie-universal";
const cookies = Cookie();

const isloggedin = () => {
  const token = cookies.get("eff_customer");
  return token ? true : false;
};

export { isloggedin };
