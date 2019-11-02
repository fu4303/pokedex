/** @jsx jsx */
import {jsx} from 'theme-ui';
import ContentLoader from 'react-content-loader';

export default function PokeCardLoader() {
  return (
    <ContentLoader
      height={200}
      width={200}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb">
      <rect x="11" y="10" rx="0" ry="0" width="176" height="116" />
      <rect x="12" y="132" rx="0" ry="0" width="144" height="20" />
      <rect x="17" y="161" rx="0" ry="0" width="56" height="21" />
      <rect x="82" y="161" rx="0" ry="0" width="38" height="21" />
    </ContentLoader>
  );
}
