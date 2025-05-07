import { ReactElement } from "react";
export interface ButtonProps {
  variant:
    | "primary"
    | "secondary"
    | "round"
    | "roundchips"
    | "new"
    | "load"
    | "drop"
    | "danger";
  children: React.ReactNode;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  size: "sm" | "md" | "lg" | "vsm";
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

export interface InputProps {
  // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  variant: "primary" | "secondary";
  reference?: React.RefObject<HTMLInputElement> | undefined;
  maxlength?: number;
  type?: string;
  required?: boolean;
  onChange?: () => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  endICon?: ReactElement;
}

export interface CardProps {
  title: string;
  type?: string;
  content?: string;
  url?: string;
  imageUrl?: string | null;
  setdelete?: () => void;
  setNotes?: () => void;
  index?: number;
  time: string;
}

export interface CommonMondalProp {
  Copen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  startIcon?: ReactElement;
  Message?: string | JSX.Element;
  Message2?: string;
  ButtonMessage?: React.ReactNode;
  WrongButtonMessage?: React.ReactNode;
  loading?: boolean;
  variant: "normal" | "fullscreen";
  isDanger?: boolean;
  onWrongButtonClick?: () => void;
  WrongButtonDisabled?: boolean;
  ButtonDisabled?: boolean;
}
