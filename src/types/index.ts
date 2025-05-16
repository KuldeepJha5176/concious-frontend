import { ReactElement } from "react";

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
  Message?: string |  React.ReactNode; 
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

export interface PushButtonsProps {
  variant: "opaque" | "transparent" | "opaque2" | "bold";
  icon: ReactElement;
  size: "sm" | "md" | "lg";
  onClick?: () => void;
}

export interface SearchBoxProps {
  onChipSelect: (chip: string | null) => void;
  setLoading: (loading: boolean) => void;
  setContent: (
    content: {
      _id: string;
      type: string;
      link: string;
      title: string;
      content: string;
      createdAt: Date;
      imageUrl?: string;
    }[]
  ) => void;
  setAnswer: (amswer: string) => void;
  searchText: string; // Add this
  setSearchText: (text: string) => void; // Add this
}

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  onContentAdded?: (newContent: {
    _id: string;
    type: string;
    link: string;
    title: string;
    content: string;
    createdAt: Date;
  }) => void;
  setToastLoading: (loading: boolean) => void;
};
