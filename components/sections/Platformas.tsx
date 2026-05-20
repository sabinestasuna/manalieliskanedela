import { Globe, MessageSquare, Video, GitBranch } from "lucide-react";

const platforms = [
  {
    name: "Moodle (e-studijas)",
    icon: Globe,
    color: "blue",
    description:
      "Šeit atrodam visus uzdevumus, lekciju materiālus un atzīmes. Katrs pasniedzējs ievieto savus materiālus šeit. Bez Moodle studijas nav iedomājamas.",
  },
  {
    name: "Microsoft Teams",
    icon: MessageSquare,
    color: "purple",
    description:
      "Grupas projektu komunikācijai un attālinātām konsultācijām. Dažreiz pasniedzēji raksta paziņojumus arī šeit. Notifications ir daudz.",
  },
  {
    name: "Zoom",
    icon: Video,
    color: "sky",
    description:
      "Attālinātajām lekcijām. Vienkāršāk nekā Teams, bet bieži ir problēmas ar audio. Kamera jāieslēdz, ja pasniedzējs pieprasa.",
  },
  {
    name: "GitHub",
    icon: GitBranch,
    color: "gray",
    description:
      "Koda glabāšanai un grupas projektiem. Svarīgi iemācīties izmantot jau no sākuma — darba tirgū bez tā neiztikt. Commits jāraksta angļu valodā.",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  sky: "bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400",
  gray: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
};

export function Platformas() {
  return (
    <section id="platformas" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-sky-100 dark:bg-sky-900/30">
          <Globe size={28} className="text-sky-600 dark:text-sky-400" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Studiju platformas</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
          Katru dienu izmantoju vismaz trīs dažādas platformas. Sākumā ir mulsinoši — kur
          meklēt uzdevumus, kur runāt ar grupu, kur iesniegt kodu. Laika gaitā pierod. Tālāk
          ir īss skaidrojums par katru.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {platforms.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.name}
              className="flex gap-4 p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
            >
              <div className={`shrink-0 flex items-center justify-center w-11 h-11 rounded-lg ${colorMap[p.color]}`}>
                <Icon size={22} />
              </div>
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
