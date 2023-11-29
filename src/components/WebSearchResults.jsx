import Link from 'next/link'
import React from 'react'
import HTMLReactParser from 'html-react-parser'

export default function WebSearchResults({results}) {
  return (
    <div className='w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
        
            <div className='text-sm text-gray-600 mb-5 mt-3'>
                {`About ${results.searchInformation?.formattedTotalResults}
                 results (${results.searchInformation?.formattedSearchTime} seconds)`}
            </div>

            <div>
                {results.items?.map((result)=> (
                    <div className='mb-8 max-w-xl' key={result.link}> 
                        <div className='group flex flex-col'>

                            <Link className='text-sm truncate' href={result.link}>
                                {result.formattedUrl}
                            </Link>

                            <Link className='group-hover:underline decoration-blue-800 text-xl 
                            truncate font-medium text-blue-800' 
                            href={result.link}>
                                {result.title}
                            </Link>

                        </div>

                        <p className='text-gray-600'>
                            {HTMLReactParser(result.htmlSnippet)}
                        </p>

                    </div>
                ))}
            </div>
    
    </div>
  )
}
