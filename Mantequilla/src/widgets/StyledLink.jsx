import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function StyledLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <div className={match ? "active" : ""}>
      {match && " > "}
      <Link to={to}>{label}</Link>
    </div>
  );
}

export default StyledLink;
