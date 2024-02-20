type FoodItem = {
  image: string;
  label: string;
  type: "morning" | "lunch" | "dinner" | "snack";
  id: string;
};

type Directory = {
  image: string;
  label: string;
  time?: string;
  type: "column" | "diet" | "beauty" | "health";
  content: string;
  id: string;
  tags?: string[];
};

type Diary = {
  date: string;
  time: string;
  content: string;
};
