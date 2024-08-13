import React from 'react';
import { Box, styled } from '@mui/material';

const Workspace = styled(Box)({
	width: '100%',
	height: 'calc(100vh - 85px)',
  marginTop: '50px',
});

type Props = {
	children: React.ReactNode;
};

const PageTemplate = ({ children }: Props) => {
  return (
    <Workspace>
        {children}
    </Workspace>
  );
}

export default PageTemplate;
