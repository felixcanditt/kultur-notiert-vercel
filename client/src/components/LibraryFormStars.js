import styled from 'styled-components';
import starIcon from '../images/star.svg';

export default function LibraryFormStars({ formItem, onSetFormItem }) {
  function displayStar(positionOfStar) {
    function rateFormItem(submittedRating) {
      formItem.rating === submittedRating
        ? onSetFormItem({ ...formItem, rating: 0 })
        : onSetFormItem({ ...formItem, rating: submittedRating });
    }

    return (
      <img
        src={starIcon}
        alt="Stern zum Bewerten"
        onClick={() => rateFormItem(positionOfStar)}
        style={
          formItem.rating >= positionOfStar
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
  margin: 1.5rem;
  display: flex;
  gap: 1rem;

  img {
    width: 2rem;
    cursor: pointer;
  }
`;
