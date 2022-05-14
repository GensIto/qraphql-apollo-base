import "./App.css";
import { gql } from "graphql-tag";
import { useQuery } from "@apollo/client";

const BOOKS = gql`
  query {
    test {
      title
      author
    }
  }
`;

function Books() {
  const { loading, error, data } = useQuery(BOOKS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return data.test.map(({ title, author }) => (
    <div key={title}>
      {title} : {author}
    </div>
  ));
}

function App() {
  return (
    <div className="App">
      <h2>GraphQL + ApolloClient</h2>
      <Books />
    </div>
  );
}

export default App;
