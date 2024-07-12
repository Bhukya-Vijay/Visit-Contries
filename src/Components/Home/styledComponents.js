import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #161624;
  min-height: 100vh;
  padding: 20px;
`
export const CountriesHeading = styled.h1`
  font-family: 'Roboto';
  color: white;
`
export const CountriesListContainer = styled.ul`
  list-style-type: none;
  background-color: #1f1f2f;
  height: 40vh;
  overflow-y: auto;
`
export const VisitedCountriesContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`
export const VisitedHeading = styled.h1`
  font-family: 'Roboto';
  color: white;
`
export const NoCountriesText = styled.p`
  font-family: 'Roboto';
  color: white;
`
