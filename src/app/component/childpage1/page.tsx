import Header from '../header';
import Footer from '../footer';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="min-h-screen w-full flex flex-row justify-center items-center bg-white">
            <div className="w-screen sm:w-[650px] bg-[#071619] h-800px overflow-y-scroll text-white">
                <Header />
                <div>
                    <div className='flex justify-start mx-5 h-10'>
                    <Link  href="/">
                        <img width={25} height={25} src='/backbutton.png' />
                    </Link>
                    </div>
 
                    <div className='bg-[#595959] mx-5 rounded-md mt-5'>
                        <div className='text-[20px] font-semibold p-5 '>
                            <div className='flex items-center'>
                                <img className='w-11 mx-5 mr-10' src='/3people.png' alt='Three people' />
                                <div className='text-[20px] mr-60'>Banker List</div> {/* Adjust margin here */}
                                <div className='mr-10'>100</div> {/* Adjust margin here */}
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 grid-rows-5 mt-10 mx-10 mb-40'>
                        <div className='text-[18px]' >Account ID</div>
                        <div className='text-[18px]'>Investment</div>
                        <div className='text-[18px]'>Banker Profit</div>
                        <div className='text-[18px]' >T118k0.....10092u</div>
                        <div className='text-[18px]' >1/5/2024</div>
                        <div className='text-[18px]'>0/5,000</div>
                        <div className='text-[18px]' >Wk8185.....90klOs</div>
                        <div className='text-[18px]' >25/4/2024</div>
                        <div className='text-[18px]'>100/5,000</div>
                        <div className='text-[18px]' >56G4xn.....11Jk90</div>
                        <div className='text-[18px]' >11/4/2024</div>
                        <div className='text-[18px]'>200/5,000</div>
                        <div className='text-[18px]' >45mn89.....k83Bu4</div>
                        <div className='text-[18px]' >2/3/2024</div>
                        <div className='text-[18px]'>5,000/5,000</div>
                    </div>

                </div>

                <Footer />
            </div>
        </main >
    );
}
