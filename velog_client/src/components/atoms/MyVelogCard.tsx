import React from "react";
import {
  Card as MuiCard,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import styled from "styled-components";
import { Card as CardType } from "../../state/atoms/cardState";
import theme from "../../styles/theme";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

type CardProps = {
  card: CardType;
};

const MyVelogCard: React.FC<CardProps> = ({ card }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/postdetail/${card.id}`);
  };

  const cleanMarkdownCharacters = (title: string) => {
    return title.replace(/^[\s#*->]+/, "");
  };

  return (
    <StyledCard onClick={handleCardClick}>
      <CardMedia
        image={
          card.imageUrl
            ? card.imageUrl
            : "https://64.media.tumblr.com/9a0b871fb2167a4cb290378340ca0fcf/c6d1989e69679318-a2/s400x600/d0b9e100cff357afd107ce9c2e62c28fa7e8b055.gif"
        }
        title={card.title}
      />

      <StyledCardContent>
        <Title variant="h5">
          {" "}
          {card.title ? cleanMarkdownCharacters(card.title) : "제목 없음"}
        </Title>
        <Content variant="body2" color="text.secondary">
          {card.content.length > 150
            ? card.content.substring(0, 150) + "..."
            : card.content}
        </Content>
        <TagsContainer>
          {card.tags.map((tag, index) => (
            <StyledChip key={index} label={tag} />
          ))}
        </TagsContainer>
        <InfoContainer>
          <DateCommentLikeText>{card.date}</DateCommentLikeText>
          <DateCommentLikeText>{`${card.commentCount}개의 댓글`}</DateCommentLikeText>
          <DateCommentLikeText>
            <FavoriteIcon sx={{ fontSize: 20 }} />
            {`${card.likeCount}`}
          </DateCommentLikeText>
        </InfoContainer>
      </StyledCardContent>
    </StyledCard>
  );
};

export default MyVelogCard;

const CardMedia = styled.div<{ image: string; title?: string }>`
  height: 395px;
  background: url(${(props) => props.image}) center/cover no-repeat;
`;

const StyledCard = styled(MuiCard)`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid ${theme.colors.background3};
  margin-bottom: 60px;
  padding-bottom: 60px;
  gap: 35px;
  background-color: transparent;
  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 1600px) {
    width: 740px;
  }

  @media (max-width: 900px) {
    width: 600px;
  }

  @media (max-width: 600px) {
    width: 400px;
  }
`;

const Title = styled(Typography)`
  font-size: ${theme.fontSizes.subtitle};
  font-weight: ${theme.fontWeights.header1};
  color: ${theme.colors.text1};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 0px;
`;

const Content = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${theme.fontSizes.body2};
  font-weight: ${theme.fontWeights.body2};
  color: ${theme.colors.text1};
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 15px;
`;

const DateCommentLikeText = styled(Typography)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3px;
  align-items: center;
  font-size: ${theme.fontSizes.body2};
  font-weight: ${theme.fontWeights.body2};
  color: ${theme.colors.text2};
`;

const StyledChip = styled(Chip)`
  background-color: ${theme.colors.background3};
  color: ${theme.colors.primary1};
  font-size: ${theme.fontSizes.body1};
  font-weight: ${theme.fontWeights.body1};
  padding: 2px 8px;
`;
