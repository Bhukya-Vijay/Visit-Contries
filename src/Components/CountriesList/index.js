import {
  ListItem,
  CountryName,
  VisitedText,
  VisitButton,
} from './styledComponents'

const CountriesList = props => {
  const {countryDetails, onClickVisit} = props
  const {id, name, isVisited} = countryDetails

  const clickedVisit = () => {
    onClickVisit(id)
    console.log(id)
  }

  return (
    <ListItem>
      <CountryName>{name}</CountryName>
      {isVisited ? (
        <VisitedText>Visited</VisitedText>
      ) : (
        <VisitButton onClick={clickedVisit}>Visit</VisitButton>
      )}
    </ListItem>
  )
}

export default CountriesList
