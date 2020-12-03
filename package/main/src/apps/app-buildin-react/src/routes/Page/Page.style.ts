import styled from "styled-components"

const colorPink = "#FC9D9A"
const colorGreen = "#83af9b"

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-top: 50px;
`

export const ButtonContainer = styled.div`
  margin-bottom: 40px;
`

export const WindowContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Item = styled.div`
  display: flex;
  margin-bottom: 30px;
`

export const Title = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`

export const Window = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 300px;
  background: rgba(249, 205, 173, 0.1);
  border-radius: 10px;
  border: 4px solid #f9cdad;
`

export const Button = styled.div`
  display: inline-block;
  border-radius: 5px;
  border: 2px solid #83af9b;
  border-color: ${props => (props.color === "pink" ? colorPink : colorGreen)};
  padding: 10px;
  cursor: pointer;
  color: ${props => (props.color === "pink" ? colorPink : colorGreen)};
  margin-right: 12px;

  &:hover {
    color: #eee;
    background: ${props => (props.color === "pink" ? colorPink : colorGreen)};
  }
  &:active {
    background: ${props => (props.color === "pink" ? colorPink : colorGreen)};
  }
`
