import { StyledProgressBar, StyledProgressIndicator } from "./styles";

type Progress = {
    value: number
}

export default function Progress({ value }: Progress) {
  return (
    <StyledProgressBar>
     <StyledProgressIndicator $value={value} />
   </StyledProgressBar>
  )
}
