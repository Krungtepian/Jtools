'use server'

import { getPosts } from '@/lib/ghost'

export default async function posts() {
  try {
    const p = await getPosts();
    console.log(p)
  } catch(e) {
    console.error(e)
  }
}