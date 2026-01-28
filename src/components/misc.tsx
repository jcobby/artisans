import { Tooltip, IconButton } from "react-native-paper";

export const TooltipInstance = ({ placement, children, title }: any) => {
  return (
    <Tooltip title="This is a tooltip">
      <IconButton icon="information" />
    </Tooltip>
  );
};
export const RequiredMarker = () => {
  return <span className="text-red-500">*</span>;
};
