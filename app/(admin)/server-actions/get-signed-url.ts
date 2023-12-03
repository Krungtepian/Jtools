'use server'

import { Client } from 'minio'

['MIO_ACC', 'MIO_SEC'].forEach(v => {
  if(!process.env[v]) throw new Error(`Environment Variable: '${v}' not found`)
})

export default async function getSignedUrl(name: string) {
  const client = new Client({
    endPoint: 'localhost',
    port: 9000,
    accessKey: process.env.MIO_ACC!,
    secretKey: process.env.MIO_SEC!
  })
  client.presignedPutObject('uploads', name, (err, url) => {
    if (err) throw err
    return url;
})
}