// @flow
export type PostT = {
  id: number,
  body: string,
  title: string,
  userId: number
}

export type UpdateUserT = {
  email: string,
  first_name: string,
  last_name: string
}

export type UserBaseT = UpdateUserT & {
  id: number,
  avatar: string
}

export type UserT = UserBaseT & {
  posts: {
    [id: number]: PostT
  }
}

export type UsersStateT = {
  isLoading: boolean,
  users: { [email: string]: UserT }
}
