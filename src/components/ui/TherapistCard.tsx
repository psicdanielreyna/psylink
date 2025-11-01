import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

export type TherapistSummary = {
  id: string;
  fullName: string;
  city?: string | null;
  state?: string | null;
  modality: "ONLINE" | "IN_PERSON" | "HYBRID";
  specialties?: { label: string }[];
  avatarUrl?: string | null;
  headline?: string | null;
};

export default function TherapistCard({ t }: { t: TherapistSummary }) {
  const initials = t.fullName.split(" ").map(s => s[0]).slice(0,2).join("");
  const spec = t.specialties?.[0]?.label ?? "Psicoterapia";
  const location = [t.city, t.state].filter(Boolean).join(", ");

  return (
    <Link href={`/terapeuta/${t.id}`} className="block">
      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-4 flex gap-4">
          <Avatar className="h-14 w-14">
            {t.avatarUrl ? (
              <AvatarImage src={t.avatarUrl} alt={t.fullName} />
            ) : (
              <AvatarFallback>{initials}</AvatarFallback>
            )}
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold truncate">{t.fullName}</h3>
              <Badge variant="secondary">{t.modality === "ONLINE" ? "En línea" : t.modality === "IN_PERSON" ? "Presencial" : "Híbrida"}</Badge>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {t.headline ?? spec}
            </p>
            <div className="mt-2 flex flex-wrap gap-1">
              <Badge variant="outline" className="text-xs">{spec}</Badge>
              {location && <Badge variant="outline" className="text-xs">{location}</Badge>}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}