export type UserT = {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

export type UsersStateT = {
  isLoading: boolean,
  users: { [email: string]: UserT }
}
