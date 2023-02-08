import { DataUser } from "../SearchForm"
import { NoUsers } from "./components/NoUsers"
import { 
    IconsContainer, 
    ProfileNumbersContainer, 
    User, 
    UserBio, 
    UsersContainer, 
    UsersData 
} from "./styles"
import { Buildings, Link, MapPin, TwitterLogo } from "phosphor-react"

interface Users {
    usersData: DataUser[]
}

export function Users({ usersData }: Users) {
    return (
        <>
            {
                (usersData.length === 0) ? (
                    <NoUsers />
                ) : (
                    usersData.map((user) => (
                        <UsersContainer key={user.id}>
                            <img src={user.avatar_url} />
                            <UsersData>
                                <div>
                                    <h2>{user.name}</h2>
                                    <p>Entrou em {user.created_at}</p>
                                </div>
                                <User>@{user.login}</User>
                                <UserBio>{user.bio}</UserBio>

                                <ProfileNumbersContainer>
                                    <div>
                                        <p>Repositórios</p>
                                        <strong>{user.public_repos}</strong>
                                    </div>
                                    <div>
                                        <p>Seguidores</p>
                                        <strong>{user.followers}</strong>
                                    </div>
                                    <div>
                                        <p>Seguindo</p>
                                        <strong>{user.following}</strong>
                                    </div>
                                </ProfileNumbersContainer>

                                <IconsContainer>
                                    <section>
                                        <MapPin size={24} /> 
                                        {
                                            (user.location === null) ? <span>Not Available</span> 
                                                : <p>{user.location}</p>
                                        }
                                    </section>
                                    <section>
                                        <TwitterLogo size={24} />
                                        {
                                            (user.twitter_username === null) ? <span>Not Available</span> 
                                                : <p>{user.twitter_username}</p>
                                        }
                                    </section>
                                    <section>
                                        <Link size={24} />
                                        {
                                            (user.blog === null) ? <span>Not Available</span> 
                                                : <p>{user.blog}</p>
                                        }
                                    </section>
                                    <section>
                                        <Buildings size={32} />
                                        {
                                            (user.company === null) ? <span>Not Available</span> 
                                                : <p>{user.company}</p>
                                        }
                                    </section>
                                </IconsContainer>
                            </UsersData>
                        </UsersContainer>
                    ))
                )
            }
        </>
    )
}