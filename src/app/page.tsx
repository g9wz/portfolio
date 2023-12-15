import { metadata } from "./layout";

export default function Home() {
  return (
    <div>
      <h1 className="p-6 text-3xl font-bold">{metadata.title as string}</h1>
    </div>
  );
}
