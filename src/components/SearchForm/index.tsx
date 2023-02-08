import { MagnifyingGlass } from "phosphor-react"
import { FormContainer } from "./styles"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from "../../lib/axios"
import { useState } from "react"
import { AxiosError } from "axios"

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export interface DataUser {
    id: number,
    name: string,
    created_at: string,
    avatar_url: string,
    login: string,
    bio: string,
    public_repos: number,
    followers: number,
    following: number,
    location: string | null,
    twitter_username: string | null,
    blog: string,
    company: string,
}

export function SearchForm() {
    const { 
        register, 
        handleSubmit,
        formState: { isDirty }
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })
    const [usersData, setUsersData] = useState<DataUser[]>([])

    async function searchUser(query?: string) {
        try{
            const response = await api.get(`users/${query}`)
            setUsersData([response.data])
        }catch (err) {
            if (err instanceof AxiosError) {
                alert('tem erro')
                setUsersData([])
                return
            }

            console.error(err)
        }
    }

    async function handleSearchUsers (data: SearchFormInputs) {
        await searchUser(data.query)
    }   
    
    return {
        usersData,
        renderSearchForm: (
            <FormContainer onSubmit={handleSubmit(handleSearchUsers)}>
                <MagnifyingGlass size={24} color="#0079FE"/>
                <input 
                    type="text"
                    placeholder="Procure por um usuário no GitHub"
                    {...register('query')}
                />
                <button type="submit" disabled={!isDirty}>Buscar</button>
            </FormContainer>
        )
    }
}