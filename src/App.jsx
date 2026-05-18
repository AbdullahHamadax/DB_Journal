import Header from "./components/Header";
import Entry from "./components/Entry";
import entryData from "./data";

export default function App() {
  const entryArray = entryData.map((entry) => (
    <Entry key={entry.id} entry={entry} />
  ));
  return (
    <>
      <Header />
      {entryArray}
    </>
  );
}
