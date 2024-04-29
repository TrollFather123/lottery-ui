import styled from "@emotion/styled";
import Button, { ButtonProps } from "@mui/material/Button";

const CustomButtonWrapper = styled(Button)`
  display: flex;
  padding: 17px 41px;
  border-radius: 50px;
  min-width: auto;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  &.Mui-disabled {
  }
`;

interface CustomButtonprops extends ButtonProps {
  className?: string;
  buttonType?: "small" | "large";
}

const CustomButtonPrimary = ({
  children,
  className,
  buttonType,
  ...others
}: CustomButtonprops) => {
  return (
    <CustomButtonWrapper
      className={`${buttonType === "small" && "smallButton"} ${
        className || ""
      }`}
      {...others}
    >
      {children}
    </CustomButtonWrapper>
  );
};

export default CustomButtonPrimary;
