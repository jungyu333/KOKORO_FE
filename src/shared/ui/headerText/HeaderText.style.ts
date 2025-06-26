'use client';

import styled from '@emotion/styled';
import { Heading, Text } from '@chakra-ui/react';

export const Wrapper = styled.div`
  width: 100%;
  padding: 56px 28px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const MainText = styled(Heading)`
  font-weight: 600;
  letter-spacing: -0.02em;
  white-space: pre-line;
  text-align: center;
`;

export const SubText = styled(Text)`
  letter-spacing: -0.02em;
  white-space: pre-line;
  text-align: center;
`;
