import { TfiLayoutAccordionSeparated } from "react-icons/tfi";
import { IoShapesOutline } from "react-icons/io5";
import { AiOutlinePieChart } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

export const SidebarData = [
  {
    title: "Links",
    key: 1,
    icon: <TfiLayoutAccordionSeparated />,
    navigate: "/links",
  },
  {
    title: "Appearance",
    key: 2,
    icon: <IoShapesOutline />,
    navigate: "/appearance",
  },
  {
    title: "Analytics",
    key: 3,
    icon: <AiOutlinePieChart />,
    navigate: "/analytics",
  },
  {
    title: "Settings",
    key: 4,
    icon: <IoSettingsOutline />,
    navigate: "/settings",
  },
];
