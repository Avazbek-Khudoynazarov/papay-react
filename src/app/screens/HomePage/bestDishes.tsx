import { MonetizationOn } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import { Container } from "@mui/system";
import { url } from "inspector";
import React from "react";

export function BestDishes() {
  return (
    <div className="best_dishes_frame">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="category_title">Trendagi Ovqatlar</Box>
          <Stack sx={{ mt: "43px", flexDirection: "row" }}>
            <Box className="dish_box">
              <Stack
                className="dish_img"
                sx={{
                  backgroundImage:
                    "url('https://theurbantandoor.com/wp-content/uploads/2019/09/samosa.jpg')",
                }}
              >
                <div className={"dish_sale"}>normal size</div>
                <div className={"view_btn"}>
                  Batafsil Ko'rish
                  <img
                    src={"/icons/arrow_right.svg"}
                    style={{ marginLeft: "9px" }}
                  />
                </div>
              </Stack>
              <Stack className={"dish_desc"}>
                <span className={"dish_title_text"}>Chicken Mayo</span>
                <span className={"dish_desc_text"}>
                  <MonetizationOn />
                  11
                </span>
              </Stack>
            </Box>
            <Box className="dish_box">
              <Stack
                className="dish_img"
                sx={{
                  backgroundImage:
                    "url('https://theurbantandoor.com/wp-content/uploads/2019/09/samosa.jpg')",
                }}
              >
                <div className={"dish_sale"}>normal size</div>
                <div className={"view_btn"}>
                  Batafsil Ko'rish
                  <img
                    src={"/icons/arrow_right.svg"}
                    style={{ marginLeft: "9px" }}
                  />
                </div>
              </Stack>
              <Stack className={"dish_desc"}>
                <span className={"dish_title_text"}>Chicken Mayo</span>
                <span className={"dish_desc_text"}>
                  <MonetizationOn />
                  11
                </span>
              </Stack>
            </Box>
            <Box className="dish_box">
              <Stack
                className="dish_img"
                sx={{
                  backgroundImage:
                    "url('https://theurbantandoor.com/wp-content/uploads/2019/09/samosa.jpg')",
                }}
              >
                <div className={"dish_sale"}>normal size</div>
                <div className={"view_btn"}>
                  Batafsil Ko'rish
                  <img
                    src={"/icons/arrow_right.svg"}
                    style={{ marginLeft: "9px" }}
                  />
                </div>
              </Stack>
              <Stack className={"dish_desc"}>
                <span className={"dish_title_text"}>Chicken Mayo</span>
                <span className={"dish_desc_text"}>
                  <MonetizationOn />
                  11
                </span>
              </Stack>
            </Box>
            <Box className="dish_box">
              <Stack
                className="dish_img"
                sx={{
                  backgroundImage:
                    "url('https://theurbantandoor.com/wp-content/uploads/2019/09/samosa.jpg')",
                }}
              >
                <div className={"dish_sale"}>normal size</div>
                <div className={"view_btn"}>
                  Batafsil Ko'rish
                  <img
                    src={"/icons/arrow_right.svg"}
                    style={{ marginLeft: "9px" }}
                  />
                </div>
              </Stack>
              <Stack className={"dish_desc"}>
                <span className={"dish_title_text"}>Chicken Mayo</span>
                <span className={"dish_desc_text"}>
                  <MonetizationOn />
                  11
                </span>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
