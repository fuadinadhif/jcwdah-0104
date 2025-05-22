import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-light-grayish-blue min-h-screen grid place-items-center p-8">
      <div className="h-fit w-full max-w-[800px] bg-white drop-shadow-[0px_15px_25px_rgba(158,175,194,0.5)] rounded-xl grid grid-cols-[1.25fr_2fr] overflow-hidden">
        <div className="h-full w-full relative">
          <Image
            src="/drawers.jpg"
            alt="Image of a drawers"
            fill
            className="object-cover object-left"
          />
        </div>
        <div className="h-full w-full p-[32px]">
          <p className="text-very-dark-grayish-blue font-manrope text-[24px] mb-[12px] font-[700]">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </p>
          <p className="text-desaturated-dark-blue text-[13px] mb-[12px]">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete
          </p>
          <div className="h-[48px] w-full grid grid-cols-[auto_1fr_auto]">
            <div className="h-[48px] rounded-full overflow-hidden w-[48px] bg-amber-400 relative">
              <Image src="/avatar-michelle.jpg" alt="Image profile" fill />
            </div>
            <div className="w-full h-full bg-sky-400"></div>
            <div className="w-full h-full bg-pink-400"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
