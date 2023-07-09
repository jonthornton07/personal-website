import AppHeader from "@/components/header/AppHeader";
import ProfileSection from "@/components/profile/profileSection";
import { profile } from "@/enums/pages";
import { data as resumeData } from "@/components/profile/ResumeData"

export default function Index() {
  return (
      <div className="w-full">
          <AppHeader activePage={profile}/>
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
      </div>
  );
}
