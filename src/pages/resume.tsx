import AppHeader from "@/components/header/AppHeader";
import ProfileSection from "@/components/profile/profileSection";
import { profile } from "@/enums/pages";
import { data as resumeData } from "@/components/profile/ResumeData"

export default function Index() {
  return (
      <div className="flex-column w-full">
          <AppHeader activePage={profile}/>
          <div className="grid h-screen place-items-center">
          {
            resumeData.map((data, index) => {
              return (
                <div key={index} className="w-screen md:w-2/3 lg:w-1/2">
                   <div>
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
