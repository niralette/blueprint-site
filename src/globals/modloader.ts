export const modloaders = ['neoforge', 'forge', 'fabric', 'quilt'] as const;

export type Modloader = (typeof modloaders)[number];
