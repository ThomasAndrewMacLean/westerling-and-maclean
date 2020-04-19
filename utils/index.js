export const add = (a, b) => {
  return a + b;
};

export const getImageUrl = (context, id, full) => {
  return full
    ? context.find((p) => p.id === id).pic[0].url
    : context.find((p) => p.id === id).pic[0].thumbnails.large.url;
};

export const scrollToContactForm = () => {
  document.querySelector('#contact').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  });
};

const isProduction = process.env.NODE_ENV === 'production';
export const prefix = isProduction ? '' : '';

// Prefix is needed when we host the site on github pages
// export const prefix = isProduction ? '/westerling-and-maclean' : '';
