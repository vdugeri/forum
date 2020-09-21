import React from "react";
import moment from "moment";
import styled from "styled-components";
import { Button } from "components/shared";
import { Box } from "components/shared/layout";
import { Theme } from "components/shared/theme";
import { Gap } from "components/messages/message-modal/message-modal.styles";

const ReplyContainer = styled(Box)`
  border-bottom: 0.2px solid #ccc;
  padding: 1rem 0;
`;

const AuthorImage = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${Theme.PrimaryColor};
  width: 50px;
  height: 50px;

  & img {
    width: 100%;
    height: 100%
    border-radius: 50%;
  }

  & span {
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-family: "Domine", serif;
    color: #fff;
  }
`;

const AuthorName = styled.span`
  padding-left: 10px;
  font-size: 1.6rem;
  font-weight: 600;
`;

const ReplyText = styled.p`
  font-size: 1.5rem;
  padding-left: 10px;
  text-align: justify;
  line-height: 2;
`;

const ReplyTime = styled.span`
  font-size: 1.2rem;
  &:before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${Theme.PrimaryGrey};
    display: inline-block;
    margin: 0 5px;
  }
`;

const ReplyCTA = styled.div`
  margin-left: 5.5rem;

  & span {
    font-size: 1.4rem;
    font-weight: 600;
  }

  & button {
    margin-top: 1rem;
    margin-left: -0.5rem;
  }
`;

const Reply = ({ reply }) => {
  const { author } = reply;
  return (
    <ReplyContainer>
      <Box flex>
        <AuthorImage>
          {reply.author.image ? (
            <img src={author.image} alt={reply.author.name} />
          ) : (
            <span>{author.firstName.substring(0, 1)}</span>
          )}
        </AuthorImage>

        <Box>
          <AuthorName>{author.firstName}</AuthorName>
          <ReplyTime>{moment(reply.createdAt).fromNow()}</ReplyTime>
          {reply.author.isPractitioner && (
            <span className="cta">Book Appointment</span>
          )}

          <ReplyText dangerouslySetInnerHTML={{ __html: reply.text }} />
        </Box>
      </Box>
      {author.isPractitioner && (
        <>
          <Gap height="30px" />
          <ReplyCTA>
            <div>
              <span>Have more questions for {author.firstName}?</span>
              <Button pale>Send a private message</Button>
            </div>
          </ReplyCTA>
        </>
      )}
    </ReplyContainer>
  );
};

export default Reply;
