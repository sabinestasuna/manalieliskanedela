import Image from "next/image";

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
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Ceļš uz universitāti</h2>

          <div className="grid w-full max-w-3xl gap-6 md:grid-cols-[minmax(0,1fr)_230px] md:items-start">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Klātienes lekciju dienās mans maršruts sākas Juglā un beidzas Latvijas Universitātē,
              Raiņa bulvārī 19. Tas nav ļoti garš ceļš, tomēr no rīta tas prasa disciplīnu, jo
              jārēķinās ar transportu, sastrēgumiem un laiku līdz auditorijai. Parasti izeju no mājas
              agrāk, nekā gribētos, lai centrā nebūtu jāskrien. Brauciena laikā pārskatu lekciju
              pierakstus, Outlook paziņojumus vai vienkārši mēģinu pamosties. Šis ceļš ir daļa no
              studiju rutīnas: attālināti var pieslēgties dažās minūtēs, bet klātienē jāsaplāno viss
              rīts. Tomēr klātienes nodarbībām ir savs ieguvums. Auditorijā ir vieglāk pajautāt
              pasniedzējam, aprunāties ar kursa biedriem un just, ka studijas nav tikai ekrāns mājās.
              Tāpēc ceļš no Juglas uz centru ir mazliet nogurdinošs, bet arī vajadzīgs.
            </p>

            <figure className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm">
              <Image
                src="/images/route-trams.png"
                alt="Tramvaji pilsētas centrā kā ilustrācija ceļam uz universitāti"
                width={1920}
                height={1080}
                className="aspect-[4/5] w-full object-cover"
              />
            </figure>
          </div>
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
