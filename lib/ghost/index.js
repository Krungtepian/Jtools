import GhostContentAPI from "@tryghost/content-api";

['GHOST_URL' ,'GHOST_KEY'].forEach(key => {
  if(!key) throw new Error(`${key} not specified in Environment Variable`)
})

const api = new GhostContentAPI({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_KEY,
  version: "v5.0"
})

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });
}