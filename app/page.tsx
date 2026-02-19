import { IdentityCardDemo } from "@/components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex justify-center">
      <div className="w-1/2">
        <div className="flex justify-center items-center gap-4 dark:text-white">
            <div className="text-xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, mollitia? Quibusdam tempore nobis esse, nulla mollitia omnis eius earum sed. Suscipit sit natus sapiente. Accusamus sit repudiandae iusto deleniti commodi.
            </div>
            <div>
                <IdentityCardDemo/>
            </div>
        </div>
      </div>
    </div>
  );
}
