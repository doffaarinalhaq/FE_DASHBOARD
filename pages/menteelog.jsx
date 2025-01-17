import React, { useState } from 'react';
import Sidebar from '../component/sidebar';
import Greeting from '../component/greeting';
import { Row, Col, Modal, Container, Button, Form } from 'react-bootstrap';
import { AiOutlineFileSearch } from 'react-icons/ai';
import Router, { useRouter } from 'next/router';

function AddNewLog(props) {
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [feed, setFeed] = useState("");
  const [file, setFile] = useState("");

  const handleNewLog = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      status: status,
      date: date,
      feedback: feed,
      file: file,
    });

    var config = {
      method: "post",
      url: "https://group4.altaproject.online/manager",
      headers: {
        Authorization: `Bearer ${getCookie("Token")}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(response)
        alert("data sudah masuk yaa");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        alert("Data gagal masuk nih");
      })
  }

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add New Log</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <Form.Select aria-label="Default select example">
                <option>Status</option>
                <option value="active">Active</option>
                <option value="repeat">Repeat</option>
                <option value="dropout">Dropout</option>
              </Form.Select>
            </Col>
            <Col xs={6} md={4}>
              Date:
              <input type="date"></input>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <p>Feedback</p>
              <input className="w-100 h-100" type="text-field"></input>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} className="my-5">
              <input type="file"></input>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button className="mt-4" style={{ background: '#F07539', border: '#f7731c' }} onClick={props.onHide}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
const Menteelog = () => {
  const [modalShow, setModalShow] = useState(false);

  const router = useRouter();
  const datas = router.query;

  const logOut = () => {
    Router.push({
      pathname: '/',
    });
  };

  return (
    <div>
      <Container className="condash1">
        <Row>
          <Col lg={{ span: 4, offset: 0 }} className="col1">
            <Sidebar />
          </Col>
          <Col lg={{ span: 8, offset: 5 }} className="col2">
            <div className="colr2">
              <Greeting title="Mentee Log" clickLogOut={() => logOut()} />
          </div>
          <div className="colr">
            <div>
              <Row>
                <Col sm={12} md={6}>
                  <h1 className="fs-3 pt-0">{datas.name}</h1>
                  <h2 className="fs-6">{datas.class_id}</h2>
                  <h2 className="fs-6">{datas.educationmajor}</h2>
                  <h2 className="fs-6">{datas.educationgraduate}</h2>
                </Col>
                <Col sm={12} md={6}>
                  <h2 className="fs-6">Phone : {datas.phone}</h2>
                  <h2 className="fs-6">Telegram : {datas.telegram}</h2>
                  <h2 className="fs-6">{datas.email}</h2>
                </Col>
              </Row>
            </div>
            <div className="colr">
              <div>
                <Row>
                  <Col lg={{ span: 6, offset: 0 }}>
                    <h1 className="fs-3 pt-0">Rachman Kamil</h1>
                    <h2 className="fs-6">Quality Enggineer Batch 8</h2>
                    <h2 className="fs-6">IPA</h2>
                    <h2 className="fs-6">SMA N 29 Palembang</h2>
                  </Col>
                  <Col lg={{ span: 6, offset: 0 }}>
                    <h2 className="fs-6">Phone : 08218341294</h2>
                    <h2 className="fs-6">Telegram:@Rachman</h2>
                    <h2 className="fs-6">Discord:@Rachman</h2>
                    <h2 className="fs-6">Email:Rachman@gmail.com</h2>
                  </Col>
                </Row>
              </div>
              <div>
                <button onClick={() => setModalShow(true)} className="buttonlog">
                  Add New Log
                </button>
                <AddNewLog show={modalShow} onHide={() => setModalShow(false)} />
              </div>
              <div className="log">
                <Row>
                  <Col xs={3}>
                    <div>
                      <p>22 Oktober 2022</p>
                      <p>End Of Section</p>
                      <p className="fs-1">
                        <AiOutlineFileSearch />
                      </p>
                    </div>
                  </Col>
                  <Col>
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, et eos, perferendis similique porro commodi facere dolor placeat aliquid tenetur dolores sapiente eius rem dolorum recusandae animi neque consectetur. Iure?
                    </div>
                    <div className="mt-4 fw-bold ">Change Status : Continue To Session 2</div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="log">
              <Row>
                <Col xs={3}>
                  <div>
                    <p>22 Oktober 2022</p>
                    <p className="fs-1">
                      <AiOutlineFileSearch />
                    </p>
                  </div>
                </Col>
                <Col>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, et eos, perferendis similique porro commodi facere dolor placeat aliquid tenetur dolores sapiente eius rem dolorum recusandae animi neque consectetur. Iure?
                  </div>
                  <div className="mt-4 fw-bold ">Change Status : Continue To Session 2</div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
      </Container>
    </div>
  );
};

export default Menteelog;
