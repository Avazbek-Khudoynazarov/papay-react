import React, { useEffect, useState } from "react";
import { Container, Stack, Box } from "@mui/material";
import "../../../css/order.css";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import PausedOrders from "../../components/orders/pausedOrders";
import ProcessOrders from "../../components/orders/processOrders";
import FinishedOrders from "../../components/orders/finishedOrders";

export function OrdersPage() {
  /** INITIALIZATION **/
  const [value, setValue] = useState("1");

  /** HANDLERS **/
  const handleChange = (event: any, newValue: string) => {
    // alert(newValue);
    setValue(newValue);
  };

  return (
    <div className={"order_page"}>
      <Container
        maxWidth="lg"
        style={{ display: "flex", flexDirection: "row" }}
        sx={{ mt: "50px", mb: "50px" }}
      >
        <Stack className={"order_left"}>
          <TabContext value={value}>
            <Box className={"order_nav_frame"}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  value={value}
                  aria-label="basic tabs example"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Tab label="Buyurtmalarim" value={"1"} />
                  <Tab label="Jarayon" value={"2"} />
                  <Tab label="Yakunlangan" value={"3"} />
                </TabList>
              </Box>
            </Box>
            <Stack className={"order_main_content"}>
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className={"order_right"}>
          <Box className={"order_info_box"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <div className={"order_user_img"}>
                <img
                  src={"/auth/default_user.svg"}
                  className={"order_user_avatar"}
                />
                <div className={"order_user_icon"}>
                  <img className="main_icon" src={"/icons/default_icon.svg"} />
                </div>
              </div>
              <span className="order_user_desc">Avazbek Khudoynazarov</span>
              <span className="order_user_title">Foydalanuvchi</span>
            </Box>
            <Box
              style={{ borderBottom: "1px solid #a1a1a1", width: "100%" }}
              sx={{ mt: "20px", mb: "8px" }}
            ></Box>
            <div className={"order_footer"}>
              <LocationOnIcon />
              <span>Seoul</span>
            </div>
            {/* <div className="order_city"> </div> */}
          </Box>

          <Box className="order_info_box" sx={{ mt: "15px" }}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <form className="order_info_box_form" action="" method="">
                <input
                  type="text"
                  placeholder="Card number : 5243 4090 2002 7495"
                />
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    style={{ width: "49%" }}
                    type="text"
                    placeholder="07 / 24"
                  />
                  <input
                    style={{ width: "49%" }}
                    type="text"
                    placeholder="CVV : 010"
                  />
                </div>
                <input type="text" placeholder="Khudoynazarov Avazbek" />
              </form>
            </Box>

            <Box style={{ display: "flex", gap: "20px" }}>
              <img src="/others/western_union.svg" alt="" />
              <img src="/others/mastercard.svg" alt="" />
              <img src="/others/paypal.svg" alt="" />
              <img src="/others/visa.svg" alt="" />
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
