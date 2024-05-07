/** @format */

const createUser = (user) => {
  return {
    name: user.name,
    email: user.email,
    UserId: user._id,
    role: user.role,
    ava: user.ava,
  };
};
module.exports = createUser;
