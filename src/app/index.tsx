import { Redirect } from "expo-router";

const EntryScreen = () => {
  return Redirect({
    href: "/(shop)/home",
  });
};

export default EntryScreen;
