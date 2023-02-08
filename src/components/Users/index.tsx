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
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface Users {
    usersData: DataUser[]
}

export function Users({ usersData }: Users) {
    let day = 1
    let month = 1
    let year = 2001

    let formattedDate = []

    return (
        <>
            {
                (usersData.length === 0) ? (
                    <NoUsers />
                ) : (
                    usersData.map((user) => (
                        formattedDate = user.created_at.split(""),
                        year = parseInt(formattedDate[0] + formattedDate[1] + formattedDate[2] + formattedDate[3]),
                        month = parseInt(formattedDate[5] + formattedDate[6]),
                        day = parseInt(formattedDate[8] + formattedDate[9]),

                        <UsersContainer key={user.id}>
                            <img src={user.avatar_url} />
                            <UsersData>
                                <div>
                                    <h2>{user.name}</h2>
                                    <p>Entrou em {format(new Date(year, month - 1, day), 'dd MMM yyyy', { locale: ptBR })}</p>
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