import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";

const pausedOrders = [
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
];

export default function PausedOrders(props: any) {
  return (
    <TabPanel value={"1"}>
      <Stack>
        {pausedOrders?.map((order) => {
          return (
            <Box className={"order_main_box"}>
              <Box className={"order_box_scroll"}>
                {order.map((item) => {
                  const image_path = "/others/qovurma.jpg";
                  return (
                    <Box className={"ordersName_price"}>
                      <img src={image_path} className={"orderDishImg"} />
                      <p className={"titleDish"}>
                        Qo'vrulgan go'sht cho'poncha
                      </p>
                      <Box className={"priceBox"}>
                        <p>$10</p>
                        <img src={"/icons/Close.svg"} />
                        <p>2</p>
                        <img src={"/icons/pause.svg"} />
                        <p style={{ marginLeft: "15px" }}>$20</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"totla_price_box "}>
                <Box className={"boxTotle"}>
                  <p>product price</p>
                  <p>$22</p>
                  <p>delivery price</p>
                  <p>$2</p>
                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px" }}
                  />
                  <p>Total price</p>
                  <p>$24</p>
                  <Button className={"btn1"}>cancel</Button>
                  <Button className={"btn2"}>confirm</Button>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
