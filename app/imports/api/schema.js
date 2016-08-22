import { Random } from 'meteor/random';
import casual from 'casual';
import { Tasks } from './collections';


export const schema = [`
type User {
  username: String
  randomString: String
}

type Query {
  currentUser: User
}

schema {
  query: Query
}
`]

export const resolvers = {
  Query: {
    async currentUser(root, args, context) {
      console.log('user: ', context);
      return { username: 'scottmiam '};
      //
      // // Only return the current user, for security
      // if (context.userId === args.id) {
      //   return await Meteor.users.findOne(context.userId);
      // }
    }
  }
}
