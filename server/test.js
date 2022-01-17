const {User, Reservation, Restaurant} = require("./db/models");

    async function test () {
        const result = await User.findOne({
            where: {
                id: 9
            },
            include: {
                model: Restaurant,
                as: 'rating'
            }

        })
        console.log(result.Rating)

    }

    test()