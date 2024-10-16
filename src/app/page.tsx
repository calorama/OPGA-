import Image from "next/image";
import starImage from './images/star.jpg'
import NewsList from "@/components/newslist/NewsList";

export default function Home() {
  return (
  <div className="flex-col flex justify-center">
    <div className="flex justify-center">
      <Image src={starImage} width={120} height={120} alt="test"/>
    </div>
    <div className="flex justify-center align-text-center">
      <h1 className="xl:text-4xl text-2xl text-center">Организация Просветления Гахапара Армении</h1>
    </div>
    <div>
      <NewsList/>
    </div>
  </div>
  );
}
