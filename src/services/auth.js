const CatchAsync = require("../errors/CatchAsync");
const { checkIfUserExists, createUser, getUser } = require("../repositories/auth");

const registration = async(newUserObject) => {
    const { email } = newUserObject
    await checkIfUserExists(email) // check if user already exists
    const newUser = await createUser(newUserObject) //create new user object if user doesn't exist
    return newUser
}

const signIn = async(newUserObject) => {
    const { email, password                                                  } = newUserObject;
    const user = await getUser(email);

    if (!user || !(await user.correctPassword(password, user.password ))) {
        throw new AppError( 'email or password incorrect!', StatusCodes.BAD_REQUEST )
    }

    return user;
}

module.exports = { registration,  signIn }