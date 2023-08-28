import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Box from "@/components/Box";
import LeftNavigation from "@/components/layout/LeftNavigation";
import MainDropzone from "@/components/MainDropzone";
import ModalButton from "@/components/ModalButton";
import Header from "@/components/layout/Header";
import LogoutButton from "@/components/LogoutButton";
import Image from "next/image";
import CustomButton from "@/components/common/CustomButton";

export async function getData() {
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
        <div className="text-[36px] font-bold">
          Welcome, Sumin!
          <br />
          Please upload the recording file to create your note
        </div>
        <Image src={"/imgs/robot.svg"} width={727} height={449} alt="robot" />
        <CustomButton text="Upload" />
      </div>
    </Header>
  );
}
