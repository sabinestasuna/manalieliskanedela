import { Calendar } from "lucide-react";

const schedule = [
  { day: "Pirmdiena", time: "09:00–12:00", subject: "Programmēšana (Java)", type: "Klātiene", location: "Datorzinātņu fakultāte" },
  { day: "Pirmdiena", time: "14:00–16:00", subject: "Datubāzes", type: "Attālināti", location: "Zoom" },
  { day: "Otrdiena", time: "10:00–12:00", subject: "Algoritmi un datu struktūras", type: "Klātiene", location: "Auditorija 413" },
  { day: "Trešdiena", time: "09:00–11:00", subject: "Web tehnoloģijas", type: "Klātiene", location: "Datorzinātņu fakultāte" },
  { day: "Ceturtdiena", time: "13:00–15:00", subject: "Datubāzes (laboratorija)", type: "Klātiene", location: "Datorklase" },
  { day: "Piektdiena", time: "10:00–12:00", subject: "Programmēšana (lekcija)", type: "Attālināti", location: "Teams" },
];

export function Lekcijas() {
  return (
    <section id="lekcijas" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30">
          <Calendar size={28} className="text-green-600 dark:text-green-400" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Lekciju grafiks</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
          Nedēļā man ir apmēram sešas lekcijas. Dažas ir klātienē, citas var klausīties mājās.
          Klātienē iet ir vērts — tur var pajautāt jautājumus un iepazīties ar kursa biedriem.
          Attālinātās ir ērti, bet viegli aizmirst un palaist garām. Grafiks mainās katru semestri,
          bet šonedēļ tas izskatās šādi. Programmēšana un algoritmi ir grūtākie priekšmeti —
          tur vajag pievērst uzmanību katrai lekcijas minūtei.
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400">
            <tr>
              <th className="text-left px-4 py-3 font-medium">Diena</th>
              <th className="text-left px-4 py-3 font-medium">Laiks</th>
              <th className="text-left px-4 py-3 font-medium">Priekšmets</th>
              <th className="text-left px-4 py-3 font-medium">Veids</th>
              <th className="text-left px-4 py-3 font-medium hidden sm:table-cell">Vieta</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            {schedule.map((row, i) => (
              <tr key={i} className="bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                <td className="px-4 py-3 font-medium">{row.day}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.time}</td>
                <td className="px-4 py-3">{row.subject}</td>
                <td className="px-4 py-3">
                  <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                    row.type === "Klātiene"
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                      : "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                  }`}>
                    {row.type}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-500 dark:text-gray-500 hidden sm:table-cell">{row.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
