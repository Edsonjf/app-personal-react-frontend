import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #fff ;
  display: flex;
  justify-content: center;
` 

function Header() {
    return (
        <HeaderContainer>
          <Logo/>
          <OpcoesHeader/>
        </HeaderContainer>
    );
}

export default Header