import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/option";
import Header from "@/components/layout/Header";
import Image from "next/image";
import CustomButton from "@/components/common/CustomButton";
import Spacing from "@/components/common/Spacing";
import { cls } from "@/utils/style";
import ModalButton from "@/components/button/ModalButton";

async function getData() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default async function Home() {
  const data = await getData();

  return (
    <Header sessionInfo={data}>
      <div className="flex justify-center items-center flex-col leading-12">
        <Spacing size={80} />
        <div
          className={cls("px-12", "xl:text-[34px] text-[24px]", "font-bold")}
        >
          Welcome, Sumin!
          <br />
          Please upload the recording file to create your note
        </div>
        <div className="xl:w-[727px] md:w-[500px] w-[100%] max-w-[500px]">
          <Image
            src={"/imgs/robot.svg"}
            width={727}
            height={449}
            alt="robot"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <ModalButton />
      </div>
    </Header>
  );
}
