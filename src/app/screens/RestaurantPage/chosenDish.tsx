import React, { useState } from "react";
import { Button, Container, Rating } from "@mui/material";
import { Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Favorite, FavoriteBorder, Label } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Marginer from "../../components/marginer";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const chosen_list = Array.from(Array(3).keys());
const chosen_list2 = Array.from(Array(4).keys());

export function ChosenDish() {
  return (
    <div className="chosen_dish_page">
      <Container className="dish_container">
        <Stack className="chosen_dish_slider">
          <Swiper
            className="dish_swiper"
            loop={true}
            spaceBetween={10}
            navigation={true}
            // thumbs={{ swpier: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {chosen_list.map((ele) => {
              const image_path = `/others/sandvich.jpg`;
              return (
                <SwiperSlide>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={image_path}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Swiper
            className="dish_swiper2"
            loop={true}
            spaceBetween={10}
            style={{ marginTop: "20px" }}
            navigation={true}
            // thumbs={{ swpier: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            slidesPerView={3}
          >
            {chosen_list2.map((ele) => {
              return (
                <SwiperSlide>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={"/others/beef.jpg"}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
        <Stack className={"chosen_dish_info_container"}>
          <Box className={"chosen_dish_info_box"}>
            <strong className={"dish_txt"}>Sweet Sandvich</strong>
            <span className={"resto_name"}>Texas De Brazil</span>
            <Box className={"rating_box"}>
              <Rating
                name="half-rating"
                defaultValue={3.5}
                precision={1}
                sx={{ mt: "10px" }}
              />
              <div className={"evaluation_box"}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "20px",
                  }}
                >
                  <Checkbox
                    {...Label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite style={{ color: "red" }} />}
                    /*@ts-ignore*/
                    checked={true}
                  />

                  <span>98 likes</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <RemoveRedEyeIcon sx={{ mr: "10px" }} />
                  <span>1000 views</span>
                </div>
              </div>
            </Box>
            <p className={"dish_desc_info"}>Juda mazzali Sendvich</p>
            <Marginer
              direction="horizontal"
              height="1"
              width="100%"
              bg="#000000"
            />
            <div className={"dish_price_box"}>
              <span>Narx:</span>
              <span>$11</span>
            </div>
            <div className={"button_box"}>
              <Button variant="contained">Savatga qo'shish</Button>
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
