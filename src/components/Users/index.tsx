import { IconsContainer, ProfileNumbersContainer, User, UserBio, UsersContainer, UsersData } from "./styles"
import teste from '../../assets/teste.png'
import { Buildings, Link, MapPin, TwitterLogo } from "phosphor-react"

export function Users() {
    return (
        <UsersContainer>
            <img src={teste} />
            <UsersData>
                <div>
                    <h2>The User</h2>
                    <p>Entrou em 25 Jan 2021</p>
                </div>
                <User>@user</User>
                <UserBio>Bio of the user</UserBio>

                <ProfileNumbersContainer>
                    <div>
                        <p>Repositórios</p>
                        <p>8</p>
                    </div>
                    <div>
                        <p>Seguidores</p>
                        <p>8</p>
                    </div>
                    <div>
                        <p>Seguindo</p>
                        <p>8</p>
                    </div>
                </ProfileNumbersContainer>

                <IconsContainer>
                    <section>
                        <MapPin size={24} />
                        <span>San Francisco</span>
                    </section>
                    <section>
                        <TwitterLogo size={24} />
                        <span>Not Available</span>
                    </section>
                    <section>
                        <Link size={24} />
                        <span>http://github.blog</span>
                    </section>
                    <section>
                        <Buildings size={32} />
                        <span>Estúdio Haus</span>
                    </section>
                </IconsContainer>
            </UsersData>
        </UsersContainer>
    )
}