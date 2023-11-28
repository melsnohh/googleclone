import React from 'react'

export default async function WebSearchPage({searchParams}) {

    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}
    &cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`)

    const data = await response.json()

    const results = data.items 
        
  return (
    <div>
        {results && results.map((result)=> (
            <div id={result.cachId}>
                {result.title}
             </div>
        ))}
    </div>
  )
}
