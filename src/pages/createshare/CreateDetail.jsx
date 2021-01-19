
import React from "react";
import { Container} from "react-bootstrap";
import CKEditor from 'ckeditor4-react';
const CreateDetail = () => {
  return (
    <Container className="px-0">
      <div className="box-sheare detail">
        <CKEditor
        // data={this.state.events_detail_th}
        // onChange={this.onEditorTHChange}
        // config={{
        //   filebrowserBrowseUrl: 'http://localhost:3000/#/gallery/',
        // }}
        />
      </div>
    </Container>
  );
}

export default CreateDetail;
