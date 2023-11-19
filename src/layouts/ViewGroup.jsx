import { Header, Main } from 'Global';

const ViewGroup = ({ children }) => {
  return (
    <>
      <Header>header</Header>
      <Main>{children}</Main>
    </>
  );
};

export default ViewGroup;
