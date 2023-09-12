export async function GET() {
  const news = [
    {id : 1 , title : "new1"},
    {id : 2 , title : "new2"},
    {id : 3 , title : "new3"},
    {id : 4 , title : "new4"},
    {id : 5 , title : "new5"},
    {id : 6 , title : "new6"},
  ]

  console.log('endpoint called')

  return new Response(JSON.stringify({ news }))
}