import React, {useEffect} from "react";
import {Card, Container, Image} from "react-bootstrap";
import queryString from "query-string";
import {useLocation} from "react-router-dom";
import TheLogin from "../../controllers/TheLogin";
import {API_VERIFICATION} from "../../apis/index";

const Verify = () => {
  const location = useLocation();
  const {token} = queryString.parse(location.search);
  useEffect(() => {
    API_VERIFICATION(token)
  }, [token]);
  return (
    <div className="verify-page text-uppercase">
      <Container className="text-center py-5">
        <Card>
          <Card.Body className="py-5">
            <Image
              src="https://store.suitecrm.com/assets/img/addons/bv-email-verify/logo.png?1579782033"
              style={{maxWidth: "100px"}}
            />
            <p className="h1">THANK YOU</p>Verify your e-mail to finish signing up for
            ThaiBPSC
            <div className="pt-3" style={{textAlign: "-webkit-center"}}>
              <TheLogin />
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Verify;
