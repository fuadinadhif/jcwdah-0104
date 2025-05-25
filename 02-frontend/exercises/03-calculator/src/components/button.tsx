export default function Button({
  buttonClass,
  divClass,
  content,
}: {
  buttonClass: string;
  divClass: string;
  content: string;
}) {
  return (
    <button
      className={`${buttonClass} w-[96px] h-[96px] rounded-lg font-space-grotesk text-[33px] font-light p-[16px]`}
    >
      <div
        className={`${divClass} rounded-full w-full h-full grid place-items-center`}
      >
        {content}
      </div>
    </button>
  );
}
