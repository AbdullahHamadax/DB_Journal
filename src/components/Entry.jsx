export default function Entry(props) {
  console.log(props);
  return (
    <main className="p-11">
      <section>
        <div className="flex items-center gap-5">
          <img
            src={props.entry.img.src}
            alt={props.entry.img.alt}
            className="w-31.25 h-42 rounded-sm"
          />
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <img
                  src="./src/assets/marker.png"
                  alt="Marker Icon"
                  className="w-2.5"
                />
                <p className="tracking-[17%] leading-[100%] text-[0.70rem]">
                  {props.entry.country}
                </p>
              </div>

              <a
                href={props.entry.googleMapsLink}
                className="text-[#918E9B] underline text-xs cursor-pointer hover:text-[#d5d2e0]"
              >
                View on Google Maps
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-2xl">{props.entry.title}</p>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-xs">{props.entry.dates}</p>
                <p className="text-xs">{props.entry.text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
