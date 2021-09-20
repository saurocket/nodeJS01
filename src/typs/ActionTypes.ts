
export type ActionTypes = 'list' | 'get' | 'add' | 'remove'

export type ArgsType = {
    action: ActionTypes,
    id?: number
    name?:string
    email?:string
    phone?:string
}