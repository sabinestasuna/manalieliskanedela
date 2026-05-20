type IllustrationProps = {
  variant: "hero" | "lectures" | "tasks" | "platforms" | "route" | "freeTime";
  title: string;
};

const baseLabel = "Autora veidota ilustrācija";

export function StudyIllustration({ variant, title }: IllustrationProps) {
  const label = `${baseLabel}: ${title}`;

  if (variant === "hero") {
    return (
      <figure className="w-full max-w-3xl mx-auto mb-8" aria-label={label}>
        <svg viewBox="0 0 900 420" role="img" className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <title>{label}</title>
          <rect width="900" height="420" fill="currentColor" className="text-white dark:text-gray-950" />
          <rect x="70" y="76" width="760" height="250" rx="18" fill="#f8fafc" className="dark:fill-gray-900" />
          <rect x="110" y="112" width="250" height="160" rx="12" fill="#dbeafe" className="dark:fill-blue-950" />
          <rect x="135" y="138" width="200" height="18" rx="9" fill="#2563eb" opacity="0.9" />
          <rect x="135" y="174" width="150" height="14" rx="7" fill="#0f172a" opacity="0.35" className="dark:fill-gray-200" />
          <rect x="135" y="202" width="180" height="14" rx="7" fill="#0f172a" opacity="0.25" className="dark:fill-gray-200" />
          <rect x="420" y="112" width="180" height="160" rx="12" fill="#dcfce7" className="dark:fill-green-950" />
          <path d="M455 222c28-44 58-56 94-72" fill="none" stroke="#16a34a" strokeWidth="12" strokeLinecap="round" />
          <circle cx="462" cy="224" r="16" fill="#16a34a" />
          <circle cx="552" cy="150" r="16" fill="#16a34a" />
          <rect x="646" y="112" width="120" height="160" rx="12" fill="#ffedd5" className="dark:fill-orange-950" />
          <path d="M676 242h60l-10-66h-40l-10 66Z" fill="#f97316" opacity="0.85" />
          <circle cx="696" cy="166" r="10" fill="#f97316" />
          <circle cx="716" cy="166" r="10" fill="#f97316" />
          <rect x="260" y="300" width="380" height="36" rx="18" fill="#e2e8f0" className="dark:fill-gray-800" />
          <rect x="295" y="310" width="130" height="16" rx="8" fill="#2563eb" opacity="0.8" />
          <rect x="445" y="310" width="160" height="16" rx="8" fill="#16a34a" opacity="0.8" />
        </svg>
        <figcaption className="sr-only">{label}</figcaption>
      </figure>
    );
  }

  const content = {
    lectures: (
      <>
        <rect x="72" y="58" width="336" height="212" rx="16" fill="#f8fafc" className="dark:fill-gray-900" />
        <rect x="102" y="92" width="276" height="28" rx="8" fill="#bbf7d0" />
        <rect x="102" y="142" width="126" height="28" rx="8" fill="#dbeafe" />
        <rect x="252" y="142" width="126" height="28" rx="8" fill="#fed7aa" />
        <rect x="102" y="192" width="276" height="28" rx="8" fill="#dbeafe" />
        <path d="M110 252h258" stroke="#64748b" strokeWidth="8" strokeLinecap="round" opacity="0.35" />
      </>
    ),
    tasks: (
      <>
        <rect x="92" y="58" width="296" height="212" rx="18" fill="#f8fafc" className="dark:fill-gray-900" />
        <path d="M134 115h36l18 18 42-50" fill="none" stroke="#16a34a" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="250" y="92" width="90" height="18" rx="9" fill="#16a34a" opacity="0.7" />
        <path d="M134 175h36l18 18 42-50" fill="none" stroke="#eab308" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="250" y="152" width="110" height="18" rx="9" fill="#eab308" opacity="0.7" />
        <path d="M142 228l50-50m0 50-50-50" stroke="#ef4444" strokeWidth="12" strokeLinecap="round" />
        <rect x="250" y="208" width="74" height="18" rx="9" fill="#ef4444" opacity="0.7" />
      </>
    ),
    platforms: (
      <>
        <rect x="104" y="64" width="112" height="82" rx="16" fill="#dbeafe" />
        <rect x="264" y="64" width="112" height="82" rx="16" fill="#fce7f3" />
        <rect x="104" y="184" width="112" height="82" rx="16" fill="#e0f2fe" />
        <rect x="264" y="184" width="112" height="82" rx="16" fill="#fee2e2" />
        <path d="M216 105h48M160 146v38M320 146v38M216 225h48" stroke="#64748b" strokeWidth="8" strokeLinecap="round" opacity="0.45" />
        <circle cx="160" cy="105" r="20" fill="#2563eb" />
        <circle cx="320" cy="105" r="20" fill="#a855f7" />
        <circle cx="160" cy="225" r="20" fill="#0284c7" />
        <circle cx="320" cy="225" r="20" fill="#dc2626" />
      </>
    ),
    route: (
      <>
        <rect x="70" y="78" width="340" height="174" rx="18" fill="#f8fafc" className="dark:fill-gray-900" />
        <path d="M116 210c60-86 126-30 174-98 22-32 52-44 84-26" fill="none" stroke="#f59e0b" strokeWidth="14" strokeLinecap="round" />
        <circle cx="116" cy="210" r="18" fill="#16a34a" />
        <circle cx="374" cy="86" r="18" fill="#2563eb" />
        <rect x="150" y="236" width="74" height="24" rx="12" fill="#16a34a" opacity="0.8" />
        <rect x="282" y="52" width="100" height="24" rx="12" fill="#2563eb" opacity="0.8" />
      </>
    ),
    freeTime: (
      <>
        <rect x="84" y="80" width="312" height="170" rx="18" fill="#f8fafc" className="dark:fill-gray-900" />
        <circle cx="158" cy="160" r="42" fill="#dcfce7" />
        <path d="M136 160h44m-22-22v44" stroke="#16a34a" strokeWidth="10" strokeLinecap="round" />
        <rect x="238" y="118" width="94" height="84" rx="16" fill="#ede9fe" />
        <path d="M258 158h54m-42-18v36m30-36v36" stroke="#7c3aed" strokeWidth="8" strokeLinecap="round" />
        <path d="M128 260h224" stroke="#64748b" strokeWidth="8" strokeLinecap="round" opacity="0.35" />
      </>
    ),
  }[variant];

  return (
    <figure className="w-full mb-8" aria-label={label}>
      <svg viewBox="0 0 480 320" role="img" className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <title>{label}</title>
        <rect width="480" height="320" fill="currentColor" className="text-white dark:text-gray-950" />
        {content}
      </svg>
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  );
}
