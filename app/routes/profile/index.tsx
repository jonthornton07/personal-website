import { data as resumeData } from "./ResumeData";
import ProfileSection from "./profileSection";

const WorkPage = () => {
    return (
        <div className="flex-column justify-items-center">
            {
                resumeData.map((data, index) => {
                    return (
                    <div key={index}>
                        <div className="w-90%">
                            <ProfileSection key={index} data={data} />
                        </div>
                    </div> 
                    )
                })
            }
        </div>
    )
}

export default WorkPage;