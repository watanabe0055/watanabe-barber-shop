import Image from "next/image";
import Link from "next/link";

export const HeaderComponent = () => {
  return (
    <>
      <div className="w-1/2 h-auto flex justify-between items-center">
        <Link href={"/"}>
          <div className="flex-shrink-0">
            <Image
              src={"watanabe_barber.svg"}
              alt={"渡辺理髪店のロゴ"}
              width={100}
              height={100}
            />
          </div>
        </Link>
        <div className="flex space-x-4">
          <Link href={"/news"} passHref>
            <p className="block text-lg hover:text-blue-700 transition-colors duration-200">
              お知らせ
            </p>
          </Link>
          <Link href={"/menu"} passHref>
            <p className="block text-lg hover:text-blue-700 transition-colors duration-200">
              メニュー
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};
