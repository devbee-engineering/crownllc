const locations = [
    {
      city: "Dubai",
      address: [
        "Building No 29, St 13",
        "Industrial Area 1, Ras Al Khor",
      ],
    },
    {
      city: "Abu Dhabi",
      address: [
        "office no 303, Makateb Building",
        "maktoum road, Deira - Dubai, UAE",
      ],
    },
    {
      city: "Riyadh",
      address: [
        "Tatweer Towers, Tower No 1",
        "Ground Floor, King Fahad Rd",
      ],
    },
  ];
  
  export function Locations() {
    return (
      <div className="w-full">
        <h2 className="text-sm uppercase tracking-widest text-black/60 mb-8">
          Locations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div key={location.city}>
              <h3 className="font-medium text-black mb-3">{location.city}</h3>
              <address className="not-italic text-sm text-black/80 leading-relaxed">
                {location.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
            </div>
          ))}
        </div>
      </div>
    );
  }
  