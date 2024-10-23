import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';
const CopyCodeBlock = ({ code }) => {
  return (
    <>
      <CopyBlock
        text={code}
        language={'javascript'}
        showLineNumbers={false}
        theme={dracula}
        codeBlock
      />
    </>
  );
};

export default CopyCodeBlock;
