import Axios from 'axios'

export const API = {
    getUsersInfo ( countUsers: number) {
        return Axios.get (`http://www.filltext.com/?rows=${countUsers}&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
    },
    addUser (data:UserType, countUsers: number) {
        return Axios.post (`http://www.filltext.com/?rows=${countUsers}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`, data)
    }
}
//types
export type UserType = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone: string
    adress?: UserAdressType
    description?: string
}

export type UserAdressType = {
    streetAddress: string
    city: string
    state: string
    zip: string
}

