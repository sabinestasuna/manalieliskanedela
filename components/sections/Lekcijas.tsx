"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const schedule = [
  {
    day: "Pirmdiena",
    note: "Intensīva diena ar divām klātienes lekcijām.",
    lessons: [
      { time: "09:00-10:30", subject: "Programmēšana un algoritmi", type: "Klātiene", location: "Raiņa bulvāris 19, 303. auditorija" },
      { time: "12:30-14:00", subject: "Matemātiskā loģika", type: "Klātiene", location: "Raiņa bulvāris 19, 12. auditorija" },
    ],
  },
  {
    day: "Otrdiena",
    note: "Viena attālināta lekcija, kuru viegli palaist garām.",
    lessons: [
      { time: "10:00-11:30", subject: "Datubāzes", type: "Attālināti", location: "Zoom" },
    ],
  },
  {
    day: "Trešdiena",
    note: "Divas dažādas lekcijas pēc kārtas.",
    lessons: [
      { time: "09:00-10:30", subject: "Web tehnoloģijas", type: "Klātiene", location: "Raiņa bulvāris 19, datorklase 16" },
      { time: "13:00-14:30", subject: "Datu struktūras", type: "Klātiene", location: "Raiņa bulvāris 19, 204. auditorija" },
    ],
  },
  {
    day: "Piektdiena",
    note: "Nedēļas noslēgums mājās pie datora.",
    lessons: [
      { time: "11:00-12:30", subject: "Programmēšanas praktikums", type: "Attālināti", location: "Microsoft Teams" },
    ],
  },
];

export function Lekcijas() {
  const [openDay, setOpenDay] = useState(schedule[0].day);

  return (
    <section id="lekcijas" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Lekciju grafiks</h2>

        <div className="grid w-full max-w-3xl gap-6 md:grid-cols-[minmax(0,1fr)_230px] md:items-start">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Šonedēļ mans lekciju grafiks ir diezgan nevienmērīgs: dažās dienās ir tikai viena
            nodarbība, bet pirmdienā un trešdienā lekcijas sakrājas viena pēc otras. Kopā ir sešas
            lekcijas četrās dienās, tāpēc nedēļa neizskatās pārāk pilna tikai tad, ja skatās uz to no
            malas. Klātienes nodarbības notiek Raiņa bulvārī 19, un uz tām ir vērts aiziet arī tad,
            ja no rīta gribas palikt mājās. Programmēšana, algoritmi un datu struktūras prasa īpašu
            uzmanību, jo pietiek uz brīdi novērsties, lai vēlāk nesaprastu, kāpēc kods nestrādā.
            Attālinātās lekcijas Zoom un Microsoft Teams ir ērtas, tomēr tām vajag stingru
            pašdisciplīnu. Mājās ir viegli atlikt pieslēgšanos uz “vēl piecām minūtēm”, tāpēc grafiku
            turu redzamā vietā un pirms katras lekcijas pārbaudu arī Outlook kalendāru.
          </p>

          <figure className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm">
            <Image
              src="/images/lecture-test-board.jpg"
              alt="Balta lapiņa ar uzrakstu Test kā ilustrācija lekciju grafikam"
              width={1920}
              height={1435}
              className="aspect-[4/5] w-full object-cover"
            />
          </figure>
        </div>
      </div>

      <div className="space-y-3">
        {schedule.map((day) => {
          const isOpen = openDay === day.day;

          return (
            <div
              key={day.day}
              className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenDay(isOpen ? "" : day.day)}
                className="w-full flex items-center justify-between gap-4 px-4 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                aria-expanded={isOpen}
              >
                <span>
                  <span className="block font-semibold">{day.day}</span>
                  <span className="block text-sm text-gray-500 dark:text-gray-500 mt-1">{day.note}</span>
                </span>
                <span className="flex items-center gap-3">
                  <span className="hidden sm:inline text-xs font-medium text-gray-500 dark:text-gray-500">
                    {day.lessons.length} {day.lessons.length === 1 ? "lekcija" : "lekcijas"}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </span>
              </button>

              {isOpen && (
                <div className="border-t border-gray-200 dark:border-gray-800 divide-y divide-gray-200 dark:divide-gray-800">
                  {day.lessons.map((lesson) => (
                    <div key={`${day.day}-${lesson.time}`} className="grid gap-3 px-4 py-4 sm:grid-cols-[120px_1fr_110px_1fr]">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{lesson.time}</p>
                      <p className="text-sm font-semibold">{lesson.subject}</p>
                      <p>
                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                          lesson.type === "Klātiene"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                            : "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                        }`}>
                          {lesson.type}
                        </span>
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">{lesson.location}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
