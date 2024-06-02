import { getAddons } from '../../api/addons';

export async function loader() {
  const addons = await getAddons();

  return {
    addons,
  };
}
