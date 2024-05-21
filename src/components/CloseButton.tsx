import { ModeToggle } from "./ModeToggle";


export default function CloseButton() {
  return (
    <div className="flex gap-2 justify-between items-center bg-secondary p-4 rounded-t-lg">
      <div className="flex gap-2 items-center">
        <div className="cursor-pointer bg-red-500 rounded-full w-4 h-4"></div>
        <div className="cursor-pointer bg-yellow-500 rounded-full w-4 h-4"></div>
        <div className="cursor-pointer bg-green-500 rounded-full w-4 h-4"></div>
      </div>
      <ModeToggle />
    </div>
  );
}
