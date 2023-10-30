import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import image1 from "../img/Rectangle 9.png";
import image2 from "../img/dining_2_image.png";
import image3 from "../img/dining_3_image.png";
import Box from "@mui/material/Box";

function Component({ image }) {
  return (
    <Card
      Style={{
        display:"flex",
        flexDirection:"column",
        height: "200px",
        width: "300px",
        borderRadius: "8px",
        
      }}
    >
      <CardMedia
        component="img"
        height="126"
        image={image}
        alt="green iguana"
      />
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          height: "74px",
          justifyContent: "flex-start",
          margin: "10px",
        }}
      >
        <Typography
          style={{
            width: "94px",
            height: "24px",
            fontWeight: "400",
            size: "16px",
            lineHeight: "24px",
            color: "background: rgba(0, 0, 0, 1)",
          }}
        >
          Dinning out
        </Typography>
        <Typography
          style={{
            height: "21px",
            fontWeight: "300",
            size: "14px",
            lineHeight: "21px",
            color: "background: rgba(0, 0, 0, 1)",
          }}
        >
          Explore curated lists of top restaurants,
        </Typography>
      </Box>
    </Card>
  );
}

export default function Dining_component() {
  return (
    <Box className="card_component" sx={{ overflowX: "auto" , margin:"0px 150px 0px 150px", justifyContent:"flex-start", paddingLeft:"20px"}} >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "50px",
          alignItems: "center",
          whiteSpace: "nowrap", // Prevents cards from wrapping
          alignItems:"center",
          marginBottom:"20px"
        }}
      >
        <Component image={image1} />
        <Component image={image2} />
        <Component image={image3} />
        <Component image={image1} />
        <Component image={image2} />
        <Component image={image3} />
        <Component image={image3} />
        <Component image={image1} />
        <Component image={image2} />
        <Component image={image3} />
        <Component image={image3} />
        <Component image={image1} />
        <Component image={image2} />
        <Component image={image3} />
      </Box>
    </Box>
  );
}


