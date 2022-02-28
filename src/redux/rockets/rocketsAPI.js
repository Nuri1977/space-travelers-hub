import { getRockets } from './rockets';

export const getRocketsFromAPI = () => async (nuri) => {
  const result = await fetch('https://api.spacexdata.com/v3/rockets');
  const rocketsData = await result.json();
  const rockets = rocketsData.map((data) => ({
    id: data.id,
    rocketName: data.rocket_name,
    description: data.description,
    flickrImages: data.flickr_images,

  }));
  nuri(getRockets(rockets));
};

export default getRocketsFromAPI;
