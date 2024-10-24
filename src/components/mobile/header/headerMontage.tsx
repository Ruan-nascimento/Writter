import { faAdd, faHome, faSearch, faUser } from "@fortawesome/free-solid-svg-icons"
import { Header } from "."

interface HeaderMontageProps {
  mod: React.Dispatch<React.SetStateAction<boolean>>
  modR: boolean,
  page: string
}

export const HeaderMontage = ({page, mod, modR}:HeaderMontageProps) => {
  return (
    <Header.root>
      <Header.navLink>
        <Header.iconLink active={page.includes('/home') ? true : false} mod={mod} modR={modR} loc="/home" icon={faHome} size="lg"/>
        <Header.iconLink active={page.includes('/create') ? true : false} mod={mod} modR={modR} loc="/create" icon={faAdd} size="lg"/>
        <Header.iconLink active={page.includes('/search') ? true : false} mod={mod} modR={modR} loc="/search" icon={faSearch} size="lg"/>
        <Header.iconLink active={page.includes('/profile') ? true : false} mod={mod} modR={modR} loc="/profile" icon={faUser} size="lg"/>
      </Header.navLink>
    </Header.root>
  )
}