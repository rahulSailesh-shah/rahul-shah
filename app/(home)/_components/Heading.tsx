import Image from "next/legacy/image";
import React from "react";

const Heading = ({ text }: { text: string }) => {
    return (
        <div className='flex items-center'>
            <Image
                height={90}
                width={90}
                src='/vector.svg'
                alt='logo'
                className='w-20 h-20 mr-8'
            />
            <h1 className='text-cyan-500 font-medium ml-4'>{text}</h1>
        </div>
    );
};

export default Heading;
