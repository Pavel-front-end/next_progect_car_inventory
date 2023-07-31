import { fetchCars } from "@utils";
import { HomeProps } from "@types";

import { CarCard, ShowMore } from "@components";
import ContainerAddCar from "@components/ContainerAddCar";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    year: searchParams.year || 2020,
    limit: searchParams.limit || 10,
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow-hidden'>

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <ContainerAddCar />
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>

        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
