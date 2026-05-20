import { Dumbbell, Users, Gamepad2, BookOpen } from "lucide-react";
import { StudyIllustration } from "@/components/StudyIllustrations";

const activities = [
  {
    icon: Dumbbell,
    title: "Kustība",
    color: "red",
    text: "Pēc garām lekcijām palīdz pastaiga vai sporta zāle. Kustība sakārto galvu pēc vairākām stundām pie datora.",
  },
  {
    icon: Users,
    title: "Draugi",
    color: "green",
    text: "Tikšanās ar draugiem atgādina, ka studijas nav tikai termiņi. Dažreiz pietiek ar stundu sarunu pie kafijas.",
  },
  {
    icon: Gamepad2,
    title: "Spēles un filmas",
    color: "violet",
    text: "Vakara atpūta palīdz pārslēgties no koda. Svarīgi tikai nepārvērst vienu sēriju par visu nakti.",
  },
  {
    icon: BookOpen,
    title: "Mācības nedēļas nogalē",
    color: "blue",
    text: "Daļa brīvā laika tomēr aiziet atkārtošanai un projektiem. Tas nav ideāli, bet palīdz nepazaudēt ritmu.",
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
        <StudyIllustration variant="freeTime" title="līdzsvars starp atpūtu, draugiem un mācībām" />
        <p className="text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
          Brīvais laiks datorikas studenta nedēļā nav tukša vieta grafikā, bet apzināti jāizcīna.
          Ja visu laiku domā tikai par lekcijām, mājasdarbiem un termiņiem, nogurums sakrājas ļoti
          ātri. Tāpēc cenšos nedēļā atstāt vietu kustībai, draugiem un mierīgākiem vakariem.
          Dažreiz tas izdodas labi, bet citreiz brīvais laiks pārvēršas par vēl vienu iespēju
          pabeigt iesākto uzdevumu. Man palīdz mazi pārtraukumi: pastaiga pēc lekcijām, saruna ar
          draugiem, filma vai spēle vakarā. Tajā pašā laikā pilnībā aizmirst par studijām arī nevar,
          jo nedēļas nogalē bieži jāatkārto teorija vai jāpielabo projekts. Šī sadaļa rāda, ka
          līdzsvars nav perfekts, bet tas ir svarīgs. Bez atpūtas pat interesanti priekšmeti sāk
          šķist smagi, un koda kļūdas kļūst arvien grūtāk pamanāmas.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {activities.map((a) => {
          const Icon = a.icon;
          return (
            <div
              key={a.title}
              className="p-5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
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
