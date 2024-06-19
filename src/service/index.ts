const contentful = require("contentful");

export const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN as string,
});

export const getEntriesByType = async (type: string) => {
  const response = await client.getEntries({
    content_type: type,
  });

  return response.items;
};

export const getBlogPosts = async () => {
  const results = await getEntriesByType("blogPost");
  const blogPosts = results.map((blog: { fields: any }) => blog.fields);
  return blogPosts;
};

export const getEntryBySlug = async (slug: any, type: any) => {
  const queryOptions = {
    content_type: type,
    "fields.slug[match]": slug,
  };
  const queryResult = await client.getEntries(queryOptions);
  return queryResult.items[0];
};

// New function to fetch all slugs
export const getAllSlugs = async () => {
  const results = await getEntriesByType("blogPost");
  const slugs = results.map(
    (item: { fields: { slug: any } }) => item.fields.slug
  );
  return slugs;
};
