'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineConsoleSql, AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";


export default function HomeSearch() {

    const [inputValue, setInputValue] = useState("");
    const router = useRouter();
    const [randomSearchLoading, setRandomSearchLoading] = useState(false)

    function handSubmit(e){
        e.preventDefault();
        if(!inputValue.trim()) return
        router.push(`/search/web?searchTerm=${inputValue}`)
    }

    async function randomSearch(){
        setRandomSearchLoading(true)
        const res = await fetch('https://random-word-api.herokuapp.com/word')

        if(!res.ok){
            return
        }

        const data = await res.json()

        const value = data[0]

        router.push(`/search/web?searchTerm=${value}`)

        setRandomSearchLoading(false);

 
    }

  return (
    <>

    <form onSubmit={handSubmit} className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3
    rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:mx-w-2xl">
    <AiOutlineSearch className="text-xl text-gray-500 mr-3 " />
    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" className="flex-grow focus:outline-none" />
    <BsFillMicFill className="text-lg" />
    </form>

    <div className="flex flex-col justify-center sm:flex-row space-y-2 sm:space-y-0 
    sm:space-x-4 mt-8">
        <button onClick={handSubmit} className="btn">Google Search</button>
        <button 
        disabled={randomSearchLoading}
         onClick={randomSearch} 
        className="btn flex items-center justify-center disabled:opacity-80">
            {randomSearchLoading ? (
                <img src="spinner.svg"
                 alt="loading..."  
                 className="h-6 text-center"
                  />
                  ) : (
                "I am feeling lucky" )  }
        </button>

    </div>
    </>
  )
}
