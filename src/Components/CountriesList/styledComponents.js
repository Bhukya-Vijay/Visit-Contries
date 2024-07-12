import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #334155;
  border-radius: 5px;
  padding: 5px;
`
export const CountryName = styled.p`
  font-family: 'Roboto';
  color: white;
`
export const VisitButton = styled.button`
  height: 30px;
  width: 80px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  outline: none;
`
export const VisitedText = styled.p`
  color: #334155;
`
