import styled from 'styled-components';
import starIcon from '../images/star.svg';

export default function LibraryFormStars({ formItem, onSetFormItem }) {
  function displayStar(positionOfClickedStar) {
    function rateFormItem(submittedRating) {
      formItem.rating === submittedRating
        ? onSetFormItem({ ...formItem, rating: 0 })
        : onSetFormItem({ ...formItem, rating: submittedRating });
    }

    return (
      <img
        src={starIcon}
        alt="Stern zum Bewerten"
        onClick={() => rateFormItem(positionOfClickedStar)}
        style={
          formItem.rating >= positionOfClickedStar
            ? { opacity: '100%' }
            : { opacity: '25%' }
        }
      />
    );
  }

  return (
    <Stars>
      {displayStar(1)}
      {displayStar(2)}
      {displayStar(3)}
      {displayStar(4)}
      {displayStar(5)}
    </Stars>
  );
}

const Stars = styled.div`
  margin: 0.5rem;
  display: flex;
  gap: 1rem;

  img {
    width: 2.2rem;
    cursor: pointer;
  }
`;
