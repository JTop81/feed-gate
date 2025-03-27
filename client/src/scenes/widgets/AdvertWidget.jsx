import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useNavigate } from "react-router-dom";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const navigate = useNavigate();

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500" 
        onClick={() => navigate("/newfeed")}
        sx={{
          "&:hover": {
            color: "#cca752",
            cursor: "pointer",
          },
        }}>
          Thống kê
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="dashboard"
        src="http://localhost:3001/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
        onClick={() => navigate("/newfeed")}
          sx={{
            "&:hover": {
              color: "#cca752",
              cursor: "pointer",
            },
          }}
      />
      <FlexBetween>
        <Typography color={main} 
        onClick={() => navigate("/newfeed")}
        sx={{
          "&:hover": {
            color: "#cca752",
            cursor: "pointer",
          },
        }}>Dashboard</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Truy cập để xem chi tiết tổng quan bán hàng
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
