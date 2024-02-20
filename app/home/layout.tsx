// import { AuthenticationProvider } from "./AuthenticationProvider";

import NavBarComponent from '../../components/containers/navbar/NavBar'
interface SideBarLayoutProps {
    children: React.ReactNode
}


const SideBarLayout = ({ children }: SideBarLayoutProps) => {
    return(
        <NavBarComponent>
            { children }
        </NavBarComponent>
    )
}

export default SideBarLayout;