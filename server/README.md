SalonList - Api

# Routes:

- [Routes:](#routes)
  - [Blogs](#blogs)
      - [URI: '/api/blogs'](#uri-apiblogs)
      - [URI: '/api/blogs/:id'](#uri-apiblogsid)
  - [Businesses](#businesses)
      - [URI: '/api/businesses'](#uri-apibusinesses)
      - [URI: '/api/businesses/:id'](#uri-apibusinessesid)
  - [Users](#users)
      - [URI: '/api/users/login'](#uri-apiuserslogin)
      - [URI: '/api/users/register'](#uri-apiusersregister)

---

## Blogs

#### URI: '/api/blogs'

| Methods | Input | Output |
| ------- | ----- | ------ |
| GET     |       | Blog[] |
| POST    | Blog  | Blog   |

#### URI: '/api/blogs/:id'

| Methods | Input | Output       |
| ------- | ----- | ------------ |
| GET     | ID    | Blog         |
| PATCH   | ID    | Blog         |
| DELETE  | ID    | deletedCount |

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

## Users

#### URI: '/api/users/login'

| Methods | Input | Output      |
| ------- | ----- | ----------- |
| POST    | User  | { Message } |

#### URI: '/api/users/register'

| Methods | Input | Output      |
| ------- | ----- | ----------- |
| POST    | ID    | { Message } |
