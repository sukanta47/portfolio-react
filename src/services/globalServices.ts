export const globalServices = {
  getWikiPagePreview: async (pageName: string) => {
    try {
      const response = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${pageName}`
      );
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error("ERROR FETCHING WIKI PAGE PREVIEW:", error);
    }
  },
};
