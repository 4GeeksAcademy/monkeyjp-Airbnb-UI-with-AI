import Image from "next/image";
import type { Host } from "../types/listing";

type HostInfoProps = {
  host: Host;
};

export default function HostInfo({ host }: HostInfoProps) {
  return (
    <div className="flex items-center gap-2 border-y border-zinc-200 py-4">
      <Image
        src={host.avatarUrl}
        alt={`Avatar de ${host.name}`}
        width={48}
        height={48}
        className="h-11 w-11 rounded-full object-cover"
      />
      <div>
        <p className="font-semibold text-zinc-900">Anfitrión: {host.name}</p>
        <p className="text-sm text-zinc-600">{host.yearsHosting} años como anfitrión</p>
      </div>
    </div>
  );
}
