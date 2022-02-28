import { getRockets } from './rockets';

export const getRocketsFromAPI = () => async (storing) => {
  const result = await fetch('https://api.spacexdata.com/v3/rockets');
  const rocketsData = await result.json();
  const rockets = Object.entries(rocketsData).map(([id, props]) => {
    const { rocketName, description, flickrImages } = props[0];
    return {
      id,
      rocket_name: rocketName,
      description,
      flickr_images: flickrImages,
    };
  });
  storing(getRockets(rockets));
};

export default getRocketsFromAPI;
