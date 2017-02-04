import UrlAssembler from 'url-assembler';

// General Template
const baseUrl = 'https://www.farfetch.com/au/shopping/:gender/:category/items.aspx';

const category = {
  clothing : 'clothing-1',
  shoes : 'shoes-1',
  bags: 'bags-purses-1',
  suffix : '-1' // Farfetch url seems to have this at the end of their categories , What is this?
}

const templateFetch = category => (gender, page) => {
  // Build the url
  const url = UrlAssembler()
  .template(baseUrl)
  .param('gender', gender)
  .param('category', category)
  .query({
    page: page,
    format: 'json'
  })
  .toString();

  // Fetch
  return fetch(url)
  .then(function(response) {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response.json();
  });
};

export const fetchClothing = templateFetch(category.clothing);
export const fetchShoes = templateFetch(category.shoes);
export const fetchBags = templateFetch(category.bags);
