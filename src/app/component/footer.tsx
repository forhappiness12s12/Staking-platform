
export default function Footer() {
    return (
        <footer >
            <div className="h-24 bg-[#071619] flex items-center justify-center px-8 border-t border-[#404040]">
            <button className="bg-transparent border-none p-0">
                <img src="/telegram-logo.png" alt="Telegram Logo" className="h-20 rounded-full" />
            </button>
            <button className="bg-transparent border-none p-0">
                <img src="/x.png" alt="Telegram Logo" className="h-12 rounded-full" />
            </button>
            </div>
            <div className='flex justify-center p-2 text-[12px]'>© 2024 UNIGIVE All Rights Reserved</div>
        </footer>
    );
}