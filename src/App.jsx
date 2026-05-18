import Header from "./components/Header";
import Entry from "./components/Entry";
import entryData from "./data";

export default function App() {
  const entryArray = entryData.map((entry) => (
    <Entry
      img={entry.img}
      title={entry.title}
      country={entry.country}
      googleMapsLink={entry.googleMapsLink}
      dates={entry.dates}
      text={entry.text}
    />
  ));
  return (
    <>
      <Header />
      {entryArray}
    </>
  );
}
