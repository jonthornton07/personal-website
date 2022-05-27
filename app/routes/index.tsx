import AppHeader, {links as headerLinks} from "../components/header/AppHeader";
import { home } from "./pages";
import styles from "./styles.css"
import HomeHeader from "../components/home/homeHeader";
import About from "../components/home/about";
import Projects from "../components/home/projects";
import Divider from "~/components/base/divider/Divider";

export function links() {
    return [
      ...headerLinks(),
      { rel: "stylesheet", href: styles },
    ];
  }


export default function Index() {
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
