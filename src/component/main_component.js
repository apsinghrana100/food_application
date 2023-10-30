import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import fullpizza from "../img/fullpizza.png";
import Box from "@mui/material/Box";
import Menu from "../menu_component/menu";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { ArrowDropDown } from "@mui/icons-material";
import { Stack } from "@mui/material";
import Badge from "@mui/material/Badge";

import { useSelector } from "react-redux";

function DropDown() {
  return (
    <>
      <select style={{ borderRadius: "0px",border: 0  }}>
        <option value={1}>Surat</option>
        <option value={2}>Valsad</option>
        <option value={3}>Navsari</option>
      </select>
    </>
  );
}

export default function Main_header() {

  const OnHandleOpen = () => {
    return <Link to="/menu">Menu</Link>;
  };
  const totalitem = useSelector((state)=>state.AddToSlice.currentTotalItem)
  return (
    <Box
      sx={{
        overflow: "visible",
        height: "400px",
        width: "100%",
        position: "relative",
        backgroundImage: `url(fullpizza.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        marginBottom: "40px",
      }}
    >
      <Box
        sx={{
          content: '""', // Create a pseudo-element
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.46)", // The overlay color
          zIndex: 0, // Set z-index behind the background image
        }}
      ></Box>
      <Stack
        position={"sticky"}
        direction="row"
        alignItems="center"
        justifyContent={"space-between"}
        margin={"0px 80px 0px 80px"}
        paddingTop={"20px"}
      >
        <Typography
          sx={{
            color: "rgba(255, 195, 0, 1)",
            width: "121px",
            height: "30px",
            fontWeight: "500",
            fontSize: "20px",
            lineHeight: "30px",
            zIndex: 1,
          }}
        >
          NoodleTown
        </Typography>
        <Stack direction="row" alignItems="center">
          <IconButton
            color="primary"
            aria-label="add item"
            sx={{ zIndex: 3, color: "white" }}
          >
            <Typography
              sx={{
                color: "white",
                width: "56px",
                height: "30px",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "30px",
                zIndex: 3,
              }}
            >
              <Link
                to="/menu"
                style={{ color: "white", textDecoration: "none", zIndex: 3 }}
              >
                {" "}
                Menu
              </Link>
            </Typography>
          </IconButton>
          <Badge color="secondary" badgeContent={totalitem} sx={{ color: "white" }}>
            <Link to="/addtocart" style={{ color: "white", textDecoration: "none", zIndex: 3 }}>
              <ShoppingCartOutlinedIcon />
            </Link>
          </Badge>
        </Stack>
      </Stack>

      <Stack direction="column" justifyContent="center" alignItems="center">
        <Typography
          sx={{
            width: "348px",
            height: "72px",
            fontWeight: "700",
            fontSize: "48px",
            lineHeight: "72px",
            color: "white",
            zIndex: 1,
          }}
        >
          NOODLETOWN
        </Typography>
        <Typography
          sx={{
            width: "370px",
            height: "36px",
            fontWeight: "500",
            fontSize: "24px",
            lineHeight: "36px",
            color: "white",
            zIndex: 1,
          }}
        >
          Discover best food around you
        </Typography>
      </Stack>

      <Box
        style={{
          // position: "absolute",
          // top: "380px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // padding: "20px",
          // left: "50%",
          // height: "65px",
          // width: "642px",
          borderRadius: "8px",
          color: "rgba(217, 217, 217, 1)",
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            background: "rgba(153, 153, 153, 1)",
            zIndex: 3,
          }}
        >
          <IconButton sx={{ p: "0" ,  zIndex: 3,}} aria-label="dropDown">
            <DropDown />
            {/* <ArrowDropDown /> */}
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 ,  zIndex: 3,}} orientation="vertical" />
          <IconButton type="button" sx={{ p: "10px" ,  zIndex: 3,}} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 ,  zIndex: 3,}}
            placeholder="Search for restraunt, Cuisine, place"
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Paper>
      </Box>
    </Box>
  );
}
