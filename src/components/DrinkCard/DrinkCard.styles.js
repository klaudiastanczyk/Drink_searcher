import styled from "styled-components";

export const DrinkCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 5px;
  width: 30%;
  margin: 10px 10px;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
`

export const NameContainer = styled.div`
  margin-bottom: 10px;
`

export const IngredientsContainer = styled.div`
  margin-bottom: 10px;
`
export const PriceContainer = styled.div`
  margin-bottom: 10px;
`
export const NameText = styled.h1`
  font-size: 15px;
  font-family: 'Raleway', sans-serif;
  color: white;
  margin-left: 5px;
`

export const IngredientsText = styled.div`
  font-size: 15px;
  font-family: 'Raleway', sans-serif;
  color: white;
`

export const List = styled.ul`
  list-style-type: circle;
`

export const PriceText = styled.h2`
  font-size: 15px;
  font-family: 'Raleway', sans-serif;
  color: white;
  margin-left: 5px;
  bottom: 0px;
`