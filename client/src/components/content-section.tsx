import React from 'react';
import styled from '@emotion/styled';
import { widths, colors } from '../styles';

/**
 * Content Section component renders content (mainly text/mdown based)
 * for course detail and lesson detail
 */

type PType = {
  children: React.ReactNode
}
export default function ContentSection ({ children }: PType): JSX.Element {
  return <ContentDiv>{children}</ContentDiv>;
};



/** ContentSection styled component */
const ContentDiv = styled.div({
  marginTop: 10,
  display: 'flex',
  flexDirection: 'column',
  maxWidth: widths.textPageWitdh,
  width: '100%',
  alignSelf: 'center',
  backgroundColor: colors.background,
});
