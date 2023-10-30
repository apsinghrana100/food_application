import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import menu2 from "../img/menu_detail_img/Rectangle 34.png";
import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { css } from "@emotion/react";

import a1 from "../img/addtocardimg/Rectangle 102.png";
import a2 from "../img/addtocardimg/Rectangle 115.png";
import a3 from "../img/addtocardimg/Rectangle 116.png";
import a4 from "../img/addtocardimg/Rectangle 15 (1).png";
import a5 from "../img/addtocardimg/Rectangle 95.png";

import {
  increment,
  decrement,
  removeItemToCart,
} from "../redux/features/addToCartSlice";
import { useSelector, useDispatch } from "react-redux";

import NavBar from "./navbar";

function MyComponent() {
  const yourImagesArray = useSelector(
    (state) => state.AddToSlice.currentCartItemDetail
  );


  const totalprice =  yourImagesArray.map((element) => element.price);

  console.log(totalprice[0])
  const [couponCodes, setCouponCodes] = useState(
    new Array(yourImagesArray.length).fill("")
  );
  const [couponCode, setCouponCode] = useState("");
  console.log(yourImagesArray);
  let [currentValue, setCurrentValue] = useState(yourImagesArray.map(() => 1));
  let [currentPrice, setCurrentPrice] = useState(
    yourImagesArray.map((element) => element.price)
  );

  let [isCoupanApplied,setIsCoupanApplied] = useState(yourImagesArray.map(() => false))
  const dispatch = useDispatch();

  let [coupanMessage, setCoupanMessage] = useState(yourImagesArray.map(() => "Apply Coupan Code"))

  console.log(currentPrice[0])


  
 

  function handleIncrement(index) {
    console.log("i am incremnet");
    const updatedValues = [...currentValue];
    const updatePrice = [...currentPrice];
    updatedValues[index] += 1;
    updatePrice[index] =updatePrice[index]+totalprice[index];
    setCurrentValue(updatedValues);
    setCurrentPrice(updatePrice);

  }

  function handleDecrement(index) {
    if (currentValue[index] <= 1) {
      dispatch(removeItemToCart(index));
      dispatch(decrement());
      console.log("I am decrement calling");
    } else {
      const updatedValues = [...currentValue];
      const updatePrice = [...currentPrice];
      updatePrice[index] -= totalprice[index];;
      updatedValues[index] -= 1;
      setCurrentValue(updatedValues);
      setCurrentPrice(updatePrice);
    }
  }

  function handleApplyCoupan(CupanValue, index) {
    console.log(couponCodes[index], isCoupanApplied[index]);
    const updateCoupan=[...isCoupanApplied];
    const updatePrice = [...currentPrice];
    const updateCoupanMessage = [...coupanMessage]
    if (couponCodes[index] === "AJAY50" && isCoupanApplied[index]===false) {
    
      updatePrice[index] = updatePrice[index] - 50;
      setCurrentPrice(updatePrice);
      updateCoupan[index]=true;
      updateCoupanMessage[index]="Successfully Applied";
      setIsCoupanApplied(updateCoupan)
      setCoupanMessage(updateCoupanMessage);


      // setCoupanMessage("Successfully Applied")
      console.log("successfully applied")
    } else if (couponCodes[index] === "AJAY30" && isCoupanApplied[index]===false) {
      updatePrice[index] = updatePrice[index] - 30;
      setCurrentPrice(updatePrice);
      updateCoupan[index]=true;
      updateCoupanMessage[index]="Successfully Applied";
      setIsCoupanApplied(updateCoupan)
      setCoupanMessage(updateCoupanMessage);
    } else if ((couponCodes[index] === "AJAY50" && isCoupanApplied[index]===true) || (couponCodes[index] === "AJAY30" && isCoupanApplied[index]===true)){
      // setCoupanMessage("Coupan already Used")
      console.log("already coupan used")
      updateCoupanMessage[index]="Coupan already Used";
      setCoupanMessage(updateCoupanMessage);
    } else{
      console.log("invalid Coupan")
      updateCoupanMessage[index]="invalid Coupan";
      setCoupanMessage(updateCoupanMessage);
      // setCoupanMessage("invalid Coupan")
    }
  }

  const handleCouponCodeChange = (event, index) => {
    const newCouponCodes = [...couponCodes];
    const updateCoupanMessage = [...coupanMessage]
    newCouponCodes[index] = (event.target.value).trim();
    setCouponCodes(newCouponCodes);
console.log((event.target.value).trim().length)
      if((event.target.value).length < 1){
        updateCoupanMessage[index]="Apply Coupan Code";
        setCoupanMessage(updateCoupanMessage);
    // setCoupanMessage("Apply Coupan Code")
      }
    

  };

  const totalitem = useSelector((state) => state.AddToSlice.currentTotalItem);
  console.log(totalitem);

  return (
    <>
      <Box sx={{ margin: "10px 50px 50px 50px" }}>
        <NavBar />
        <h1>{totalitem}</h1>
        {totalitem ? (
          <Grid container spacing={2}>
            {yourImagesArray.map((image, index) => (
              // {{console.log(image)}}
              <Grid item xs={12} sm={6} md={4} key={image.id}>
                <Card
                  sx={{
                    height: "500px",
                    width: "350px",
                    background: "rgba(249, 249, 249, 1)",
                  }}
                >
                  <Card
                    sx={{ height: "150px", margin: "20px", boxShadow: "none" }}
                  >
                    <CardMedia
                      component="img"
                      image={image.src}
                      alt={image.alt}
                      //   height="100%"
                      //   width="100%"
                      style={{ objectFit: "contain", borderRadius: "20px" }}
                    />
                  </Card>
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px",
                      margin: "0px 20px 10px 20px",
                    }}
                  >
                    <Typography>{image.name}</Typography>
                    <Typography>₹{image.price}</Typography>
                  </CardContent>

                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      padding: "0px",
                      margin: "0px 20px 15px 20px",
                    }}
                  >
                    <Typography sx={{ fontWeight: "200", fontSize: "12px" }}>
                      {" "}
                      {image.description}
                    </Typography>
                  </CardContent>

                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: "0px",
                      margin: "0px 20px 15px 20px",
                    }}
                  >
                    <TextField
                      id="outlined-basic"
                      label={coupanMessage}
                      size="small"
                      variant="outlined"
                      value={couponCodes[index]}
                      onChange={(e) => handleCouponCodeChange(e, index)}
                    />
                    <Button
                      variant="contained"
                      sx={{
                        height: "40px",
                        width: "130px",
                        borderRadius: "3px",
                        color: "white",
                        backgroundColor: "rgba(255, 165, 0, 1)",
                      }}
                      onClick={() => handleApplyCoupan(couponCode, index)}
                    >
                      Apply
                    </Button>
                  </CardContent>

                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: "0px",
                      margin: "0px 20px 15px 20px",
                    }}
                  >
                    {" "}
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        minWidth: "35px",
                        color: "black",
                        backgroundColor: "rgba(243, 243, 243, 1)",
                      }}
                      onClick={() => handleDecrement(index)}
                    >
                      -
                    </Button>
                    <Typography sx={{ padding: "7px" }}>
                      {currentValue[index]}
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        minWidth: "35px",
                        color: "white",
                        backgroundColor: "rgba(255, 165, 0, 1)",
                      }}
                      // setCurrentPrice
                      onClick={()=>handleIncrement(index)}
                    >
                      +
                    </Button>
                  </CardContent>
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px",
                      margin: "0px 20px 15px 20px",
                    }}
                  >
                    <Typography>Subtotal</Typography>
                    <Typography>₹{currentPrice[index]}</Typography>
                  </CardContent>

                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px",
                      margin: "0px 20px 0px 20px",
                    }}
                  >
                    <Typography>Total</Typography>
                    <Typography>₹{currentPrice[index]}</Typography>
                  </CardContent>

                  <CardContent>
                    <Button
                      variant="contained"
                      sx={{
                        height: "40px",
                        width: "315px",
                        borderRadius: "3px",
                        color: "white",
                        backgroundColor: "rgba(255, 165, 0, 1)",
                      }}
                    >
                      Ordre Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <h1>Ohhh your Bucket is empty...Please Add Something </h1>
        )}
      </Box>
    </>
  );
}

export default MyComponent;
