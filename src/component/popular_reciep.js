import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import image2 from "../img/Rectangle 7.png";
import p1 from "../img/p1.png";
import p2 from "../img/p2.png";
import p3 from "../img/p3.png";
import p4 from "../img/p4.png";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const titleStyle = {
  width: "1135px",
  height: "68px",
  flexShrink: 0,
  color: "#000",
  textAlign: "center",
  fontFamily: "Inter",
  fontSize: "48px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px",
  margin: "60px 0px 0px 0px",
};

const receipStle = {
  color: " #000",
  fontFamily: "Inter",
  fontSize: "16px",
  fontStyle: " normal",
  fontWeight: "600",
  lineHeight: "140 %" /* 25.2px */,
  width: " 144px",
  height: "29px",
  flexShrink: "0",
};

const RoundedCardMedia = styled(CardMedia)({
  borderRadius: "100%", // Make the image area round
  width: "140px",
});

export default function Popular_reciep() {
  return (
    <>
      <Box
        style={{
          // position: "relative",
          // top: "67px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
          margin: "40px",
        }}
      >
        <Typography gutterBottom variant="h6" sx={titleStyle}>
          Popular Recipes
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "60%",
            overflowX: "auto",
            display: "flex",
            justifyContent: "flex-start",
            paddingLeft: "20px",
            // margin: "0px 200px 0px 200px",
          }}
          className="no_scrollbar"
        >
          <Stack
            spacing={6}
            direction="row"
            style={{
              display: "flex",
              flexdiection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              // overflow: "-moz-hidden-unscrollable",
              padding: "20px",
            }}
          >
            <Button
              variant="contained"
              style={{
                borderRadius: "45px",
                background: "#F6B716",
                flexShrink: "0",
                width: "115px",
                height: "45px",
              }}
            >
              PIZZA
            </Button>
            <Button
              variant="contained"
              style={{
                borderRadius: "45px",
                background: "#F6B716",
                flexShrink: "0",
                width: "115px",
                height: "45px",
              }}
            >
              PIZZA
            </Button>
            <Button
              variant="contained"
              style={{
                borderRadius: "45px",
                background: "#F6B716",
                flexShrink: "0",
                width: "115px",
                height: "45px",
              }}
            >
              PIZZA
            </Button>
            <Button
              variant="contained"
              style={{
                borderRadius: "45px",
                background: "#F6B716",
                flexShrink: "0",
                width: "115px",
                height: "45px",
              }}
            >
              PIZZA
            </Button>
            <Button
              variant="contained"
              style={{
                borderRadius: "45px",
                background: "#F6B716",
                flexShrink: "0",
                width: "115px",
                height: "45px",
              }}
            >
              PIZZA
            </Button>
            <Button
              variant="contained"
              style={{
                borderRadius: "45px",
                background: "#F6B716",
                flexShrink: "0",
                width: "115px",
                height: "45px",
              }}
            >
              PIZZA
            </Button>
            <Button
              variant="contained"
              style={{
                borderRadius: "45px",
                background: "#F6B716",
                flexShrink: "0",
                width: "115px",
                height: "45px",
              }}
            >
              Sides
            </Button>
            <Button
              variant="contained"
              style={{
                borderRadius: "45px",
                background: "#F6B716",
                flexShrink: "0",
                width: "115px",
                height: "45px",
              }}
            >
              Chicken
            </Button>
            <Button
              variant="contained"
              style={{
                borderRadius: "45px",
                background: "#F6B716",
                flexShrink: "0",
                width: "115px",
                height: "45px",
              }}
            >
              Dessert
            </Button>
            <Button
              variant="contained"
              style={{
                borderRadius: "45px",
                background: "#F6B716",
                flexShrink: "0",
                width: "115px",
                height: "45px",
              }}
            >
              Drinks
            </Button>
          </Stack>
        </Box>
      </Box>

      <Box sx={{display:"flex", justifyContent:"center"}}>
        <Box
          sx={{
            overflowX: "auto", // Enable horizontal scrolling when necessary
            maxWidth: "100%", // Set a maximum width for the scrollable container
          }}
          className="no_scrollbar"
        >
          <Box
            spacing={100}
            sx={{
              display: "flex",
              flexDirection: "row", // If you want the cards to be in a row
              // Allow cards to wrap to the next line if necessary
              justifyContent: "flex-start",
              alignItems: "center",
              margin: "50px",
              padding: "50px",
              gap: "50px",
            }}
          >
            <Card
              sx={{
                width: "320px",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // padding: "20px",
              }}
            >
              <RoundedCardMedia
                component="img"
                height="140"
                image={p1}
                alt="green iguana"
              />
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: "16px,5px,5px,10px",
                }}
              >
                <Typography sx={receipStle}>Chicken Noodles</Typography>
                <Typography>Chicken</Typography>
              </CardContent>
              <CardContent style={{ padding: "5px" }}>
                <Typography>Dough, Mozzarella, Cheddar, Blue</Typography>
              </CardContent>
              <CardContent>
                <Typography>7000NGN</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                width: "320px",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // padding: "20px",
              }}
            >
              <RoundedCardMedia
                component="img"
                height="140"
                image={p1}
                alt="green iguana"
              />
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: "16px,5px,5px,10px",
                }}
              >
                <Typography sx={receipStle}>Chicken Noodles</Typography>
                <Typography>Chicken</Typography>
              </CardContent>
              <CardContent style={{ padding: "5px" }}>
                <Typography>Dough, Mozzarella, Cheddar, Blue</Typography>
              </CardContent>
              <CardContent>
                <Typography>7000NGN</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                width: "320px",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // padding: "20px",
              }}
            >
              <RoundedCardMedia
                component="img"
                height="140"
                image={p1}
                alt="green iguana"
              />
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: "16px,5px,5px,10px",
                }}
              >
                <Typography sx={receipStle}>Chicken Noodles</Typography>
                <Typography>Chicken</Typography>
              </CardContent>
              <CardContent style={{ padding: "5px" }}>
                <Typography>Dough, Mozzarella, Cheddar, Blue</Typography>
              </CardContent>
              <CardContent>
                <Typography>7000NGN</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                width: "320px",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // padding: "20px",
              }}
            >
              <RoundedCardMedia
                component="img"
                height="140"
                image={p1}
                alt="green iguana"
              />
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: "16px,5px,5px,10px",
                }}
              >
                <Typography sx={receipStle}>Chicken Noodles</Typography>
                <Typography>Chicken</Typography>
              </CardContent>
              <CardContent style={{ padding: "5px" }}>
                <Typography>Dough, Mozzarella, Cheddar, Blue</Typography>
              </CardContent>
              <CardContent>
                <Typography>7000NGN</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                width: "320px",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // padding: "20px",
              }}
            >
              <RoundedCardMedia
                component="img"
                height="140"
                image={p2}
                alt="green iguana"
              />
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: "16px,5px,5px,10px",
                }}
              >
                <Typography sx={receipStle}>Chicken Noodles</Typography>
                <Typography>Chicken</Typography>
              </CardContent>
              <CardContent style={{ padding: "5px" }}>
                <Typography>Dough, Mozzarella, Cheddar, Blue</Typography>
              </CardContent>
              <CardContent>
                <Typography>7000NGN</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                width: "320px",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // padding: "20px",
              }}
            >
              <RoundedCardMedia
                component="img"
                height="140"
                image={p4}
                alt="green iguana"
              />
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: "16px,5px,5px,10px",
                }}
              >
                <Typography sx={receipStle}>Chicken Noodles</Typography>
                <Typography>Chicken</Typography>
              </CardContent>
              <CardContent style={{ padding: "5px" }}>
                <Typography>Dough, Mozzarella, Cheddar, Blue</Typography>
              </CardContent>
              <CardContent>
                <Typography>7000NGN</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                width: "320px",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // padding: "20px",
              }}
            >
              <RoundedCardMedia
                component="img"
                height="140"
                image={p3}
                alt="green iguana"
              />
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: "16px,5px,5px,10px",
                }}
              >
                <Typography sx={receipStle}>Chicken Noodles</Typography>
                <Typography>Chicken</Typography>
              </CardContent>
              <CardContent style={{ padding: "5px" }}>
                <Typography>Dough, Mozzarella, Cheddar, Blue</Typography>
              </CardContent>
              <CardContent>
                <Typography>7000NGN</Typography>
              </CardContent>
            </Card>

            {/* <Card sx={{ maxWidth: 345 }} >
                    <RoundedCardMedia
                        component="img"
                        height="140"
                        image={image2}
                        alt="green iguana"
                    />
                    <CardContent style={{ display: "flex" }}>
                        <Typography sx={receipStle}>
                            chicken noodles
                        </Typography>
                        <Typography>
                            chicken
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography>
                        Dough, Mozzarella, Cheddar, Blue, Parmesan
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography>
                        7000NGN
                        </Typography>
                    </CardContent>
                </Card> */}
          </Box>
        </Box>
      </Box>
      {/* </Box> */}
    </>
  );
}
