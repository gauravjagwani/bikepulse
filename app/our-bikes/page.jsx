import { client } from "@/app/lib/sanity";
import BikeCategories from "@/components/BikeCategories";

const getData = async () => {
  const query = `*[_type == 'product'] {
    _id,
      name,
      description,
      images,
      price,
      prices_id,
      "slug": slug.current,
      "categories": categories[]-> {
        name
      }
  }`;
  const data = await client.fetch(query);
  return data;
};
const OurBikes = async () => {
  const bikes = await getData();
  console.log(bikes);
  return (
    <div>
      <BikeCategories bikes={bikes} />
    </div>
  );
};

export default OurBikes;
