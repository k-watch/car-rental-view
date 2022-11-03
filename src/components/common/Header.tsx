import { TitleTextType } from 'types/enum';

interface HeaderProps {
  title: TitleTextType;
}

const Header = ({ title }: HeaderProps) => {
  return <div>{title}</div>;
};

export default Header;
