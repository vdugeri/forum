import React, { useState } from "react";
import queryString from "query-string";
import CreditCardInput from "react-credit-card-input";
import BackLink from "components/shared/backlink.component";
import {
  Container,
  ReviewContainer,
  Heading,
  ExpertContainer,
  ExpertPhoto,
  NameContainer,
  String,
  ChargeContainer,
  PaymentContainer,
  StyledButton,
} from "pages/checkout/checkout.styles";
import useFetch from "effects/use-fetch.effect";
import Loader from "components/shared/loader/loader.component";
import { Gap } from "components/messages/message-modal/message-modal.styles";

const Checkout = ({ location }) => {
  const { expert } = queryString.parse(location.search);
  const [card, setCard] = useState({ cardNumber: "", expiry: "", cvv: "" });
  const [{ data: expertProfile, loading }] = useFetch(`/experts/${expert}`, {});

  const { cardNumber, expiry, cvv } = card;
  console.log(cardNumber);
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <BackLink linkText="Find Experts" linkUrl="/dashboard/book" />
          <ReviewContainer>
            <Heading>Review and Checkout</Heading>
            <ExpertContainer>
              <ExpertPhoto>
                <img src={expertProfile.image} alt="expert" />
              </ExpertPhoto>
              <NameContainer>
                <String size="18px">{expertProfile.name}</String>
                <String size="16px" color="#899391">
                  {expertProfile.designation}
                </String>
              </NameContainer>
            </ExpertContainer>
            <Gap height="30px" />
            <ChargeContainer>
              <String>This expert charges NGN1,000/hr</String>
            </ChargeContainer>
            <Gap height="30px" />
            <PaymentContainer>
              <String size="20px">Payment Method</String>
              <Gap height="20px" />
              <CreditCardInput
                cardNumberInputProps={{
                  value: cardNumber,
                  onChange: (event) =>
                    setCard({ ...card, cardNumber: event.target.value }),
                }}
                cardExpiryInputProps={{
                  value: expiry,
                  onChange: (event) =>
                    setCard({ ...card, expiry: event.target.value }),
                }}
                cardCVCInputProps={{
                  value: cvv,
                  onChange: (event) =>
                    setCard({ ...card, cvv: event.target.value }),
                }}
                fieldStyle={{
                  border: "1px solid #ccc",
                  width: "80%",
                  padding: "2rem 1rem",
                }}
                dangerTextStyle={{ fontSize: "18px" }}
              />
              <Gap height="30px" />
              <StyledButton primary>Book Appointment</StyledButton>
            </PaymentContainer>
          </ReviewContainer>
        </>
      )}
    </Container>
  );
};

export default Checkout;
