import styled from 'styled-components'

export const CountryContainer = styled.li`
  display: flex;
  flex-direction: column;
  background-color: #334155;
`
export const CountryImage = styled.img`
  height: 140px;
  width: 100%;
`
export const CountryNameAndRemoveButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`
export const CountryName = styled.p`
  font-family: 'Roboto';
  color: white;
`
export const RemoveButton = styled.button`
  height: 30px;
  width: 80px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 2px;
`
