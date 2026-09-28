import Image from "next/image";

export default function PhoneFrame({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`rounded-[1.6rem] border border-line bg-[#05090f] p-1.5 shadow-[var(--shadow)] ${className}`}>
      <div className="relative aspect-[390/844] overflow-hidden rounded-[1.25rem]">
        <Image src={src} alt={alt} fill sizes="200px" className="object-cover object-top" />
      </div>
    </div>
  );
}
