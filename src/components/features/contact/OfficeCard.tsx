import { MapPinIcon, PhoneIcon } from "@/components/ui/icons/UtilityIcons";
import type { appConfig } from "@/packages/configs/app.config";

type OfficeCardProps = {
  office: (typeof appConfig)["contact"]["offices"][number];
};

const OfficeCard = ({ office }: OfficeCardProps) => (
  <div className="rounded-2xl border border-border bg-background p-5">
    <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
      <MapPinIcon className="size-4.5" />
    </span>

    <h3 className="mt-3 text-sm font-bold text-foreground">{office.title}</h3>
    <p className="mt-1 text-sm text-muted-foreground">{office.address}</p>

    <div className="mt-3 flex flex-col gap-1">
      {office.phone.map((phone) => (
        <a
          key={phone}
          href={`tel:${phone}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary"
        >
          <PhoneIcon className="size-3.5" />
          {phone}
        </a>
      ))}
    </div>
  </div>
);

export default OfficeCard;
