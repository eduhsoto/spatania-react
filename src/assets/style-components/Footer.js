import styled from "styled-components";
import { ALink } from "./path/Certificate";

export const FooterH = styled.footer`
  margin: 0px 80px;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "element1 element2 element3"
    "element4 element5 element3";
`;

export const FooterItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
`;

export const FooterLink = styled.a`
  margin: 0px 10px;
  color: black;
`;

export const FooterButton = styled(ALink)`
  font-weight: 400;
  margin: 0px 50px;
`;
