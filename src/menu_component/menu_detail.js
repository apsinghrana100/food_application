import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import p1 from "../img/menu_detail_img/Rectangle 14 (1).png";
import p2 from "../img/menu_detail_img/Rectangle 15 (1).png";
import p3 from "../img/menu_detail_img/Rectangle 16 (1).png";
import menu1 from "../img/menu_detail_img/Rectangle 33.png";
import menu2 from "../img/menu_detail_img/Rectangle 34.png";

import a1 from "../img/menu_detail_img/Rectangle 15 (1).png";
import a2 from "../img/menu_detail_img/Rectangle 16 (1).png";
import { CardContent, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import NavBar from "../component/navbar";

import { increment, decrement, addItemToCart } from "../redux/features/addToCartSlice";
import { useSelector, useDispatch } from 'react-redux'

export default function MenuDetails() {


  const dispatch = useDispatch();

  const abc = [
    {
      name: "Pizzas",
      qty: 50,
    },
    {
      name: "Classic Pizzas For Classic Maniacs",
      qty: 10,
    },
    {
      name: "Garlic Breads",
      qty: 7,
    },
    {
      name: "Lasagna",
      qty: 3,
    },
    {
      name: "Desserts",
      qty: 2,
    },
  ];

  const mno = [
    {
      id:1,
      imgname:"",
      name: "Margherita Pizza",
      description: "A Classic Cheesy Margharita. wen't Go Wrong.",
      price: 0,
      image: a1,
      isAdded:false
    },
    {
      id:2,
      imgname:"",
      name: "Margherita Pizza",
      description: "A Classic Cheesy Margharita. Ajay is Go Wrong.",
      price: 100,
      image: a1,
      isAdded:true
    },
    {
      id:3,
      imgname:"",
      name: "Margherita Pizza",
      description: "A Classic Cheesy Margharita.Nice Product.",
      price: 130,
      image: a1,
      isAdded:false
    },
    {
      id:4,
      imgname:"",
      name: "Margherita Pizza",
      description: "A Classic Cheesy Margharita. Can't Go Wrong.",
      price: 120,
      image: a1,
      isAdded:false
    },
  ];


  

  
  const onhandleAdditemClick=(element)=>{

    console.log(element)
    const itemDetail={
      name:"ajay"
    }
    dispatch(increment())
    dispatch(addItemToCart(element));

  }

  const totalitem = useSelector((state)=>state.AddToSlice.currentTotalItem)
  console.log(totalitem);
  

    
  return (
    <>
      <Box sx={{ padding: "0px" ,marginBottom:"100px"}}>
        <NavBar />
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginRight: "10px",
            }}
          >
            <Card
              sx={{
                // height: "500px",
                // width: "600px",
                // margin: "40px",
                objectFit: "contain",
              }}
            >
              <CardMedia
                component="img"
                image={p1}
                alt="addkj"
                // height="100%"
                // width="100%"
                objectFit="contain"
              />
            </Card>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              columnGap: "50px",
            }}
          >
            <Card
              sx={{
                objectFit: "contain",
                marginBottom: "7px",
              }}
            >
              <CardMedia component="img" image={p2} alt="addkj" />
            </Card>
            <Card
              sx={{
                objectFit: "contain",
              }}
            >
              <CardMedia component="img" image={p3} alt="addkj" />
            </Card>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px 200px 30px 0px",
            gap: "20px",
          }}
        >
          <Card
            sx={{
              height: "100px",
              width: "100px",
              objectFit: "contain",
            }}
          >
            <CardMedia
              component="img"
              image={p3}
              alt="lapizzo"
              height="100px"
            />
          </Card>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "nowrap",
              boxShadow: "none",
            }}
          >
            <Typography sx={{ fontWeight: "800", fontSize: "25px" }}>
              La Pino'z Pizza
            </Typography>
            <Typography sx={{ fontWeight: "400", fontSize: "12px" }}>
              Pizza, Fast Food, Beverages
            </Typography>
            <Typography sx={{ fontWeight: "400", fontSize: "12px" }}>
              Vesu, Surat
            </Typography>
            <Typography sx={{ fontWeight: "400", fontSize: "12px" }}>
              Open now 11am – 11pm (Today)
            </Typography>
          </Card>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "90px",
            gap: "10px",
          }}
        >
          <Button variant="outlined" className="button_menu">
            Order Online
          </Button>
          <Button variant="outlined" className="button_menu">
            Directions
          </Button>
          <Button variant="outlined" className="button_menu">
            Share
          </Button>
        </Box>

        {/* menu */}
        {/* <Box>
          <Typography
            sx={{ padding: "20px", fontWeight: "500", fontSize: "20px" }}
          >
            Menu
          </Typography>
          <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              // height: "326px",
              // width: "600px",
              gap: "30px",
              padding: "30px",
              boxShadow: "none",
            }}
          >
            <Box>
              <CardMedia
                component="img"
                image={menu1}
                alt="lapizzo"
                // height="326px"
                // width="290px"
                objectFit="contain"
              />
              <Typography
                sx={{ fontWeight: "500", fontSize: "14px", paddingTop: "10px" }}
              >
                Dinning Menu
              </Typography>
            </Box>
            <Box>
              <CardMedia
                component="img"
                image={menu2}
                alt="lapizzo"
                // width="290px"
                objectFit="contain"
              />
              <Typography
                sx={{ fontWeight: "500", fontSize: "14px", paddingTop: "10px" }}
              >
                Takeaway Menu
              </Typography>
            </Box>
          </Card>
        </Box> */}
        <Stack direction={"row"}  spacing={2} marginLeft={"396px"} marginTop={"90px"}>
          <Card sx={{ height: "230px", width: "200px" }}>
            <CardMedia
              component="img"
              image={menu1}
              alt="menu1"
              sx={{ objectFit: "contain", heigth: "100%" }}
            />
          </Card>
          <Card sx={{ height: "230px", width: "200px" }}>
            <CardMedia
              component="img"
              image={menu1}
              alt="menu1"
              sx={{ objectFit: "contain", heigth: "100%" }}
            />
          </Card>
        </Stack>

        <Box sx={{ display: "flex", flexDirection: "row",justifyContent:"center",marginLeft:"200px",marginTop:"100px" }}>
          <Box sx={{ marginTop: "30px" }}>
            <Typography sx={{ fontWeight: "800", fontSize: "20px"}}>
              Order Online
            </Typography>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                boxShadow: "none",
                marginTop:"70px"
              }}
            >
              <Typography
                sx={{
                  padding: "5px",
                  fontWeight: "400",
                  fontSize: "20px",
                  backgroundColor: "rgba(255, 195, 0, 1)",
                  color: "white",
                }}
              >
                Recommended
              </Typography>
              {abc.map((element, index) => (
                <Typography
                  key={index} // You should include a unique key for each element when using map
                  sx={{
                    padding: "5px",
                    fontWeight: "400",
                    fontSize: "15px",
                    // backgroundColor: "rgba(255, 195, 0, 1)",
                    // color: "white",
                  }}
                >
                  {element.name}({element.qty})
                </Typography>
              ))}
            </Card>
          </Box>

          <Box>
            <Typography
              sx={{ fontWeight: "800", fontSize: "24px", margin: "70px 5px 5px 10px" }}
            >
              Recommended
            </Typography>
            <Box
              sx={{
                width: "500px",
                borderLeftColor: "black",
                border: "1px solid yellow",
                borderTop: "0px",
                borderRight: "0px",
                borderBottom: "0px",
                marginTop:"20px"
              }}
            >
              {mno.map((element, index) => (
                <Card
                  key={element.id}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "500px",
                    boxShadow: "none",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={p3}
                    alt="lapizzo"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "20px",
                      padding: "15px",
                    }}
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "15px",
                    }}
                  >
                    <Typography sx={{ fontWeight: "800", fontSize: "16px" }}>
                      {element.name}
                    </Typography>
                    <Typography sx={{ fontWeight: "300", fontSize: "10px" }}>
                      {element.description}
                    </Typography>
                    <Typography>{element.price}</Typography>
                    <Button variant="outlined" className="button_menu" onClick={() => {if(!element.isAdded) onhandleAdditemClick(element)}}>
                      Add To Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
