import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const homeRoutes = [
  {
    path: "/home",
    children: <HeaderLayout><Home /></HeaderLayout>
  },
  {
    path: "/user_management",
    children: <HeaderLayout><UserManagement /></HeaderLayout>
  },
  {
    path: "/setting",
    children: <HeaderLayout><Setting /></HeaderLayout>
  },
  {
    path: "*",
    children: <HeaderLayout><Page404 /></HeaderLayout>
  },
];