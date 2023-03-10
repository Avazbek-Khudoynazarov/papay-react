import React, { useRef, useEffect, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Button from "@mui/material/Button";

export function MySettings(props: any) {
  return (
    <Stack className={"my_settings_page"}>
      <Box className={"member_media_frame"}>
        <img
          src={"/auth/default_logo.svg"}
          className={"mb_image"}
          style={{ borderRadius: "50%" }}
          width={"100px"}
          height={"100px"}
        />
        <div className={"media_change_box"}>
          <span style={{ marginTop: "10px", marginLeft: "20px" }}>
            Rasm Yuklash
          </span>
          <p style={{ marginLeft: "20px" }}>
            JPG, JPEG, PNG rasmlarni yuklay olasiz!
          </p>
          <div className={"up_del_box"}>
            <Button component="label" style={{ minWidth: "0px" }}>
              <CloudDownloadIcon style={{ marginLeft: "20px" }} />
              <input type="file" hidden />
            </Button>
          </div>
        </div>
      </Box>
      <Box className={"input_frame"}>
        <div className={"long_input"}>
          <label className={"spec_label"}>Ism</label>
          <input
            className={"spec_input mb_nick"}
            type="text"
            placeholder="Khudoynazarov Avazbek"
            name="mb_nick"
          />
        </div>
      </Box>
      <Box className={"input_frame"}>
        <div className={"short_input"}>
          <label className={"spec_label"}>Telefon Raqam</label>
          <input
            className={"spec_input mb_phone"}
            type="text"
            placeholder={"998981110181"}
            name="mb_phone"
          />
        </div>
        <div className={"short_input"}>
          <label className={"spec_label"}>Manzil</label>
          <input
            className={"spec_input mb_address"}
            type="text"
            placeholder={"Tashkent, Yunus Abad 4-1"}
            name="mb_address"
          />
        </div>
      </Box>

      <Box className={"input_frame"}>
        <div className={"long_input"}>
          <label className={"spec_label"}>Ma'lumot</label>

          <textarea
            className={"spec_textarea mb_description"}
            placeholder={"mavjud emas"}
            name="mb_description"
          />
        </div>
      </Box>
      <Box display={"flex"} justifyContent={"flex-end"} sx={{ mt: "25px" }}>
        <Button variant={"contained"}>Saqlash</Button>
      </Box>
    </Stack>
  );
}
