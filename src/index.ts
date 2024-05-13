/* eslint-disable simple-import-sort/imports */
// Import Types
import { SidebarFooterProps } from "./components/Sidebar/SidebarFooter";
import { SidebarItemGroupProps } from "./components/Sidebar/SidebarGroup";
import { ItemProps } from "./components/Sidebar/SidebarItem"; // TODO: Improves this name
import { SidebarLogoProps } from "./components/Sidebar/SidebarLogo";
import { SidebarUserProps } from "./components/Sidebar/SidebarUser";

import colors from "./constants/colors";
// Others
import { Sidebar } from "./components/Sidebar/Sidebar";
import Avatar, { AvatarProps } from "./components/Avatar";
import { Badge, BadgeProps } from "./components/Badge";
import { Text, TextProps } from "./components/Text";
import SearchInput, { SearchInputProps } from "./components/SearchInput/SearchInput";
import Tooltip, { TooltipProps } from "./components/Tooltip";
import Popover, { PopoverProps } from "./components/Popover";
// Buttons
import Button, { ButtonProps } from "./components/Button";
import FloatingButton, { FloatingButtonProps } from "./components/FloatingButton";
// Progress
import { ProgressBar, ProgressBarProps } from "./components/ProgressBar/ProgressBar";
import { Spinner, SpinnerProps } from "./components/Spinner";
// Navigation
import { AccordionMenu, AccordionMenuProps } from "./components/AccordionMenu";
import { Tab, TabProps } from "./components/Tab";
// Forms
import { Slider, SliderProps } from "./components/Slider/Slider";
import SelectBox, { SelectBoxProps } from "./components/SelectBox";
import { Select, SelectProps } from "./components/Select";
import { RadioButton, RadioButtonProps } from "./components/RadioButton";
import { CheckBox, CheckBoxProps } from "./components/CheckBox";
import TextArea, { TextAreaProps } from "./components/TextArea";
import { TextField, TextFieldProps } from "./components/TextField";
import TextFieldMask from "./components/TextField/TextFieldMask";
import ToggleSwitch, { ToggleSwitchProps } from "./components/ToggleSwitch";
// Overlay
import { Toast, ToastProps } from "./components/Toast";

// Export componentes
export {
  AccordionMenu,
  Avatar,
  Badge,
  Button,
  CheckBox,
  FloatingButton,
  Popover,
  ProgressBar,
  RadioButton,
  SearchInput,
  Select,
  SelectBox,
  Sidebar,
  Slider,
  Spinner,
  Tab,
  Text,
  TextArea,
  TextField,
  TextFieldMask,
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
  PopoverProps,
  ProgressBarProps,
  RadioButtonProps,
  SearchInputProps,
  SelectBoxProps,
  SelectProps,
  SidebarFooterProps,
  SidebarItemGroupProps,
  SidebarLogoProps,
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

// Export colors
export { colors };
