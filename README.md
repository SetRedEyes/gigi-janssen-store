# gigi-janssen-store
Fullstack online store


## Api Endpoints

#### Auth

```http
  interface Tokens {
	userId: string
	accessToken: string
	refreshToken: string
	exporesIn: number
}
```

| URL                              | Type      | Body                                                                  |Desc               |Return
| :--------                         | :-------  | :-------------------------                                            | :--------------- | :--------------- |
| /api/auth/signUp                  | `post`    | email, password, firstName, lastName, phone, city, postOfficeNumber   |     register      |Tokens
| /api/auth/signInWithPassword     | `post`    | email, password                                                         |     login      |Tokens
| /api/auth/token                   | `post`    | refresh_token                                                         |     refresh token      |Tokens

#### Company

```http
  interface Company {
	fullName: string
	name: string
	photo: string
}
```

| URL                   | Auth   | Type                                 |Return                             |
| :--------             | :------- | :-------------------------------- |  :-------------------------------- | 
| /api/company          | `false` | `get` |                                         Company[]                         |


#### Category

```http
  interface Company {
	companyName: string
	fullName: string
    name: string
	photo: string
}
```

| URL                   | Auth   | Type                                 |Return                             |
| :--------             | :------- | :-------------------------------- |  :-------------------------------- | 
| /api/category         | `false` | `get` |                                         Category[]                         |

#### Product

```http
  interface Company {
 	companyName: string
  	name: string
	rusName: string
	category: string
	price: []
	volume:[]
	photo:string
	
}
```

| URL                   | Auth   | Type                                 |Return                             |
| :--------             | :------- | :-------------------------------- |  :-------------------------------- | 
| /api/product         | `false` | `get` |                                         Product[]                         |

#### User

```http
  interface Company {
 	firstName: string
	lastName: string
	email: string
	password: string
	phone: string
	city: string
	postOfficeNumber: string
	
}
```

| URL                   | Auth   | Type                                 |Return                             |
| :--------             | :------- | :-------------------------------- |  :-------------------------------- | 
| /api/user/:id        | `true` | `patch` |  User  
| /api/user/:id             | `true`| `get` |  User | 





