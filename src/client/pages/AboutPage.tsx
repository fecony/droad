import {
  PhosphorLogo,
  FigmaLogo,
  GithubLogo,
  SpotifyLogo,
} from 'phosphor-react';
import Layout from '../components/Layout';

const AboutPage = () => {
  // TODO: list all things used here
  return (
    <Layout>
      <PhosphorLogo size={32} /> {/* icons */}
      <FigmaLogo size={32} /> {/* Design tool */}
      <GithubLogo size={32} />
      <SpotifyLogo size={32} /> {/* Music */}
      {/* TODO: Other icons from @tabler-icons */}
    </Layout>
  );
};

export default AboutPage;
