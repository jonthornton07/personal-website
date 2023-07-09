import AppHeader from "@/components/header/AppHeader";
import { home } from "@/enums/pages";
import HomeHeader from "@/components/home/homeHeader";
import About from "@/components/home/about";
import Projects from "@/components/home/projects";
import Divider from "@/components/base/divider/Divider";

export default function Page() {
  return (
      <div className="w-full">
          <AppHeader activePage={home}/>
        <main>
            <HomeHeader/>
            <About/>
            <Divider text="PROJECTS"/>
            <Projects/>
        </main>
      </div>
  );
}
