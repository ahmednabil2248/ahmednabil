import { Link } from "react-scroll";

const Scroll = ({ children, ...rest }) => {
  return (
    <>
      <Link {...rest}>{children}</Link>
    </>
  );
};

export default Scroll;
