import Image from "next/image";

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
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Mājasdarbi un projekti</h2>

          <div className="grid w-full max-w-3xl gap-6 md:grid-cols-[minmax(0,1fr)_230px] md:items-start">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Mājasdarbi šonedēļ aizņem gandrīz tikpat daudz laika kā lekcijas. Kopā ir septiņi
              uzdevumi, un katram ir citāds ritms: dažus var pabeigt vienā vakarā, bet citi prasa
              vairākas piegājiena reizes. Programmēšanas uzdevumu par masīviem izdarīju ātri, jo
              tēma bija skaidra, savukārt SQL vaicājumi datubāzēs ieilga un nonāca kavēto darbu
              sarakstā. Web lapas uzdevums izskatījās vienkāršs tikai sākumā; beigās visvairāk laika
              paņēma sīkumi, piemēram, atstarpes, krāsas un mobilais skats. Grupas projektam
              satikāmies Teams sarunā, sadalījām prototipa daļas un pierakstījām termiņus. Grūtākais
              nav pats darbs, bet kopēja laika atrašana, jo katram ir savas lekcijas, darbi un nogurums.
              Šī sadaļa labi parāda, ka studijās plānošana ir tikpat svarīga kā koda rakstīšana.
            </p>

            <figure className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm">
              <Image
                src="/images/homework-code-todo.png"
                alt="Dators ar koda redaktoru un uzdevumu sarakstu kā ilustrācija mājasdarbiem un projektiem"
                width={1920}
                height={1271}
                className="aspect-[4/5] w-full object-cover"
              />
            </figure>
          </div>
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
