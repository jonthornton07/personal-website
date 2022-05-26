import AppHeader, {links as headerLinks} from "../components/header/AppHeader";
import { Routes  as AppRoutes } from "./routes";
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
          <AppHeader activePage={AppRoutes.Home}/>
        <main>
            <Outlet />
        </main>
      </div>
  );
}
