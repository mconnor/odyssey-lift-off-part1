import React from 'react';
import { Header, Footer } from './';
import styled from '@emotion/styled';
import { widths, unit } from '../styles';

/**
 * Layout renders the full page content:
 * with header, Page container and footer
 */



type PropType = {
  grid: boolean
  fullWidth?: boolean
  children?: React.ReactNode
}

const Layout = ({ fullWidth= true, children, grid }: PropType  ):JSX.Element => {
  return (
    <>
      <Header />
      <PageContainer fullWidth={fullWidth} grid={grid}>
        {children}
      </PageContainer>
      <Footer />
    </>
  );
};

export default Layout;

/** Layout styled components */
const PageContainer = styled.div((props: PropType) => ({
  display: 'flex',
  justifyContent: props.grid ? 'center' : 'top',
  flexDirection: props.grid ? 'row' : 'column',
  flexWrap: 'wrap',
  alignSelf: 'center',
  flexGrow: 1,
  maxWidth: props.fullWidth ? null : `${widths.regularPageWidth}px`,
  width: '100%',
  padding: props.fullWidth ? 0 : unit * 2,
  paddingBottom: unit * 5,
}));
