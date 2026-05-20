import { Dumbbell, Users, Gamepad2, BookOpen } from "lucide-react";

const activities = [
  {
    icon: Dumbbell,
    title: "Sporta zāle",
    color: "red",
    text: "Pirmdienās un ceturtdienās pēc lekcijām eju uz sporta zāli. Ir universitātes zāle, kur studenti var iet par maksu. Tas palīdz atpūsties pēc smagām dienām.",
  },
  {
    icon: Users,
    title: "Laiks ar draugiem",
    color: "green",
    text: "Reizi nedēļā esam kopā — dažreiz kafejnīcā, dažreiz kāda dzīvoklī. Ne vienmēr runājam par studijām. Tas ir labs veids, kā atpūsties un neatrasties visu laiku pie ekrāna.",
  },
  {
    icon: Gamepad2,
    title: "Spēles un filmas",
    color: "violet",
    text: "Vakaros, kad nav steidzami jāizdara uzdevumi, spēlēju vai skatos seriālu. Dažreiz tas aiziet ilgāk nekā plānots. Bet nav jājūtas vainīgam — atpūta ir vajadzīga.",
  },
  {
    icon: BookOpen,
    title: "Dažreiz tomēr mācās",
    color: "blue",
    text: "Nedēļas nogalē bieži vien nākas apskatīt lekciju materiālu vai strādāt pie projekta. Tas nav plānots brīvais laiks, bet reizēm nav citas izvēles. Kafija palīdz.",
  },
];

const colorMap: Record<string, string> = {
  red: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
  green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  violet: "bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400",
  blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
};

export function BrivaisLaiks() {
  return (
    <section id="brivais-laiks" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30">
          <Gamepad2 size={28} className="text-green-600 dark:text-green-400" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Brīvais laiks</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
          Ne visa nedēļa ir tikai mācīšanās. Jāatrod laiks atpūtai, citādi burnout nāk ātrāk
          nekā domā. Ir dažādas lietas, ko daru, kad nav jāsēž pie koda — vismaz teorētiski.
          Praksē dažreiz brīvais laiks pārvēršas par &ldquo;steidzamu uzdevumu darīšanu vakaros&rdquo;.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {activities.map((a) => {
          const Icon = a.icon;
          return (
            <div
              key={a.title}
              className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
            >
              <div className={`flex items-center justify-center w-10 h-10 rounded-lg mb-3 ${colorMap[a.color]}`}>
                <Icon size={20} />
              </div>
              <h3 className="font-semibold text-sm mb-2">{a.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{a.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
