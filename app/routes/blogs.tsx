import AppHeader, {links as headerLinks} from "../components/header/AppHeader";
import { blogs } from "./pages";
import { Outlet } from "@remix-run/react";
import styles from "./styles.css"

export function links() {
    return [
      ...headerLinks(),
      { rel: "stylesheet", href: styles },
    ];
  }


export default function Index() {
  return (
      <div className="w-full">
          <AppHeader activePage={blogs}/>
        <main>
            <Outlet />
        </main>
      </div>
  );
}
