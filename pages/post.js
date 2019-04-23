import Layout from "../components/Layout.js";

const Page = ({ show }) => (
  <Layout>
    <h1>{show.name}</h1>
    <p>{show.summary.replace(/<[/]?p>/g, "")}</p>
    <img src={show.image.medium} />
  </Layout>
);

Page.getInitialProps = async ({ query }) => {
  const { id } = query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);
  console.log(show);

  return { show };
};

export default Page;
