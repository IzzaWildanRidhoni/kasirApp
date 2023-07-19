import React, { Component } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { numberWithCommas } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { API_URL } from '../utils/constant';

export default class TotalBayar extends Component {
  submitTotalBayar = (totalBayar) => {
    const pesanan = {
      total_bayar: totalBayar,
      menus: this.props.keranjangs,
    };

    axios.post(API_URL + 'pesanans', pesanan).then((res) => {
      this.props.history.push('/sukses');
    });
  };

  render() {
    const totalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);

    return (
      <>
        {/* web */}
        <div className="fixed-bottom d-none d-md-block">
          <Row>
            <Col md={{ span: 3, offset: 9 }} className="px-4">
              <h4>
                Total Harga :<strong className="float-right">Rp. {numberWithCommas(totalBayar)}</strong>
                <Button variant="primary" block className="mb-2 mt-4" size="lg" onClick={() => this.submitTotalBayar(totalBayar)}>
                  <FontAwesomeIcon icon={faShoppingCart} /> <strong>BAYAR</strong>
                </Button>
              </h4>
            </Col>
          </Row>
        </div>

        {/* mobile */}
        <div className="d-sm-block d-md-none">
          <Row>
            <Col md={{ span: 3, offset: 9 }} className="px-4">
              <h4>
                Total Harga :<strong className="float-right">Rp. {numberWithCommas(totalBayar)}</strong>
                <Button variant="primary" block className="mb-2 mt-4" size="lg" onClick={() => this.submitTotalBayar(totalBayar)}>
                  <FontAwesomeIcon icon={faShoppingCart} /> <strong>BAYAR</strong>
                </Button>
              </h4>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
