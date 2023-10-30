import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import footer from "../img/footer.png";
import google_play from "../img/google_play.png";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import shadows from "@mui/material/styles/shadows";

const buttonStyle = {
  display: "inline-flex", // Ensure the button contains its contents
  padding: "0px",
  color: "white",
  marginRight: "20px",
};

const avatarStyle = {
  width: "50%",
  height: "50%", // Set the width of the Avatar to 100% to fill the button
};

const cardStyle = {
    height: "400px",
    width: "350px",
    marginRight: "100px",
  };
  
  const imageStyle = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    objectPosition: "center",
  };

export default function FooterComponent() {
  return (
    <>
      <Card
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          borderTopLeftRadius: "200px",
          borderBottomRightRadius: "200px",
          margin: "100px",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Box>
          <Box>
            <Typography
              style={{
                // position: "absolute",
                fontWeight: "700",
                fontSize: "40px",
                lineHeight: "72px",
                width: "451px",
                height: "72px",
                // left: "94px",
                // marginLeft:"20px"
                textAlign: "center",
              }}
            >
              Download our app
            </Typography>
          </Box>
          <Box sx={{ rowGap: "5px" }}>
            <Button variant="contained" style={buttonStyle}>
              <Avatar
                src={google_play}
                alt="Image 1"
                variant="rounded"
                style={{ ...avatarStyle, marginRight: 8 }}
              />
            </Button>
            <Button variant="contained" style={buttonStyle}>
              <Avatar
                src={google_play}
                alt="Image 1"
                variant="rounded"
                style={{ ...avatarStyle, marginRight: 8 }}
              />
            </Button>
          </Box>
        </Box>
        <Card sx={cardStyle}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={footer}
              alt="green iguana"
              sx={imageStyle}
            />
          </CardActionArea>
        </Card>

        {/*

               

        {/* <CardActionArea>
                    <CardMedia
                        component="img"
                        height="400"
                        image={footer}
                        alt="green iguana"
                    />
                </CardActionArea> */}
      </Card>
    </>
  );
}
