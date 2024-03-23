import { create } from "zustand";

type LayoutType = "ARCHIVE" | "DELETE" | "UNARCHIVE" | "EDIT" | null;
type DataType = { [key: string]: unknown } | null;

type State = {
  visible: boolean;
  layout: LayoutType;
  data: DataType;
};

type Action = {
  hide: () => void;
  show: (input: { layout: LayoutType; data: DataType }) => void;
};

export const modalContext = create<State & Action>((set) => ({
  visible: false,
  layout: null,
  data: null,
  hide: () => set({ visible: false, layout: null, data: null }),
  show: (input: { layout: LayoutType; data: DataType }) =>
    set(() => ({
      visible: true,
      layout: input.layout,
      data: input.data,
    })),
}));
