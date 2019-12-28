import Head from "next/head";
import Header from "../components/Header";
import Summary from "../components/Summary";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import PersonalDetails from "../components/PersonalDetails";

const Layout: React.FC<{}> = props => (
  <div className="font-body">
    <Head>
      <title>My styled page</title>
      <link href="/styles.css" rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,600,700,800,900&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    {props.children}
  </div>
);

const Home: React.FC<{}> = props => (
  <Layout>
    <Header />
    <div className="container mx-auto px-4">
      <Summary />
      <Experience />
      <Education />
      <Projects />
      {/* <PersonalDetails /> */}
    </div>
  </Layout>
);

export default Home;
