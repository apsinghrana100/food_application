import React from "react";
import Box from "@mui/material/Box";
import { CardContent, CardMedia, Typography } from "@mui/material";
import p1 from "./../img/menu_image/Ellipse 1.png";
import p2 from "./../img/menu_image/Ellipse 2.png";
import p3 from "./../img/menu_image/Ellipse 3.png";
import p4 from "./../img/menu_image/Ellipse 4.png";
import p5 from "./../img/menu_image/Ellipse 5.png";

import w1 from "./../img/menu_image/wadapav.png";
import w2 from "./../img/menu_image/panipuri.png";
import w3 from "./../img/menu_image/paavbaji.png";
import w4 from "./../img/menu_image/wadapav.png";
import w5 from "./../img/menu_image/panipuri.png";
import w6 from "./../img/menu_image/paavbaji.png";

import { Link, useNavigate } from "react-router-dom";

import f1 from "./../img/menu_image/footer.png"

import Card from "@mui/material/Card";
import NavBar  from "../component/navbar";

function CardImage({ image }) {
    const navigate= useNavigate();
    const handleClick = (id) => {
        // Your click event logic here
        alert(id); // Example: Show an alert on click
        navigate(`/menudetails/${2}`)
      };
  return (
    <>
      <Card
        sx={{
          height: "200px",
          width: "150px",
          margin: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0,
          padding: "10px",
          boxShadow: "none",
          
        }}
      >

        <CardMedia
         itemID="124"
          component="img"
          height="150"
          maxWidth="100%" // Set a maximum width for the image
          maxHeight="100%"
          image={image}
          alt="Paella dish"
          onClick={() => handleClick("123")} // Add the onClick event handler
          style={{ cursor: 'pointer', borderRadius:"10px" }}
        />
        <CardContent sx={{ margin: "2px" }}>
          <Typography sx={{ fontWeight: "600" }}>La Pino'z Pizza</Typography>
        </CardContent>
      </Card>
    </>
  );
}

function WeatherImage({ image }) {
  return (
    <>
      <Card
        sx={{
          height: "259px",
          width: "325px",
          margin: "10px",
          //   display: "flex",
          //   flexDirection: "column",
          //   justifyContent: "s",
          //   alignItems: "center",
          flexShrink: 0,
          padding: "10px",
          boxShadow: "none",
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="Paella dish"
        />
        <CardContent
          sx={{
            margin: "2px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Typography sx={{ fontWeight: "600" }}>Vadapav</Typography>
          <Typography sx={{ fontWeight: "100" }}>20 Min</Typography>
        </CardContent>
      </Card>
    </>
  );
}

function FooterImage({ image }) {
  return (
    <>
      <Card
        sx={{
          height: "350px",
          width: "325px",
          margin: "10px",
          //   display: "flex",
          //   flexDirection: "column",
          //   justifyContent: "s",
          //   alignItems: "center",
          flexShrink: 0,
          padding: "10px",
          boxShadow: "none",
          borderRadius:"19px"
        }}
      >
        <CardMedia
          component="img"
          height="350"
          image={image}
          alt="Paella dish"
        />
        {/* <CardContent
          sx={{
            margin: "2px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Typography sx={{ fontWeight: "600" }}>Vadapav</Typography>
          <Typography sx={{ fontWeight: "100" }}>20 Min</Typography>
        </CardContent> */}
      </Card>
    </>
  );
}




export default function Menu() {
   

  return (
    <>
      <Box sx={{ position: "relative" }}>
      <NavBar />
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "32px",
            lineHeight: "48px",
            marginLeft: "120px",
            marginTop: "40px",
          }}
        >
          Top brands for you
        </Typography>
        <Box
          sx={{
            maxWidth: "100%",
            overflowX: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            //   padding: "40px",
            marginRight: "110px",
            marginLeft: "120px",
            marginTop: "20px",
          }}
          className="no_scrollbar"
        >
          {/* <Card
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
              }}
            > */}
          <CardImage image={p1} />
          <CardImage image={p2} />
          <CardImage image={p3} />
          <CardImage image={p4} />
          <CardImage image={p5} />
          <CardImage image={p2} />
          <CardImage image={p3} />
          <CardImage image={p4} />
          <CardImage image={p5} />
          {/* </Card> */}
        </Box>

        <Box>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "32px",
              lineHeight: "48px",
              marginLeft: "120px",
              marginTop: "40px",
            }}
          >
            Food according to Weather
          </Typography>

          <Box
            sx={{
              maxWidth: "100%",
              overflowX: "auto",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              //   padding: "40px",
              marginRight: "120px",
              marginLeft: "120px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
            className="no_scrollbar"
          >
            <WeatherImage image={w1} />
            <WeatherImage image={w2} />
            <WeatherImage image={w3} />
            <WeatherImage image={w4} />
            <WeatherImage image={w5} />
            <WeatherImage image={w6} />
            <WeatherImage image={w1} />
            <WeatherImage image={w2} />
            <WeatherImage image={w1} />
          </Box>

          <Box
            sx={{
              maxWidth: "100%",
              overflowX: "auto",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              //   padding: "40px",
              marginRight: "120px",
              marginLeft: "120px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
            className="no_scrollbar"
          >
            <WeatherImage image={w1} />
            <WeatherImage image={w2} />
            <WeatherImage image={w3} />
            <WeatherImage image={w4} />
            <WeatherImage image={w5} />
            <WeatherImage image={w6} />
            <WeatherImage image={w1} />
            <WeatherImage image={w2} />
            <WeatherImage image={w1} />
          </Box>

          <Box
            sx={{
              maxWidth: "100%",
              overflowX: "auto",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              //   padding: "40px",
              marginRight: "120px",
              marginLeft: "120px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
            className="no_scrollbar"
          >
            <FooterImage image={f1} />
            <FooterImage image={f1} />
            <FooterImage image={f1} />
            <FooterImage image={f1} />
            <FooterImage image={f1} />
            <FooterImage image={f1} />
            <FooterImage image={f1} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
