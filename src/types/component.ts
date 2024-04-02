export interface WrapperProps {
  handleOpenBox: () => void;
}

export interface LetterBoxProps {
  isBoxOpen: boolean;
  handleOpenBox: (params: boolean) => void;
}
