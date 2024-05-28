import { z } from 'zod';

const AddonSchema = z
  .object({
    addon_authors: z.string(),
    addon_categories: z.array(z.string()),
    addon_downloads: z.number(),
    addon_followers: z.number(),
    addon_icon_url: z.string(),
    addon_name: z.string(),
    addon_project_id: z.string(),
    addon_short_descriptions: z.string(),
    addon_slug: z.string(),
    addon_versions: z.array(z.string()),
    manual_check: z.literal('True'),
  })
  .strict()
  .transform(addon => {
    return {
      authors: [addon.addon_authors],
      categories: addon.addon_categories,
      downloads: addon.addon_downloads,
      followers: addon.addon_followers,
      icon: addon.addon_icon_url,
      name: addon.addon_name,
      id: addon.addon_project_id,
      shortDescription: addon.addon_short_descriptions,
      slug: addon.addon_slug,
      versions: [...addon.addon_versions].reverse(),
      manuallyChecked: addon.manual_check === 'True',
    };
  });

export type Addon = z.infer<typeof AddonSchema>;

export async function getAddons() {
  const response = await fetch(
    'https://blueprint-site.github.io/static/data/final_data.json',
  );
  const json = (await response.json()) as Record<number, Addon>;

  return z
    .record(z.string(), AddonSchema)
    .transform(record => Object.values(record))
    .parse(json);
}
