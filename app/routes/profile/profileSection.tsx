import React from "react";
import type { WorkModel } from "./WorkModel";

interface Props {
    data: WorkModel
}

const ProfileSection: React.FC<Props> = ({
    data
}) => {
    const logoImage = "/images/" + data.logo;

    return (
        <div>
            <div className="p-2 mt-2">
                <div className="flex">
                    <img className="w-10 h-10 top-2 left-2 rounded mx-2 my-2" src={logoImage} alt={data.logoAlt}></img>
                    <div className="flex flex-col">
                        <div className="text-lg leading-7 text-gray-900 font-sans antialiased font-semibold">{data.title}</div>
                        <div className="text-m leading-7 text-slate-500 font-sans antialiased -mt-1">{data.companyName} / {data.timeframe}</div>
                    </div>
                </div>
            </div>
                
            <div className="mx-5 border-t pt-3">
                {data.highlights.map((value, index) => <li key={index}>{value}</li>)}
            </div>
        </div>
    );
};

export default ProfileSection;
