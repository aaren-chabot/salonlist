SalonList - Api

# Routes:

- [Routes:](#routes)
  - [Blogs](#blogs)
      - [URI: '/api/blogs'](#uri-apiblogs)
      - [URI: '/api/blogs/:id'](#uri-apiblogsid)
  - [Businesses](#businesses)
      - [URI: '/api/businesses'](#uri-apibusinesses)
      - [URI: '/api/businesses/:id'](#uri-apibusinessesid)
  - [BusinessesUsers](#businessesusers)
      - [URI: '/api/businessesusers/login'](#uri-apibusinessesuserslogin)
      - [URI: '/api/businessesusers/register'](#uri-apibusinessesusersregister)
  - [Users](#users)
      - [URI: '/api/users/login'](#uri-apiuserslogin)
      - [URI: '/api/users/register'](#uri-apiusersregister)

---

## Blogs

#### URI: '/api/blogs'

| Methods | Input | Output      |
| ------- | ----- | ----------- |
| GET     |       | ALL Blog[]  |
| POST    | Blog  | { Message } |

#### URI: '/api/blogs/:id'

| Methods | Input | Output      |
| ------- | ----- | ----------- |
| GET     | ID    | Blog        |
| PATCH   | ID    | { Message } |
| DELETE  | ID    | { Message } |

---

## Businesses

#### URI: '/api/businesses'

| Methods | Input    | Output         |
| ------- | -------- | -------------- |
| GET     |          | ALL Business[] |
| POST    | Business | { Message }    |

#### URI: '/api/businesses/:id'

| Methods | Input | Output      |
| ------- | ----- | ----------- |
| GET     | ID    | Business    |
| PATCH   | ID    | { Message } |
| DELETE  | ID    | { Message } |

---

## BusinessesUsers

#### URI: '/api/businessesusers/login'

| Methods | Input        | Output      |
| ------- | ------------ | ----------- |
| POST    | BusinessUser | { Message } |

#### URI: '/api/businessesusers/register'

| Methods | Input | Output      |
| ------- | ----- | ----------- |
| POST    | ID    | { Message } |

---

## Users

#### URI: '/api/users/login'

| Methods | Input | Output      |
| ------- | ----- | ----------- |
| POST    | User  | { Message } |

#### URI: '/api/users/register'

| Methods | Input | Output      |
| ------- | ----- | ----------- |
| POST    | ID    | { Message } |