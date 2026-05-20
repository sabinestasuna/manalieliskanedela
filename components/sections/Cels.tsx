import { Bus } from "lucide-react";

const steps = [
  { time: "07:30", label: "Celšanās", desc: "Modinātājs. Dažreiz snūzē vienu reizi — bet tikai vienu." },
  { time: "07:50", label: "Brokastis", desc: "Ātrās pārslas vai tosts. Ēst vajag, citādi lekcijā nevar koncentrēties." },
  { time: "08:15", label: "Izeja no mājas", desc: "Mugursoma ar datoru un ūdens pudeli. Datoru aizmirst nedrīkst." },
  { time: "08:20", label: "Autobuss vai tramvajs", desc: "Brauciens aizņem apmēram 25–35 minūtes. Pa ceļam klausos podkāstu vai atkārtoju lekcijas materiālu." },
  { time: "08:55", label: "Ierašanās LU", desc: "Nedaudz pirms lekcijas sākuma. Labs laiks parunāt ar kursa biedriem vai dabūt kafiju." },
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
            Rītā celties ir grūtāk par jebkuru programmēšanas uzdevumu. Bet kad jau esi ārā
            un brauci ar tramvaju, kļūst labāk. Brauciens aizņem apmēram pusstundu — labs
            laiks ko noklausīties vai vienkārši paskatīties pa logu un pamodināt smadzenes.
            Klātienē iet ir vērts, pat ja attālinātās lekcijas šķiet ērtākas.
          </p>
        </div>

        <div className="relative max-w-xl mx-auto">
          <div className="absolute left-[22px] top-4 bottom-4 w-px bg-gray-200 dark:bg-gray-800" />
          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-amber-100 dark:bg-amber-900/30 z-10 text-xs font-bold text-amber-700 dark:text-amber-400 border-2 border-white dark:border-gray-900">
                  {step.time.replace(":",".")}
                </div>
                <div className="bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 p-4 flex-1">
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
