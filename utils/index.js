export const add = (a, b) => {
  return a + b;
};

export const getImageUrl = (context, id) => {
  //return context.find((p) => p.id === id).pic[0].url;
  return context.find((p) => p.id === id).pic[0].thumbnails.large.url;
};
