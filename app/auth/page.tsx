import { Metadata, NextPage } from "next";
import Auth from "../components/screens/auth-ui/Auth";
export const metadata: Metadata = {
  title: { absolute: "Authorization" },
};
const Page: NextPage = async () => {
  return (
    <div>
      <Auth />
    </div>
  );
};

export default Page;
