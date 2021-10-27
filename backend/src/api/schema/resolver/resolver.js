const users = [
    {
        id: 1,
        email: {
            email: 'pepePopo'
        }
    },
    {
        id: 2,
        email: {
            email: 'pepePopo'
        }
    },
    {
        id: 3,
        email: {
            email: 'pepePopo'
        }
    }
]

const resolver = {
    Query: {
        getUser: (_, {id})=> users.find(user => user.id==id),
    }
}

module.exports = resolver;