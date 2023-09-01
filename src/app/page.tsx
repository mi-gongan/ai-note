import SessionCheck from "@/components/common/SessionCheck";
import { RouterPath } from "@/utils/router";

export default async function Home() {
  return <SessionCheck path={RouterPath.HOME} />;
}
