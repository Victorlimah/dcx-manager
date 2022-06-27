import * as S from './styles';
import { BsGithub } from 'react-icons/bs';

export default function Header(){
  return (
    <S.Header>
      <S.HeaderTitle> DCX - Manager </S.HeaderTitle>
      <S.Icon><BsGithub/></S.Icon>
    </S.Header>
  );
}