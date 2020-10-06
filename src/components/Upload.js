import React from "react";
import styled from "styled-components";

const Upload = () => {
  return <FileUpload>File Upload</FileUpload>;
};

export default Upload;

const FileUpload = styled.div`
  background: #f3f3f3;
  margin-top: 25px;
  border-radius: 3px;
  padding: 25px;
`;
