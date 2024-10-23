import { faAdd, faHome, faSearch, faUser } from "@fortawesome/free-solid-svg-icons"
import { Header } from "."

export const HeaderMontage = () => {
  return (
    <Header.root>
      <Header.navLink>
        <Header.iconLink icon={faHome} size="lg"/>
        <Header.iconLink icon={faAdd} size="lg"/>
        <Header.iconLink icon={faSearch} size="lg"/>
        <Header.iconLink icon={faUser} size="lg"/>
      </Header.navLink>
    </Header.root>
  )
}