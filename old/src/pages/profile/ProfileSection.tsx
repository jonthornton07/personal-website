import React from "react";
import WorkModel from "./WorkModel";

interface Props {
    data: WorkModel
}

const ProfileSection: React.FC<Props> = ({
    data
}) => {
    const logoImage = "/images/" + data.logo;

    return (
        <div>
            <div className="flex flex-col p-2 my-2">
                <div className="flex">
                    <img className="w-10 h-10 top-2 left-2 rounded place-self-center mx-2" src={logoImage}></img>
                    <div className="flex flex-col">
                        <div className="text-lg leading-7 text-gray-900 font-sans antialiased font-semibold">{data.title}</div>
                        <div className="text-sm leading-7 text-gray-700 font-sans antialiased -mt-1">{data.companyName} / {data.timeframe}</div>
                    </div>
                </div>
            </div>

            <div className="mx-3 border-t">
                {data.highlights.map((value, index) => <li>{value}</li>)}
            </div>
        </div>
    );
};

export default ProfileSection;
