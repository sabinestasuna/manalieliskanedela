import { Bus } from "lucide-react";

const steps = [
  { time: "07:20", label: "Celšanās Juglā", desc: "Rīts sākas ar kafiju un ātru pārbaudi, vai somā ir dators, lādētājs un pieraksti." },
  { time: "07:55", label: "Izeja no mājas", desc: "No Juglas jāiziet laicīgi, jo sastrēgumi no rīta var viegli noēst desmit minūtes." },
  { time: "08:05", label: "Transports no Juglas", desc: "Braucu ar tramvaju vai autobusu centra virzienā. Pa ceļam atkārtoju lekcijas tēmu vai pārskatu Outlook paziņojumus." },
  { time: "08:40", label: "Pietura pie centra", desc: "Pēdējais posms ir kājām līdz Latvijas Universitātei Raiņa bulvārī 19." },
  { time: "08:50", label: "Raiņa bulvāris 19", desc: "Ierodos nedaudz pirms lekcijas, lai atrastu auditoriju un paspētu parunāt ar kursa biedriem." },
];

export function Cels() {
  return (
    <section id="cels" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-amber-100 dark:bg-amber-900/30">
            <Bus size={28} className="text-amber-600 dark:text-amber-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ceļš uz universitāti</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
            Universitāte atrodas Raiņa bulvārī 19, bet mans ceļš sākas Juglā. No rīta tas nozīmē
            agrāku celšanos, sabiedrisko transportu līdz centram un nelielu gājienu līdz lekcijai.
            Brauciens aizņem apmēram 45 minūtes, tāpēc klātienes dienās jāplāno vairāk laika nekā
            attālinātajām lekcijām mājās.
          </p>
        </div>

        <div className="relative max-w-xl mx-auto">
          <div className="absolute left-[22px] top-4 bottom-4 w-px bg-gray-200 dark:bg-gray-800" />
          <div className="flex flex-col gap-6">
            {steps.map((step) => (
              <div key={step.time} className="flex gap-4">
                <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-amber-100 dark:bg-amber-900/30 z-10 text-xs font-bold text-amber-700 dark:text-amber-400 border-2 border-white dark:border-gray-900">
                  {step.time.replace(":", ".")}
                </div>
                <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 p-4 flex-1">
                  <p className="font-semibold text-sm">{step.label}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
