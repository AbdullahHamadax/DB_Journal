export default function Entry() {
  return (
    <main className="p-11">
      <section>
        <div className="flex items-center gap-5">
          <img
            src="https://scrimba.com/links/travel-journal-japan-image-url"
            alt="mount fuji"
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
                  JAPAN
                </p>
              </div>

              <p className="text-[#918E9B] underline text-xs">
                View on Google Maps
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-2xl">Mount Fuji</p>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-xs">12 Jan, 2023 - 24 Jan, 2023</p>
                <p className="text-xs">
                  Mount Fuji is the tallest mountain in Japan, standing at 3,776
                  meters (12,380 feet). Mount Fuji is the single most popular
                  tourist site in Japan, for both Japanese and foreign tourists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
