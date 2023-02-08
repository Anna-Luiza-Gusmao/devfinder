import { DataUser } from "../SearchForm"
import { IconsContainer, NoUserContainer, ProfileNumbersContainer, User, UserBio, UsersContainer, UsersData } from "./styles"
import { Buildings, Link, MagnifyingGlass, MapPin, TwitterLogo } from "phosphor-react"

interface Users {
    usersData: DataUser[]
}

export function Users({ usersData }: Users) {
    return (
        <>
            {
                (usersData.length === 0) ? (
                    <NoUserContainer>
                        <MagnifyingGlass size={84} />
                        <p>Ops...</p>
                        <p>Você ainda não buscou por nenhum usuário</p>
                    </NoUserContainer>
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
                                        <span>{user.location}</span>
                                    </section>
                                    <section>
                                        <TwitterLogo size={24} />
                                        <span>{user.twitter_username}</span>
                                    </section>
                                    <section>
                                        <Link size={24} />
                                        <span>{user.blog}</span>
                                    </section>
                                    <section>
                                        <Buildings size={32} />
                                        <span>{user.company}</span>
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