import {
  CountryContainer,
  CountryImage,
  CountryNameAndRemoveButtonContainer,
  RemoveButton,
} from './styledComponents'
import {CountryName} from '../CountriesList/styledComponents'

const VisitedCountries = props => {
  const {countryDetails, onRemoveVisited} = props
  const {id, name, imageUrl} = countryDetails

  const onRemoveClick = () => {
    onRemoveVisited(id)
  }

  return (
    <CountryContainer>
      <CountryImage src={imageUrl} alt="thumbnail" />
      <CountryNameAndRemoveButtonContainer>
        <CountryName>{name}</CountryName>
        <RemoveButton onClick={onRemoveClick}>Remove</RemoveButton>
      </CountryNameAndRemoveButtonContainer>
    </CountryContainer>
  )
}

export default VisitedCountries
