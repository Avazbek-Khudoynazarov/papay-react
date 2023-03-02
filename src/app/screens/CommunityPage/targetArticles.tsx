import { Box, Link, Stack } from "@mui/material";
import moment from "moment";
import CheckBox from "@mui/material/Checkbox";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export function TargetArticles(props: any) {
  const label = { inputProps: { "aria-label": "Checbox demo" } };
  return (
    <Stack>
      {props.targetBoArticles?.map((article: any, index: string) => {
        const art_image_url = `/community/default_articles.svg`;
        return (
          <Link
            key={index}
            className="all_article_box"
            sx={{ textDecoration: "none" }}
            href={``}
          >
            <Box
              className="all_article_img"
              sx={{ backgroundImage: `url(${art_image_url})` }}
            ></Box>

            <Box flexDirection={"row"} sx={{ display: "flex", width: "100%" }}>
              <Stack
                flexDirection={"column"}
                sx={{ display: "flex" }}
                className="all_article_container"
              >
                <Box alignItems={"center"} display={"flex"}>
                  <img
                    src="/auth/default_user.svg"
                    width={"35px"}
                    style={{ borderRadius: "50%", backgroundSize: "cover" }}
                  />
                  <span className="all_article_author_user">
                    Khudoynazarov Avazbek
                  </span>
                </Box>

                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  sx={{ mt: "15px" }}
                >
                  <span className="all_article_title">evaluation</span>
                  <p className="all_article_desc">
                    Texas De Brazil zo'r restaurant
                  </p>
                </Box>
              </Stack>

              <Stack
                sx={{ display: "flex" }}
                flexDirection={"column"}
                justifyContent={"flex-end"}
                // alignItems={"flex-end"}
              >
                <Box
                  sx={{ display: "flex" }}
                  flexDirection={"row"}
                  alignItems={"center"}
                >
                  <p className="article_time_desc">
                    {moment().format("YY-MM-DD hh:mm")}
                  </p>

                  <div style={{ display: "flex", marginLeft: "42px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginRight: "20px",
                      }}
                    >
                      <CheckBox
                        {...label}
                        icon={<FavoriteBorder style={{ color: "white" }} />}
                        checkedIcon={<Favorite style={{ color: "red" }} />}
                        // checked={false}
                      />

                      <span className="article_time_desc">1 </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <RemoveRedEyeIcon
                        style={{ color: "white" }}
                        sx={{ mr: "10px" }}
                      />
                      <span className="article_time_desc">3</span>
                    </div>
                  </div>
                </Box>
              </Stack>
            </Box>
          </Link>
        );
      })}
    </Stack>
  );
}
