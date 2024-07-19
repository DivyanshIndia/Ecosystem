import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center  ">
      <Image src={"https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTFrZDQ5ZjRlb3dvMzdpejR6ZjhxNm8wZ2tlMjdzaXV6dWl1Z2EzaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LpaEBmLvex07qYQQ9w/giphy.gif"} alt="gif" layout="fill" />

    </main >
  );
}
