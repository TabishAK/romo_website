import { emphasize, withStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import HomeIcon from "@material-ui/icons/Home";
import Chip from "@material-ui/core/Chip";
import "./breadcrumbs.scss";
import React from "react";
import { useLocation } from "react-router-dom";

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.grey[300],
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function CustomizedBreadcrumbs() {
  const location = useLocation();
  const slug = location.pathname.split("/");
  console.log(slug);
  return (
    <div className="breadcrumbs">
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          label="Home"
          icon={<HomeIcon fontSize="small" />}
          onClick={handleClick}
        />
        {slug.map((s, i) =>
          i === 0 ? "" : <StyledBreadcrumb label={s} onClick={handleClick} />
        )}
      </Breadcrumbs>
    </div>
  );
}
