import Image from "next/image";

const activities = [
  {
    iconImage: "/images/activity-movement-icon.png",
    title: "Kustība",
    text: "Pēc garām lekcijām palīdz pastaiga vai sporta zāle. Kustība sakārto galvu pēc vairākām stundām pie datora.",
  },
  {
    iconImage: "/images/activity-friends-icon.png",
    title: "Draugi",
    text: "Tikšanās ar draugiem atgādina, ka studijas nav tikai termiņi. Dažreiz pietiek ar stundu sarunu pie kafijas.",
  },
  {
    iconImage: "/images/activity-games-icon.png",
    title: "Spēles un filmas",
    text: "Vakara atpūta palīdz pārslēgties no koda. Svarīgi tikai nepārvērst vienu sēriju par visu nakti.",
  },
  {
    iconImage: "/images/activity-study-icon.png",
    title: "Mācības nedēļas nogalē",
    text: "Daļa brīvā laika tomēr aiziet atkārtošanai un projektiem. Tas nav ideāli, bet palīdz nepazaudēt ritmu.",
  },
];

export function BrivaisLaiks() {
  return (
    <section id="brivais-laiks" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Brīvais laiks</h2>

        <div className="grid w-full max-w-3xl gap-6 md:grid-cols-[minmax(0,1fr)_230px] md:items-start">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
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

          <figure className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm">
            <Image
              src="/images/free-time-weights.jpg"
              alt="Hanteļu plaukts sporta zālē kā ilustrācija brīvajam laikam"
              width={1920}
              height={1280}
              className="aspect-[4/5] w-full object-cover"
            />
          </figure>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {activities.map((a) => {
          return (
            <div
              key={a.title}
              className="p-5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
            >
              <div className="mb-3 h-10 w-10">
                <Image
                  src={a.iconImage}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10"
                  aria-hidden="true"
                />
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
