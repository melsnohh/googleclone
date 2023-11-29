import ImageSearchResults from '@/components/ImageSearchResults';
import React from 'react'

export default async function ImageSearchPage({searchParams}) {
   
    
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}
    &cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image`)

    if(!response.ok){
        throw new Error ("Something went wrong");
    }

    const data = await response.json()


    const results = data.items 


    if(!results){
        return <div className='flex flex-col justify-center text-center pt-10'>
            <h1 className='text-3xl mb-4'>No results found</h1>
            <p className='text-lg'>Try searching something else or go back to home page 
                
                <Link className='text-blue-500 ml-1' href={'/'}>Home.</Link>
            </p>
        </div>
    }
        
  return (
    <div>
        {results && <ImageSearchResults results={results} /> }
    </div>
  )

}
