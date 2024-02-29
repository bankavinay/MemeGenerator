import {Component} from 'react'
import {
  AppContainer,
  MemeGeneratorContainer,
  Heading,
  FormandMemeContainer,
  MemeGeneratorForm,
  CustomLable,
  CustomInput,
  GenerateButton,
  CustomOption,
  CustomSelect,
  MemeContainer,
  TextContent,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
class MemeGenerator extends Component {
  state = {
    bagroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    acctivefrontSizeOptionId: fontSizesOptionsList[0].optionId,
    bagroundImageUrl: '',
    topText: '',
    bottomText: '',
    activeFrontSizeId: '',
  }

  onChangeBagroundImage = event => {
    this.setState({bagroundImageUrlInput: event.target.value})
  }
  onChangeTopTextInput = event => {
    this.setState({topTextInput: event.target.value})
  }
  onChangeBottomInput = event => {
    this.setState({bottomTextInput: event.target.value})
  }
  onChangeFrontSizeOptionID = event => {
    this.setState({acctivefrontSizeOptionId: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      bagroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      acctivefrontSizeOptionId,
    } = this.state

    this.setState({
      bagroundImageUrl: bagroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFrontSizeId: acctivefrontSizeOptionId,
    })
  }
  renderMemeGeneratorForm = () => {
    const {
      acctivefrontSizeOptionId,
      bagroundImageUrlInput,
      topTextInput,
      bottomTextInput,
    } = this.state

    return (
      <MemeGeneratorForm onSubmit={this.onGenerateMeme}>
        <CustomLable htmlFor="backgrondImageUrl">Image URL</CustomLable>
        <CustomInput
          type="text"
          id="backgrondImageUrl"
          value={bagroundImageUrlInput}
          onChange={this.onChangeBagroundImage}
          placeholder="Enter the Top URL"
        />
        <CustomLable htmlFor="topText">Top Text</CustomLable>
        <CustomInput
          type="text"
          id="topText"
          value={topTextInput}
          onChange={this.onChangeTopTextInput}
          placeholder="Enter the Top Text"
        />
        <CustomLable htmlFor="bottomText">Bottom Text</CustomLable>
        <CustomInput
          type="text"
          id="bottomText"
          value={bottomTextInput}
          onChange={this.onChangeBottomInput}
          placeholder="Enter the Bottom Text"
        />
        <CustomLable htmlFor="select">Font Size</CustomLable>
        <CustomSelect
          id="select"
          value={acctivefrontSizeOptionId}
          onChange={this.onChangeFrontSizeOptionID}
        >
          {fontSizesOptionsList.map(each => (
            <CustomOption key={each.optionId} value={each.optionId}>
              {each.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <GenerateButton type="submit">Generate</GenerateButton>
      </MemeGeneratorForm>
    )
  }
  renderMeme = () => {
    const {backgroundImageUrl, topText, bottomText, activeFrontSizeId} =
      this.state

    return (
      <MemeContainer data-testid="meme" backgroudImage={backgroundImageUrl}>
        <TextContent activeFrontSizeId={activeFrontSizeId}>
          {topText}
        </TextContent>
        <TextContent activeFrontSizeId={activeFrontSizeId}>
          {bottomText}
        </TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormandMemeContainer>
            {this.renderMeme()}
            {this.renderMemeGeneratorForm()}
          </FormandMemeContainer>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}
export default MemeGenerator
