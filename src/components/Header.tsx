import Image from "next/image";

export default function Header(){
    return (
        <>
            <div className="flex justify-between bg-gray-1000 p-4">
            <div className="mr-4 mt-2">
                <Image alt="Talk to Me!" src="/logo.svg" width={120} height={120} />
            </div>
            <div>
                <Image alt="Dev Meet" src="/hero.svg" width={60} height={60} />
            </div>
            </div>
        </>
    );
}