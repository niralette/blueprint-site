import { useEffect, useState } from 'react';
import { type Addon, getAddons } from '../../api/addons';

export function useAddons() {
  const [addons, setAddons] = useState<Addon[]>([]);

  useEffect(() => {
    getAddons().then(items => setAddons(items));
  }, []);

  return { addons };
}
