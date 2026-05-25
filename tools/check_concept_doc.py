from pathlib import Path
import sys

from docx import Document

sys.stdout.reconfigure(encoding="utf-8")


doc = Document("docs/autora-koncepcijas-apraksts-labots.docx")
text = "\n".join(paragraph.text for paragraph in doc.paragraphs)

checks = [
    "vizuālā",
    "tehniskā",
    "risinājuma",
    "Sabīne Stašūna",
    "nedēļa",
    "Tīmekļa",
    "mājasdarbiem",
    "piekļūstamības",
]

for value in checks:
    print(f"{value}: {value in text}")

print(f"question_marks: {text.count('?')}")
Path("docs/docx-extracted-check.txt").write_text(text, encoding="utf-8")
