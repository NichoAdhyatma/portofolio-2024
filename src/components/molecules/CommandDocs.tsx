import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";

const CommandDocs = () => {
  const commands = [
    { command: "about", description: "Menampilkan informasi profil." },
    { command: "exp", description: "Menampilkan pengalaman kerja." },
    { command: "porto", description: "Menampilkan portofolio proyek." },
    { command: "skill", description: "Menampilkan keterampilan." },
    { command: "all", description: "Menampilkan semua informasi di atas." },
    { command: "clear", description: "Membersihkan semua output." },
  ];

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Dokumentasi Perintah</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {commands.map(({ command, description }) => (
            <li
              key={command}
              className="flex justify-between p-2 border rounded-md"
            >
              <span className="font-mono font-bold text-blue-500">
                {command}
              </span>
              <span>{description}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default CommandDocs;
