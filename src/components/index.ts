/* eslint-disable simple-import-sort/imports */
// Export css
import "../index.css";
import "../fonts.css";

// Import Types
import { SidebarFooterProps } from "./Sidebar/SidebarFooter";
import { SidebarItemGroupProps } from "./Sidebar/SidebarGroup";
import { ItemProps } from "./Sidebar/SidebarItem";
import { SidebarLogoProps } from "./Sidebar/SidebarLogo";
import { SidebarUserProps } from "./Sidebar/SidebarUser";
import { SidebarProps } from "./Sidebar/SidebarMain";

import colors from "../constants/colors";
// Others
import { Sidebar } from "./Sidebar/Sidebar";
import Avatar, { AvatarProps } from "./Avatar";
import { Badge, BadgeProps } from "./Badge";
import { Text, TextProps } from "./Text";
import SearchInput, { SearchInputProps } from "./SearchInput/SearchInput";
import Tooltip, { TooltipProps } from "./Tooltip";
// Buttons
import Button, { ButtonProps } from "./Button";
import FloatingButton, { FloatingButtonProps } from "./FloatingButton";
// Progress
import { ProgressBar, ProgressBarProps } from "./ProgressBar/ProgressBar";
import { Spinner, SpinnerProps } from "./Spinner";
// Navigation
import AccordionMenu, { AccordionMenuProps } from "./AccordionMenu";
import Tab, { TabProps } from "./Tab";
// Forms
import { Slider, SliderProps } from "./Slider/Slider";
import SelectBox, { SelectBoxProps } from "./SelectBox";
import { RadioButton, RadioButtonProps } from "./RadioButton";
import { CheckBox, CheckBoxProps } from "./CheckBox";
import TextArea, { TextAreaProps } from "./TextArea";
import TextField, { TextFieldProps } from "./TextField";
import ToggleSwitch, { ToggleSwitchProps } from "./ToggleSwitch";
// Overlay
import Toast, { ToastProps } from "./Toast";

// Export componentes
export {
  AccordionMenu,
  Avatar,
  Badge,
  Button,
  CheckBox,
  FloatingButton,
  ProgressBar,
  RadioButton,
  SearchInput,
  SelectBox,
  Sidebar,
  Slider,
  Spinner,
  Tab,
  Text,
  TextArea,
  TextField,
  Toast,
  ToggleSwitch,
  Tooltip,
};

// Export Types
export type {
  AccordionMenuProps,
  AvatarProps,
  BadgeProps,
  ButtonProps,
  CheckBoxProps,
  FloatingButtonProps,
  ItemProps,
  ProgressBarProps,
  RadioButtonProps,
  SearchInputProps,
  SelectBoxProps,
  SidebarFooterProps,
  SidebarItemGroupProps,
  SidebarLogoProps,
  SidebarProps,
  SidebarUserProps,
  SliderProps,
  SpinnerProps,
  TabProps,
  TextAreaProps,
  TextFieldProps,
  TextProps,
  ToastProps,
  ToggleSwitchProps,
  TooltipProps,
};

// Export default colors
export { colors };
