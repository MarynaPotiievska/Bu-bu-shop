import { Link } from "react-router-dom";

import { ReactComponent as FbIcon } from "assets/icons/facebook.svg";
import { ReactComponent as InstIcon } from "assets/icons/instagram.svg";
import { ReactComponent as YtIcon } from "assets/icons/youtube.svg";

const SocialLinks = (socUl) => {
  return (
    <ul className={socUl.style}>
      <li>
        <Link to="/">
          <InstIcon />
        </Link>
      </li>
      <li>
        <Link to="/">
          <YtIcon />
        </Link>
      </li>
      <li>
        <Link to="/">
          <FbIcon />
        </Link>
      </li>
    </ul>
  );
};

export default SocialLinks;
