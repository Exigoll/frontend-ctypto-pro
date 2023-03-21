import { Box, useMediaQuery } from "@mui/material";
import { FC, useState } from "react";
import { useLocation } from "react-router-dom";

import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";

import { ILayout } from "@/common/types/layout";

import { useStyles } from "./styles";

const Layout: FC<ILayout> = ({ children }: ILayout) => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const isNonMobile = useMediaQuery("(min-width: 768px)");
  const classes = useStyles();

  return location.pathname === "/login" || location.pathname === "/register" ? (
    <>{children}</>
  ) : (
    <Box
      display={isNonMobile ? "flex" : "block"}
      justifyContent="space-between"
      width="100%"
      height="100%"
    >
      <SideBar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Box className={classes.mainSection}>
        <TopBar />
        {children}
      </Box>
    </Box>
  );
};
export default Layout;