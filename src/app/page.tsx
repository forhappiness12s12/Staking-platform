"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAccount, useBalance } from 'wagmi'
import {Contract} from 'ethers'

import Header from './component/header';
import Footer from './component/footer';
import LineChartDot from './component/chart';
import ConnectButton from '@/components/shared/ConnectButton';
import ClipboardLink from './component/clipboard';

import contractABI from '../abi/PlayersContract.json';
import {abi as erc20ABI} from '../abi/erc20.json';
import { useEthersSigner } from '@/lib/utils/etherutil';
import Modal from './component/modal';
import { ftruncate } from 'fs';
const CONTRACT_ADDRESS = "0x78a6b2344730550dFB4bD0Fe736394f90DC443Da"
const TOKEN_ADDRESS = "0xc3bbb0f08bee1cee567d272616af55f5274586f8"
let playerContract
let tokenContract

export default function Home() {
  const { address, isConnecting, isDisconnected } = useAccount()
  
  const { data, isError, isLoading } = useBalance({
    address: address,

    // token: '0xC3bbB0f08bEe1cEE567D272616Af55f5274586F8'

  })
  const signer = useEthersSigner()
  const ethbalance = data?.formatted;

  //console.log('address, isConnecting, isDisconnected', address, isConnecting, isDisconnected)
  useEffect(() => {
    if(signer) {
      initContract()
    }
  }, [signer])

  const initContract = async()=>{
    console.log('signer', signer)
    playerContract =  new Contract(
      CONTRACT_ADDRESS,
      contractABI.abi,
      signer,
    );

    tokenContract = new Contract(
      TOKEN_ADDRESS,
      erc20ABI,
      signer
    );

    let result = await playerContract.isRegister(address);
    if (result==false)
      {
      setIsModalOpen(true);

    }
    else{
      setIsModalOpen(false);
    }
    console.log('isRegister result', result, address)
  }

  //console.log('result', ethbalance)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const clipboardText = '0x5e28384d21f5785252a42214831c57af6271dc42';

  return (
    <main className="min-h-screen w-full flex flex-row justify-center items-center bg-white">
      <div className="w-screen sm:w-[650px] bg-[#071619] h-screen overflow-y-scroll text-white">
        <Header />
        
        <div className="relative flex flex-col w-full p-8">
          <Modal isOpen={isModalOpen} onClose={closeModal}/>


          <p className="text-[20px] font-semibold mb-4">Join Player Global Pool and Get Up To <span className='text-[#E70F16]'>1.5%</span> Daily Max Return is <span className='text-[#E70F16]'>150%</span></p>
          <p className="text-[16px] mb-4">The pool is auto credited to your wallet daily,<br /> and you earn daily cash for your cash flow.</p>
          <button className="bg-[#830383] px-4 py-2 rounded-md w-36 flex items-center">
            <img src="/polygon12.png" alt="Logo" className="h-9 mr-2" />
            <span className="text-white">Polygon</span>
          </button>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-y-16 gap-x-10 p-10">
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <img src="/T.png" alt="Logo" className="h-8" />
              <p className="text-[#AFABAB] ml-2 te">Total Global Pool</p>
            </div>
            <p className='ml-12'>$9,129,348</p>
          </div>

          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <img src="/T.png" alt="Logo" className="h-8" />
              <p className="text-[#AFABAB] ml-2">Today ROI</p>
            </div>
            <p className='ml-12'>1.5%</p>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <img src="/3people.png" alt="Logo" className="h-10" />
              <p className="text-[#AFABAB] ml-2">Total Players</p>
            </div>
            <p className='ml-12'>998,221</p>
          </div>
          <div className="flex flex-col items-start">

            <div className="flex items-center justify-between w-[100%]">
              <div className='flex'>
                <img src="/3people.png" alt="Logo" className="h-10" />
                <p className="text-[#AFABAB] ml-2">My Child</p>
              </div>
              <div>
                <Link href="./component/childpage">
                  <img width={25} height={25} src='/zzz1.png' />
                </Link>
              </div>
            </div>
            <p className='ml -12'>102</p>

          </div>


        </div>

        <div className="flex text-black justify-center py-4 relative">
          <input
            placeholder="Minimum 10.00 USDT"
            className="border-none bg-[#595959] p-6 pr-5 w-[400px] h-[40px] rounded-[13px] border-opacity-20 placeholder:italic"
          />
          <img src="/T.png" className="absolute right-32 top-0 bottom-0 my-auto h-6" alt="Search Icon" />


        </div>
        <div className='grid grid-cols-2'>
          <div className="text-white text-center">My USDT Balance :</div>
          <div className="text-[#999100] text-center">
            {`${ethbalance} `}
          </div>
        </div>






        <div className="flex mt-[20px] items-center justify-center p-5">
          <button className="bg-[#FFC000] p-3 rounded-md w-[400px]  text-white">
            Invest
          </button>
        </div>
        <div className='bg-[#243338] mx-2 rounded-md' >


          <div className='text-[20px] font-semibold p-5'>Introduction</div>
          <div className='text-[10] mx-2 p-2'>Global Pool is a concept of cash flow rotating finance among the world.<br/> You can build your stable income though the pool.<br />
            All invested amount in pool is fully execute buy the contract, ROI pay out is base on the pool size daily cap on 3% for daily calculation if the amount is big the ROI will be 1.5% if the pool size is small then the 3% is small then the percent of ROI will be small then 1.5%
          </div>

          <div className="border-solid border-2 border-[#A6A6A6] h-100 mx-2 rounded-md ">
            <div className='p-5'>Fees of Daily</div>
            <div className='grid grid-cols-2 grid-rows-2'>
              <div className='text-[#9E9A9A] p-5'>Transfer Fees</div>
              <div className='text-[#FFFFFF] p-5 mx-5'>5% from the ROI</div>
              <div className='text-[#9E9A9A] p-5'>ROI Pay Out</div>
              <div className='text-[#FFFFFF] p-5 mx-5'>Daily at 0.00 (SGT)</div>
            </div>
          </div>
          <div className='text-[20px]  p-3'>Contract Address</div>
          <div className="flex items-center justify-center ">
            <div className="text-[16px] mx-5 underline">{clipboardText}</div>
            <ClipboardLink text={clipboardText} className="underline cursor-pointer text-blue-500" />
          </div>
          <div className='text-[20px]  p-3'>Daily ROI</div>
          <div className='grid grid-cols-3 grid-rows-2'>
            <div className='px-5 py-1 text-[15px]'>Yesterday</div>
            <div className='px-5 py-1 text-[15px]'>Today</div>
            <div className='px-5 py-1 text-[15px]'>Since Inception</div>
            <div className='px-5 text-[18px]'>1.5%</div>
            <div className='px-5 text-[18px]'>1.5%</div>
            <div className='px-5 text-[18px]'>1.5%</div>
          </div>
          <div className="border-solid border-2 border-[#A6A6A6] h-100 mx-2 rounded-md">
            <div className="mt-[20px] w-[100%] h-[650px] inline-block p-1"><LineChartDot /></div>
          </div>
          <div className='p-2 flex justify-center'>Daily ROI Chart</div>
        </div>

        <div className="relative flex flex-col w-full ">
          <p className="text-[20px] font-semibold mt-16 mb-5 px-5">Join Bankers Global Pool</p>
          <p className="text-[16px] mb-4 p-5">The Banker pool is sharing profit from the investment amount of <br /> 15% from the player pool max return for bankers is 200%</p>
          <div className='px-5'>
            <button className="bg-[#830383] px-4 py-2 rounded-md w-36 flex items-center">
              <img src="/polygon12.png" alt="Logo" className="h-9 mr-2" />
              <span className="text-white">Polygon</span>
            </button>
          </div>
        </div>


        <div className="grid grid-cols-2 grid-rows-1 gap-y-16 gap-x-10 p-10">
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <img src="/T.png" alt="Logo" className="h-8" />
              <p className="text-[#AFABAB] ml-2 te">Total Bankers Pool</p>
            </div>
            <p className='ml-12'>$9,129,348</p>
          </div>

          <div className="flex flex-col items-start ">
            <div className="flex items-center justify-between w-[100%]">
              <div className='flex'>
                <img src="/T.png" alt="Logo" className="h-8" />
                <p className="text-[#AFABAB] ml-2">Total Bankers</p>
              </div>
              <Link href="./component/childpage1">
                <img width={25} height={25} src='/zzz1.png' />
              </Link>
            </div>
            <p className='ml-12'>0.9797</p>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <div className="flex w-[400px] border-solid border-2 border-[#A6A6A6] rounded-md">
            <div className='p-5'>Join Bankers Pool: 5,000 per lot</div>
          </div>
        </div>





        <div className="flex relative text-black justify-center py-4">

          <input
            placeholder="0"
            className="border-none bg-[#595959] p-6 pr-5 w-[400px] h-[40px] rounded-[13px] border-opacity-20"
          />
          <img src="/T.png" className="absolute right-32 top-0 bottom-0 my-auto h-6" alt="Search Icon" />

        </div>
        <div className='grid grid-cols-2'>
          <div className="text-white text-center">My USDT Balance :</div>
          <div className="text-[#999100] text-center">{`${ethbalance} `}</div>

        </div>





        <div className="flex mt-[20px] items-center justify-center p-5">
          <button className="bg-[#FFC000] p-3 rounded-md w-[400px]  text-white">
            Invest
          </button>
        </div>



        <Footer />
      </div>
    </main >
  );
}
