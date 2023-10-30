import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import image1 from "../img/Rectangle 9.png";
import image2 from "../img/Rectangle 7.png";
import chiken_noodles from "../img/chiken_noodles.svg";
import french_friesh from "../img/french_fries.svg";
import avocado from "../img/avacadomin.svg";
import rectangle_big from "../img/reactangle_big_pizza.png";
import fullpizza from "../img/fullpizza.png";
import burger_offfer from "../img/burger_offfer.png";

import desert_icecream from "../img/desert_icecream.png";
import vegetables_icecream from "../img/vegetables_icecream.png";
import frame2 from "../img/Frame 2.png";
import FooterComponent from "./footer";

import Box from "@mui/material/Box";

import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import Popular_reciep from "./popular_reciep";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Main_header from "./main_component";
import Dining_component from "./Dining_Component";

const cardStyle = {
  width: "246px", // Set the width to 246px
  height: "317px", // Set the height to 317px
};

const RoundedCardMedia = styled(CardMedia)({
  borderRadius: "100%", // Make the image area round
  width: "140px",
});

const image3 = { image2 };

function MyGrid() {
  return (
    <Grid
      container
      spacing={10}
      justifyContent="center"
      alignItems="center"
      style={{ paddingTop: "20px" }}
    >
      <Grid item>
        <Card
          sx={{ maxWidth: 345 }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "none",
          }}
        >
          <RoundedCardMedia
            component="img"
            height="140"
            image={chiken_noodles}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6">
              Chicken Noodles
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card
          sx={{ maxWidth: 345 }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "none",
          }}
        >
          <RoundedCardMedia
            component="img"
            height="140"
            image={french_friesh}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6">
              French Fries
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card
          sx={{ maxWidth: 345 }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "none",
          }}
        >
          <RoundedCardMedia
            component="img"
            height="140"
            image={avocado}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              color="#000"
              variant="h6"
              font-family="Poppins"
              font-size="20px"
              font-style="normal"
              font-weight="600"
              line-height="normal"
              text-transform="capitalize"
            >
              Avacado Mint Noodles
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

function CardComponent({ gridsize, image }) {
  return (
    <>
      <Grid item xs={gridsize} className="cardAction_area">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
}

export default function ActionAreaCard() {
  return (
    <>
      <Box>
        <Main_header />
        <Dining_component />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            margin: "40px",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="#FFC200"
            fontFamily="Poppins" // Use valid CSS syntax for font-family
            fontSize="48px" // Use valid CSS syntax for font-size
            fontStyle="normal" // Use valid CSS syntax for font-style
            fontWeight="700" // Use valid CSS syntax for font-weight
            lineHeight="normal" // Use valid CSS syntax for line-height
            textTransform="uppercase" // Use valid CSS syntax for text-transform
          >
            our best delivered cuisines
          </Typography>

          <Typography
            gutterBottom
            variant="h6"
            component="div"
            color="#000"
            fontFamily="Poppins" // Use valid CSS syntax for font-family
            fontSize="16px" // Use valid CSS syntax for font-size
            fontStyle="normal" // Use valid CSS syntax for font-style
            fontWeight="400" // Use valid CSS syntax for font-weight
            lineHeight="normal" // Use valid CSS syntax for line-height
            textTransform="lowercase" // Use valid CSS syntax for text-transform
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </Typography>
        </Box>

        <MyGrid />
        <Popular_reciep />

         <Grid item xs={12} sx={{ paddingTop: "10px", paddingBottom: "100px"}}>
        <Card sx={{ height: "400px", position:"relative" }}>
          <CardMedia
            component="img"
            height="400"
            image={rectangle_big}
            alt="green iguana"
          />
        
        <Typography
          style={{
            width: "570px",
            fontWeight: "700",
            fontSize: "48px",
            height: "144px",
            position:"absolute",
            top:"30px",
            left: "70px",
            color: "white",
          }}
        >
          Fastest food{" "}
          <Typography
            style={{
              
              width: "570px",
              fontWeight: "700",
              fontSize: "48px",
              color: "#FFC200",
              
            }}
          >
            delivery
          </Typography>{" "}
          in the town
        </Typography>
        </Card>
      </Grid>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding:"40px"
          }}
        >
          <Box
            sx={{
              // top: "3331px",
              // position: "absolute",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "40px",
              // width:"100%"
            }}
          >
            <Card
              style={{
                // position:"absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "350px",
                height: "310px",
                // top: "3331px",
                // left: "278px",
                borderRadius: "17px",
                margin: "20px",
                position:"relative"
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="310"
                  image={burger_offfer}
                  alt="green iguana"
                />
              </CardActionArea>
              <Typography
                style={{
                  position: "absolute",
                  width: "570px",
                  fontWeight: "700",
                  fontSize: "48px",
                  height: "144px",
                  top: "40px",
                  left: "20px",
                  color: "white",
                }}
              >
                Buy 2 get1
                <br /> free
              </Typography>
            </Card>
            <Card
              style={{
                display: "flex",
                flexFlow: "column",
                boxShadow: "none",
                gap: "0",
              }}
            >
              <Card
                style={{
                  width: "300px",
                  height: "150px",
                  top: "3331px",
                  left: "278px",
                  borderRadius: "17px",
                  margin: "20px 20px 0 20px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="150"
                    image={desert_icecream}
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>

              <Card
                style={{
                  width: "300px",
                  height: "150px",
                  top: "3331px",
                  left: "278px",
                  borderRadius: "17px",
                  margin: "10px 20px 20px 20px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="150"
                    image={vegetables_icecream}
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Card>
          </Box>
        </Box>

        <Box
        style={{
          display: "flex",
          flexFlow: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
          // top: "4140px",
          // left: "107px",
        }}
      >
        <Card
          style={{
            width: "1481px",
            height: "500px",
            borderRadius: "17px",
            margin: "20px",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="500px"
              image={frame2}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
      </Box>

        <FooterComponent />
      </Box>
    </>
  );
}
