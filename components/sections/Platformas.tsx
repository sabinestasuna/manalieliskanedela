import Image from "next/image";
import { MessageSquare, type LucideIcon } from "lucide-react";

type Platform = {
  name: string;
  icon?: LucideIcon;
  iconImage?: string;
  color?: string;
  description: string;
};

const platforms: Platform[] = [
  {
    name: "Moodle (e-studijas)",
    iconImage: "/images/moodle-icon.png",
    description:
      "Šeit atrodam uzdevumus, lekciju materiālus, testus un atzīmes. Ja kaut kas nav Moodle, tad parasti sākas neliela detektīva spēle.",
  },
  {
    name: "Microsoft Teams",
    icon: MessageSquare,
    color: "purple",
    description:
      "Grupas projektu sarunām, attālinātiem praktikumiem un konsultācijām. Teams palīdz, bet paziņojumu tur mēdz būt vairāk nekā vajag.",
  },
  {
    name: "Zoom",
    iconImage: "/images/platform-zoom-icon.png",
    description:
      "Attālinātajām lekcijām, kur galvenais ir nepalaist garām sākumu un pārbaudīt, vai mikrofons nav ieslēgts nepareizajā brīdī.",
  },
  {
    name: "Outlook",
    iconImage: "/images/platform-outlook-icon.png",
    description:
      "Universitātes e-pastiem, pasniedzēju paziņojumiem un kalendāra uzaicinājumiem. Bez Outlook viegli nepamanīt termiņu maiņas.",
  },
  {
    name: "GitHub",
    iconImage: "/images/platform-github-icon.png",
    description:
      "Koda glabāšanai un grupas projektiem. Svarīgi iemācīties izmantot jau no sākuma, jo programmēšanā bez versiju kontroles ātri rodas haoss.",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  sky: "bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400",
  red: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
  gray: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
};

export function Platformas() {
  return (
    <section id="platformas" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Studiju platformas</h2>

        <div className="grid w-full max-w-3xl gap-6 md:grid-cols-[minmax(0,1fr)_230px] md:items-start">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Datorikas studijās nedēļa nenotiek tikai auditorijā. Liela daļa darba pārceļas uz
            platformām, kur jāatrod materiāli, jāiesniedz uzdevumi, jāpiedalās attālinātās nodarbībās
            un jāseko paziņojumiem. Moodle man ir galvenā vieta, kur pārbaudu termiņus, testus un
            lekciju failus. Teams izmantoju grupas projektam un konsultācijām, jo tur ir viegli
            sazvanīties un ātri nosūtīt failus. Zoom noder lekcijām, kurās pasniedzējs vēlas atsevišķu
            tiešsaistes telpu. Outlook ir vajadzīgs, lai nepalaistu garām e-pastus, izmaiņas grafikā
            un kalendāra uzaicinājumus. GitHub savukārt ir vieta, kur glabāju kodu un mācos strādāt
            ar versijām. Sākumā šī sistēma šķiet sadrumstalota, bet ar laiku katrai platformai
            izveidojas sava skaidra loma.
          </p>

          <figure className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm">
            <Image
              src="/images/study-platforms-meeting.jpg"
              alt="Darba tikšanās ar datoriem kā ilustrācija studiju platformām"
              width={1920}
              height={1080}
              className="aspect-[4/5] w-full object-cover"
            />
          </figure>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {platforms.map((p) => {
          const Icon = p.icon;

          return (
            <div
              key={p.name}
              className="flex gap-4 p-5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
            >
              {p.iconImage ? (
                <div className="shrink-0 h-11 w-11">
                  <Image
                    src={p.iconImage}
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11"
                    aria-hidden="true"
                  />
                </div>
              ) : Icon && p.color ? (
                <div className={`shrink-0 flex items-center justify-center w-11 h-11 rounded-lg ${colorMap[p.color]}`}>
                  <Icon size={22} />
                </div>
              ) : null}
              <div>
                <h3 className="font-semibold text-sm mb-1">{p.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{p.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
