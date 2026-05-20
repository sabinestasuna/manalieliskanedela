import { Code2 } from "lucide-react";

const tasks = [
  { title: "Programmēšanas uzdevums par masīviem", deadline: "Pirmdiena, 23:59", status: "Izdarīts", color: "green" },
  { title: "Algoritmu analīzes darba lapa", deadline: "Otrdiena, 18:00", status: "Izdarīts", color: "green" },
  { title: "Datubāzu SQL vaicājumi", deadline: "Trešdiena, 23:59", status: "Kavējas", color: "red" },
  { title: "Web lapa ar HTML, CSS un JS", deadline: "Piektdiena, 23:59", status: "Procesā", color: "yellow" },
  { title: "Grupas projekts - prototips", deadline: "Svētdiena, 20:00", status: "Sākts", color: "yellow" },
  { title: "Matemātiskās loģikas tests", deadline: "Ceturtdiena, 12:00", status: "Jāatkārto", color: "yellow" },
  { title: "Datu struktūru praktiskais darbs", deadline: "Nākamnedēļ, pirmdiena", status: "Nav sākts", color: "red" },
];

const statusColors: Record<string, string> = {
  green: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  yellow: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  red: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
};

export function MajasDarbi() {
  return (
    <section id="majas-darbi" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900/30">
            <Code2 size={28} className="text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Mājasdarbi un projekti</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
            Šonedēļ man ir septiņi uzdevumi, tāpēc kalendārs ātri piepildās. Divus mazākos darbus
            izdevās pabeigt laikā, bet datubāzu SQL vaicājumi ievilkās ilgāk nekā plānots.
            Grupas projektam Teams sarunā sadalījām prototipa daļas, un tagad katram ir savs
            uzdevums. Visvairāk laika paņem web lapa un datu struktūru praktiskais darbs, jo tur
            nepietiek tikai izlasīt teoriju - kodam tiešām jāstrādā.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {tasks.map((task) => (
            <div
              key={task.title}
              className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="font-medium text-sm">{task.title}</p>
                <span className={`shrink-0 inline-block px-2 py-0.5 rounded text-xs font-medium ${statusColors[task.color]}`}>
                  {task.status}
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">Termiņš: {task.deadline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
