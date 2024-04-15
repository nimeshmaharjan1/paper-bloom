import { Redirect } from "expo-router";

const EntryScreen = () => {
  return Redirect({
    href: "/(app)/home",
  });
};

export default EntryScreen;
