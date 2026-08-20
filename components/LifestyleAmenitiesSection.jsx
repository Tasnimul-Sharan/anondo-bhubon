import Image from "next/image";
import { amenities } from "@/data/anondoBhubonData";

export default function LifestyleAmenitiesSection() {
  return (
    <section className="relative overflow-hidden bg-off_white py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-px bg-border_color" />
        <div className="absolute right-0 top-0 h-full w-px bg-border_color" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-6 lg:px-12">
        <div className="mb-14 max-w-4xl">
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-12 bg-secondary" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary/70">
              Lifestyle Amenities
            </p>
          </div>

          <h2 className="mt-5 text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-primary sm:text-5xl">
            Everyday comfort, wellness and community life in one township.
          </h2>

          <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-primary/70">
            Explore the planned lifestyle facilities of Anondo Bhubon, shown one
            by one with dedicated space for each amenity, visual, and community
            purpose.
          </p>
        </div>

        <div className="space-y-8">
          {amenities.map((item, index) => {
            const isReverse = index % 2 === 1;

            return (
              <article
                key={`${item.title}-${item.image}`}
                className="group overflow-hidden border border-border_color bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_70px_rgba(44,58,131,0.14)]"
              >
                <div
                  className={`grid min-h-[500px] ${
                    isReverse
                      ? "lg:grid-cols-[0.65fr_1.35fr] xl:grid-cols-[0.7fr_1.45fr]"
                      : "lg:grid-cols-[1.35fr_0.65fr] xl:grid-cols-[1.45fr_0.7fr]"
                  }`}
                >
                  <div
                    className={`relative min-h-[380px] overflow-hidden bg-primary/10 sm:min-h-[460px] lg:min-h-full ${
                      isReverse ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1280px) 68vw, (min-width: 1024px) 62vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/5 to-transparent" />

                    <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center bg-primary text-sm font-bold text-white shadow-sm">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div
                    className={`flex flex-col justify-center p-7 sm:p-9 lg:p-12 ${
                      isReverse ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="w-fit bg-secondary/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-secondary">
                      Lifestyle Facility
                    </div>

                    <h3 className="mt-6 text-3xl font-bold leading-tight tracking-[-0.02em] text-primary sm:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-base font-medium leading-8 text-primary/72">
                      {item.description ||
                        "A planned township facility designed to support comfort, convenience and community lifestyle."}
                    </p>

                    <div className="mt-8 border-t border-border_color pt-6">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary/55">
                          Community Lifestyle
                        </p>

                        <div className="relative h-[3px] w-full max-w-[180px] overflow-hidden bg-primary/10">
                          <span className="absolute left-0 top-0 h-full w-16 bg-secondary transition-all duration-500 ease-out group-hover:w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
