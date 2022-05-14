const { ApolloServer, gql } = require("apollo-server");

// データ
const books = [
  {
    title: "吾輩は猫である",
    author: "夏目漱石",
  },
  {
    title: "走れメロス",
    author: "太宰治",
  },
];

// 取得するデータ
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    test: [Book]
  }
`;

// データの内容
const resolvers = {
  Query: {
    test: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
