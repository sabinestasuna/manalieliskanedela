export function Hero() {
  return (
    <section
      id="sakums"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-14"
    >
      <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 max-w-2xl">
        Viena darba nedēļa datorikas studentes dzīvē
      </h1>

      <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mb-6 leading-relaxed">
        Kā izskatās tipiska studiju nedēļa Latvijas Universitātē? Lekcijas, mājasdarbi,
        kavēšanās pie koda un nedaudz brīvā laika - viss vienā lapā.
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-500 font-medium">
        Sabīne Stašūna · LU Datorikas studente
      </p>

      <a
        href="#lekcijas"
        className="mt-10 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
      >
        Lasīt tālāk ↓
      </a>
    </section>
  );
}
