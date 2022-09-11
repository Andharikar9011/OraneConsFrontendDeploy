import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
// import Typography from '@mui/material/Typography';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Footcard() {
  return (
    <Card sx={{ maxWidth: 259 }} className="footercard">
      <CardContent>
        <h1 className="f_cardheading">
          We’re hiring ! Learn about careers at Orane
        </h1>
        <div className="f_cardButton">
          <h3>Explore careers</h3>
          <ArrowForwardIcon className="f_cardIcon" />
        </div>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      <div className="f_cardBottomLine"></div>
    </Card>
  );
}
