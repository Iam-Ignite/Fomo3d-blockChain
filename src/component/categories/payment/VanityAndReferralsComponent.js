import React, { useEffect, useRef, useState } from 'react'
import { FaCheck, FaCopy } from 'react-icons/fa'
import RegisterName from '../../utils/RegisterName';


export default function VanityAndReferralsComponent() {
    const [modal, setModal] = useState(false);
    const [copy, setCopy] = useState('Copy');
    const paramtext = "name"
    const textToCopy = 'fomo3d.net/';
    const copyButtonRef = useRef(null);

    const copyToClipboard = () => {
        setCopy("copied");
        navigator.clipboard.writeText(textToCopy + paramtext);
    };

    useEffect(() => {
        setTimeout(() => {
            setCopy("Copy");
        }, 500)
    }, [copy])


    return (
        <>
            <div className="bg-[#212529] w-[46vw] sm:w-full font-fomofont p-4 rounded-b-2xl rounded-r-2xl">
                <p className="text-base my-1 font-light text-center font-fomofont">Advise others to invest in this exit scam and we'll reward you 10% of everything they lose. In BNB</p>

                <div className="flex flex-col justify-center items-center my-3 text-base font-light font-fomofont">
                    <h4 className=' text-xl font-normal font-fomofont'>Wallet Referral</h4>
                    <p>{textToCopy}</p>
                    <button ref={copyButtonRef} onClick={copyToClipboard} className='px-3 my-1 font-fomopink font-normal text-base flex items-center justify-center border hover:text-white hover:bg-[#f000f0] rounded-md py-1.5 border-[#f000f0]'><FaCopy className='mr-1' />{copy}</button>
                </div>
                <div className="flex flex-col justify-center items-center my-3 text-base font-light font-fomofont">
                    <h4 className=' text-xl font-normal font-fomofont'>Anonymous Referral</h4>
                    <p>{textToCopy}</p>
                    <button ref={copyButtonRef} onClick={copyToClipboard} className='px-3 my-1 font-fomopink font-normal text-base flex items-center justify-center border hover:text-white hover:bg-[#f000f0] rounded-md py-1.5 border-[#f000f0]'><FaCopy className='mr-1' />{copy}</button>
                </div>
                <div className="flex flex-col justify-center items-center my-3 text-base font-light font-fomofont">
                    <h4 className=' text-xl font-normal font-fomofont'>Vanity Referral</h4>
                    <p>{textToCopy}</p>
                    <button ref={copyButtonRef} onClick={copyToClipboard} className='px-3 my-1 font-fomopink font-normal text-base flex items-center justify-center border hover:text-white hover:bg-[#f000f0] rounded-md py-1.5 border-[#f000f0]'><FaCopy className='mr-1' />{copy}</button>
                </div>
                <button onClick={() => setModal(true)} className="w-full flex items-center justify-center border hover:text-white hover:bg-[#f000f0] rounded-md py-2 border-[#f000f0] "><FaCheck className='mr-2' />Register a new name</button>
            </div>
            {
                modal &&  <RegisterName setModal={setModal}/>
            }
           
        </>


    )
}
