import React, { useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import Tab from "@mui/material/Tab";
import Pagination from "@mui/material/Pagination";
import "../../../css/community.css";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TargetArticles } from "./targetArticles";
import { CommunityChats } from "./communityChats";

const targetBoArticles = [1, 2, 3, 4];

export function CommunityPage(props: any) {
  /* INITIALIZATION */
  const [value, setValue] = React.useState("1");

  /* HANDLES */
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  const handlePaginationChange = (event: any, value: number) => {
    console.log(value);
  };
  return (
    <div className="community_page">
      <div className="community_frame">
        <Container sx={{ mt: "50px", mb: "50px" }}>
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
            <CommunityChats />
            <Stack
              className="community_all_frame"
              inputMode={"text"}
              style={{ border: "1px solid #fff" }}
            >
              <TabContext value={value}>
                <Box
                  className="article_tabs"
                  sx={{ borderBottom: 1, borderColor: "devider" }}
                >
                  <Box>
                    <TabList
                      onChange={handleChange}
                      value={value}
                      aria-label="lab API tabs example"
                      style={{
                        borderColor: "blue",
                      }}
                    >
                      <Tab label="Barcha Maqolalar" value="1" />
                      <Tab label="Mashhurlar" value="2" />
                      <Tab label="Oshxonaga Baho" value="3" />
                      <Tab label="Hikoyalar" value="4" />
                    </TabList>
                  </Box>
                </Box>

                <Box className="article_main">
                  <TabPanel value="1">
                    <TargetArticles targetBoArticles={[1, 2, 3]} />
                  </TabPanel>
                  <TabPanel value="2">
                    <TargetArticles targetBoArticles={[1, 2, 3, 4, 5]} />
                  </TabPanel>
                  <TabPanel value="3">
                    <TargetArticles targetBoArticles={[1, 2]} />
                  </TabPanel>
                  <TabPanel value="4">
                    <TargetArticles targetBoArticles={[1, 2, 3, 4, 5]} />
                  </TabPanel>
                </Box>

                <Box className="article_bott">
                  <Pagination
                    count={3}
                    page={1}
                    renderItem={(item) => (
                      <PaginationItem
                        components={{
                          previous: ArrowBackIcon,
                          next: ArrowForwardIcon,
                        }}
                        {...item}
                        color={"secondary"}
                      />
                    )}
                    onChange={handlePaginationChange}
                  />
                </Box>
              </TabContext>
            </Stack>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
