import { Badge, IconButton, Stack, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function NavBar() {

  const totalitem = useSelector((state)=>state.AddToSlice.currentTotalItem)
  console.log(totalitem);
  const dispatch = useDispatch();
  return (
    <>
      <Stack
        position={"sticky"}
        top={0}
        direction="row"
        alignItems="center"
        justifyContent={"space-between"}
        margin={"0px 80px 25px 80px"}
        paddingTop={"20px"}
        zIndex={2}
        // gap={"900px"}
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
          <Link to="/" style={{ color: "rgba(255, 195, 0, 1)", textDecoration: "none"}}>NoodleTown</Link>
        </Typography>
        <Stack direction="row" alignItems="center">
          <IconButton
            color="primary"
            aria-label="add item"
            sx={{
              zIndex: 3,
              color: "black",
              marginRight: "16px", // Add margin to create space
              marginLeft: "600px",
            }}
          >
            <Typography
              sx={{
                color: "black",
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
                style={{ color: "black", textDecoration: "none", zIndex: 3 }}
              >
                Menu
              </Link>
            </Typography>
          </IconButton>
          <Badge color="secondary" badgeContent={totalitem} sx={{ color: "black" }}>
            <Link
              to="/addtocart"
              style={{ color: "black", textDecoration: "none", zIndex: 3 }}
            >
              <ShoppingCartOutlinedIcon />
            </Link>
          </Badge>
        </Stack>
      </Stack>
    </>
  );
}
