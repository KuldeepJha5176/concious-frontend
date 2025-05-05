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
    reference? : React.RefObject<HTMLInputElement> | undefined;
    maxlength? : number;
    type? : string;
    required?: boolean;
    onChange?: () => void;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
    endICon? : ReactElement;
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
