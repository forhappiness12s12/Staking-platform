// components/Modal.js
"use client"
import { useState } from 'react';


const Modal = ({ isOpen, onClose }) => {
    const [norefer, setNorefer] = useState(false);
    console.log(norefer);

    const closeModal = () => {
        onClose();
    };

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center transition-opacity z-10 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                <div className="bg-[#595959] rounded-lg p-6 w-500px justify-center ">
                    <div className='bg-[#404040] rounded-md p-4 mb-4'>
                        <h2 className="text-xl font-bold">Blind Your Referral Wallet Address</h2>
                    </div>
                    <input
                        placeholder="0xc9Bd845CFFa2Ad8759aFj5DF5bg8ec184f246cu9"
                        className="border-none w-full bg-[#ffffff] p-6 pr-5 h-[40px] rounded-[13px] text-black"
                    />
                    <div className='flex items-center mb-4'>
                        <input
                            type='checkbox'
                            onChange={(e) => setNorefer(e.target.checked)}
                            checked={norefer}
                            className="w-5 mr-3"
                        />
                        <p className="text-[20px]">I have no referral</p>
                    </div>
                    <div className='flex justify-center'>
                        <button
                            onClick={closeModal}
                            className="bg-[#FFC000] hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors px-48 text-[18px]"
                        >
                            Enter
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
