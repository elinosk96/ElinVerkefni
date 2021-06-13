import HeaderCard from "./HeaderCard";

import "./Header.css";

const Header = (props) => {
  return (
    <div className="top container row">
      <HeaderCard>
        <h3>
          Money: <span>Kr. {props.money},-</span>
        </h3>
      </HeaderCard>
      <HeaderCard>
        <h3>
          Next Plan: <span>{props.plan} days left</span>
        </h3>
      </HeaderCard>
    </div>
  );
};

export default Header;
