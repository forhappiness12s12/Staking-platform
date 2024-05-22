'use client'
import Header from '../header';
import Footer from '../footer';

import Link from 'next/link';

import { useAccount, useBalance } from 'wagmi'
import { useEffect, useState } from 'react';

export default function Home() {

    const { address, isConnecting, isDisconnected } = useAccount()
   
    const {data, isError, isLoading} = useBalance({
        address: address,
        
        token: '0xC3bbB0f08bEe1cEE567D272616Af55f5274586F8'
        
    })
    
    console.log('address, isConnecting, isDisconnected', address, isConnecting, isDisconnected)
    useEffect(()=>{
        
    }, [address])

    console.log('result', data)
    return (
        <main className="min-h-screen w-full flex flex-row justify-center items-center bg-white">
            <div className="w-screen sm:w-[650px] bg-[#071619] h-800px overflow-y-scroll text-white">
                <Header />
                <div>
                    <div className='h-10 flex justify-start '>
                        <Link  href="/">
                            <img width={25} height={25} src='/backbutton.png' />
                        </Link>
                    </div>
                    <div className='text-[20px] mx-10'>
                        Your Referral Link
                    </div>
                    <div className="border-solid border-2 border-[#A6A6A6] h-100 mx-6 rounded-md">
                    <div className='p-5'>https://www.unigive.io/auth/register/?ref={address}</div>
                    </div>
                    <div className='bg-[#595959] mx-5 rounded-md mt-5'>
                        <div className='text-[20px] font-semibold p-5 '>
                            <div className='flex items-center'>
                                <img className='w-11 mx-5 mr-10' src='/3people.png' alt='Three people' />
                                <div className='text-[20px] mr-60'>My Child</div> {/* Adjust margin here */}
                                <div className='mr-10'>102</div> {/* Adjust margin here */}
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 grid-rows-5 mt-10 mx-10 mb-40'>
                        <div className='text-[18px]' >Account ID</div>
                        <div className='text-[18px]'>Investment</div>
                        <div className='text-[18px]' >T118k0.....10092u</div>
                        <div className='text-[18px]' >50</div>
                        <div className='text-[18px]' >Wk8185.....90klOs</div>
                        <div className='text-[18px]' >320</div>
                        <div className='text-[18px]' >56G4xn.....11Jk90</div>
                        <div className='text-[18px]' >1000</div>
                        <div className='text-[18px]' >45mn89.....k83Bu4</div>
                        <div className='text-[18px]' >250</div>
                    </div>

                </div>

                <Footer />
            </div>
        </main >
    );
}
